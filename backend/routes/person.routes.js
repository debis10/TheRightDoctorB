const express = require('express');
const router = express.Router();
const Person = require('../models/person.model');

/**
 * GET /person
 * Displays a table with a list of people
 */
router.get('/', async (req, res) => {
    try {
        const people = await Person.find().sort({ createdAt: -1 });
        res.json(people);
    } catch (error) {
        res.status(500).json({
            error: 'Failed to fetch people',
            message: error.message
        });
    }
});

/**
 * GET /person/:id
 * Get a single person by ID
 */
router.get('/:id', async (req, res) => {
    try {
        const person = await Person.findById(req.params.id);

        if (!person) {
            return res.status(404).json({
                error: 'Person not found',
                message: `No person found with ID: ${req.params.id}`
            });
        }

        res.json(person);
    } catch (error) {
        res.status(500).json({
            error: 'Failed to fetch person',
            message: error.message
        });
    }
});

/**
 * POST /person
 * Displays a form to create a single person
 */
router.post('/', async (req, res) => {
    try {
        const { name, age, gender, mobile } = req.body;

        // Validate required fields
        if (!name || !age || !gender || !mobile) {
            return res.status(400).json({
                error: 'Validation failed',
                message: 'All fields (name, age, gender, mobile) are required'
            });
        }

        // Create new person
        const person = new Person({
            name,
            age,
            gender,
            mobile
        });

        const savedPerson = await person.save();
        res.status(201).json(savedPerson);

    } catch (error) {
        if (error.name === 'ValidationError') {
            return res.status(400).json({
                error: 'Validation failed',
                message: error.message,
                details: Object.values(error.errors).map(e => e.message)
            });
        }

        if (error.code === 11000) {
            return res.status(409).json({
                error: 'Duplicate entry',
                message: 'A person with this mobile number already exists'
            });
        }

        res.status(500).json({
            error: 'Failed to create person',
            message: error.message
        });
    }
});

/**
 * PUT /person/:id
 * Displays a form through which a person with a specified id parameter can be edited and updated
 */
router.put('/:id', async (req, res) => {
    try {
        const { name, age, gender, mobile } = req.body;

        // Find and update person
        const updatedPerson = await Person.findByIdAndUpdate(
            req.params.id,
            { name, age, gender, mobile },
            {
                new: true, // Return updated document
                runValidators: true // Run schema validators
            }
        );

        if (!updatedPerson) {
            return res.status(404).json({
                error: 'Person not found',
                message: `No person found with ID: ${req.params.id}`
            });
        }

        res.json(updatedPerson);

    } catch (error) {
        if (error.name === 'ValidationError') {
            return res.status(400).json({
                error: 'Validation failed',
                message: error.message,
                details: Object.values(error.errors).map(e => e.message)
            });
        }

        if (error.code === 11000) {
            return res.status(409).json({
                error: 'Duplicate entry',
                message: 'A person with this mobile number already exists'
            });
        }

        res.status(500).json({
            error: 'Failed to update person',
            message: error.message
        });
    }
});

/**
 * DELETE /person/:id
 * Displays a page through which a person with a specified ID can be deleted
 */
router.delete('/:id', async (req, res) => {
    try {
        const deletedPerson = await Person.findByIdAndDelete(req.params.id);

        if (!deletedPerson) {
            return res.status(404).json({
                error: 'Person not found',
                message: `No person found with ID: ${req.params.id}`
            });
        }

        res.json({
            message: 'Person deleted successfully',
            person: deletedPerson
        });

    } catch (error) {
        res.status(500).json({
            error: 'Failed to delete person',
            message: error.message
        });
    }
});

module.exports = router;
