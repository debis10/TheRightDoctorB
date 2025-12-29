const mongoose = require('mongoose');
const Person = require('./models/person.model');
require('dotenv').config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/therightdoctor';

// Sample data
const samplePeople = [
    {
        name: 'John Doe',
        age: 30,
        gender: 'Male',
        mobile: '+1234567890'
    },
    {
        name: 'Jane Smith',
        age: 28,
        gender: 'Female',
        mobile: '+1234567891'
    },
    {
        name: 'Bob Johnson',
        age: 35,
        gender: 'Male',
        mobile: '+1234567892'
    },
    {
        name: 'Alice Williams',
        age: 32,
        gender: 'Female',
        mobile: '+1234567893'
    },
    {
        name: 'Charlie Brown',
        age: 45,
        gender: 'Male',
        mobile: '+1234567894'
    }
];

async function seedDatabase() {
    try {
        // Connect to MongoDB
        await mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('✅ Connected to MongoDB');

        // Clear existing data
        await Person.deleteMany({});
        console.log('🗑️  Cleared existing data');

        // Insert sample data
        const result = await Person.insertMany(samplePeople);
        console.log(`✅ Inserted ${result.length} sample people`);

        // Display inserted data
        console.log('\n📋 Sample Data:');
        result.forEach((person, index) => {
            console.log(`${index + 1}. ${person.name} - Age: ${person.age}, Gender: ${person.gender}, Mobile: ${person.mobile}`);
        });

        console.log('\n✨ Database seeded successfully!');
        process.exit(0);
    } catch (error) {
        console.error('❌ Error seeding database:', error.message);
        process.exit(1);
    }
}

seedDatabase();
