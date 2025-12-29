# 🚀 Quick Start Guide

## Part 2: Node.js + MongoDB Backend Implementation

This guide will help you get the RESTful API backend up and running.

## ✅ What's Been Implemented

### Backend API (Node.js + Express + MongoDB)

✅ **RESTful Endpoints:**
- `GET /person` - List all people
- `GET /person/:id` - Get person by ID
- `POST /person` - Create new person
- `PUT /person/:id` - Update person
- `DELETE /person/:id` - Delete person

✅ **Person Schema:**
- Name (string, required, 2-100 chars)
- Age (number, required, 0-150)
- Gender (string, required, Male/Female/Other)
- Mobile (string, required, valid phone number)

✅ **Features:**
- Data validation
- Error handling
- CORS enabled
- MongoDB integration
- Sample data seeder

### Frontend Updates

✅ **Updated Components:**
- User service now connects to local backend
- Person interface matches backend schema
- Forms updated for new fields (Age, Gender, Mobile)
- Create and Edit functionality
- Delete confirmation page

## 📋 Prerequisites

Before starting, ensure you have:
- ✅ Node.js installed (check: `node --version`)
- ✅ npm installed (check: `npm --version`)
- ⚠️ MongoDB (either local or MongoDB Atlas account)

## 🎯 Step-by-Step Setup

### Step 1: MongoDB Setup

**Option A: Use MongoDB Atlas (Recommended - No local install needed)**
1. Follow the guide in `backend/MONGODB_SETUP.md`
2. Create free account at MongoDB Atlas
3. Get your connection string
4. Update `backend/.env` with your connection string

**Option B: Install MongoDB Locally**
- See installation instructions in `backend/MONGODB_SETUP.md`

### Step 2: Install Backend Dependencies

```bash
cd backend
npm install
```

This installs:
- express (web framework)
- mongoose (MongoDB ODM)
- cors (cross-origin support)
- dotenv (environment variables)
- body-parser (request parsing)
- nodemon (dev auto-reload)

### Step 3: Configure Environment

Edit `backend/.env`:
```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string_here
```

### Step 4: Seed Sample Data (Optional but Recommended)

```bash
npm run seed
```

This will:
- Connect to MongoDB
- Clear existing data
- Insert 5 sample people
- Display the inserted data

### Step 5: Start Backend Server

```bash
npm run dev
```

You should see:
```
🚀 Server is running on http://localhost:3000
✅ MongoDB Connected Successfully
```

### Step 6: Test the API

**Option 1: Use Browser**
- Visit `http://localhost:3000` - See API info
- Visit `http://localhost:3000/person` - See all people

**Option 2: Use cURL**
```bash
# Get all people
curl http://localhost:3000/person

# Create person
curl -X POST http://localhost:3000/person \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","age":25,"gender":"Male","mobile":"+1234567890"}'
```

### Step 7: Start Frontend (In New Terminal)

```bash
# In project root directory
ng serve
```

Frontend runs on `http://localhost:4200`

### Step 8: Test Full Application

1. Open browser to `http://localhost:4200`
2. You should see:
   - Modern dashboard with blue theme
   - Statistics cards
   - User table with sample data
3. Try:
   - ➕ Click "Add New User" to create a person
   - ✏️ Click edit icon to update a person
   - 🗑️ Click delete icon to remove a person

## 🧪 Testing the Backend API

### Test All Endpoints

**1. GET all people:**
```bash
curl http://localhost:3000/person
```

**2. GET person by ID:**
```bash
curl http://localhost:3000/person/<id>
```

**3. POST create person:**
```bash
curl -X POST http://localhost:3000/person \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "age": 30,
    "gender": "Male",
    "mobile": "+1234567890"
  }'
```

**4. PUT update person:**
```bash
curl -X PUT http://localhost:3000/person/<id> \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Smith",
    "age": 31,
    "gender": "Male",
    "mobile": "+1234567890"
  }'
```

**5. DELETE person:**
```bash
curl -X DELETE http://localhost:3000/person/<id>
```

## 📁 Project Structure

```
TheRightDoctor/
├── backend/                    # Node.js Backend
│   ├── models/
│   │   └── person.model.js    # MongoDB Schema
│   ├── routes/
│   │   └── person.routes.js   # API Routes
│   ├── server.js              # Express Server
│   ├── seed.js                # Sample Data
│   ├── .env                   # Configuration
│   ├── package.json
│   ├── README.md
│   └── MONGODB_SETUP.md
│
├── src/app/                   # Angular Frontend
│   ├── user.ts               # Service & Interface
│   ├── user-list/            # List Component
│   ├── user-edit/            # Create/Edit Form
│   └── user-delete/          # Delete Confirmation
│
└── README.md                 # Main Documentation
```

## 🐛 Common Issues

### Backend won't start
- ❌ **MongoDB not connected**: Check your connection string in `.env`
- ❌ **Port already in use**: Change PORT in `.env` to 3001 or another port
- ❌ **Dependencies missing**: Run `npm install` in backend folder

### Frontend can't connect to backend
- ❌ **Backend not running**: Make sure backend server is started
- ❌ **CORS error**: Backend has CORS enabled, check browser console
- ❌ **Wrong URL**: Verify `http://localhost:3000/person` in user.ts

### MongoDB connection fails
- ❌ **Wrong credentials**: Double-check username/password
- ❌ **IP not whitelisted**: Add your IP in MongoDB Atlas Network Access
- ❌ **Connection string format**: Ensure database name is included

## 📊 Validation Rules

The backend enforces these validation rules:

**Name:**
- Required
- 2-100 characters
- Trimmed

**Age:**
- Required
- Number between 0-150

**Gender:**
- Required
- Must be: Male, Female, or Other

**Mobile:**
- Required
- Valid phone number format
- Unique (no duplicates)

## 🎉 Success Indicators

You'll know everything is working when:

1. ✅ Backend server starts without errors
2. ✅ MongoDB connection successful
3. ✅ Sample data loads (if you ran seed)
4. ✅ Frontend displays dashboard
5. ✅ Statistics cards show correct counts
6. ✅ Table displays people from database
7. ✅ Can create, edit, and delete people

## 📚 Next Steps

- Add authentication
- Implement search functionality
- Add pagination
- Create more detailed statistics
- Add file upload for profile pictures
- Implement email notifications

## 🆘 Need Help?

1. Check `backend/README.md` for backend details
2. Check `backend/MONGODB_SETUP.md` for MongoDB setup
3. Check main `README.md` for overall documentation
4. Review error messages in terminal
5. Check browser console for frontend errors

---

**Congratulations! You now have a full-stack MEAN application running! 🎊**
