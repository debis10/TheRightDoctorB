# TheRightDoctor - Full Stack Application

A modern, professional people management system built with Angular (frontend) and Node.js + MongoDB (backend).

## 🏗️ Architecture

- **Frontend**: Angular 19 with modern UI/UX design
- **Backend**: Node.js + Express.js RESTful API
- **Database**: MongoDB (local or MongoDB Atlas)

## 📋 Features

### Frontend Features
- ✨ Modern dashboard with statistics cards
- 📊 Professional sidebar navigation
- 👥 User management (CRUD operations)
- 🎨 Blue color scheme with smooth animations
- 📱 Responsive design
- 🔍 Search functionality
- 👤 User profile display

### Backend Features
- 🔌 RESTful API endpoints
- ✅ Data validation
- 🛡️ Error handling
- 📝 MongoDB integration
- 🔄 CORS enabled

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas account)
- npm or yarn

### Installation

1. **Clone the repository**
```bash
cd TheRightDoctor
```

2. **Install Frontend Dependencies**
```bash
npm install
```

3. **Install Backend Dependencies**
```bash
cd backend
npm install
```

4. **Configure MongoDB**

Edit `backend/.env` file:
```env
MONGODB_URI=mongodb://localhost:27017/therightdoctor
# OR for MongoDB Atlas:
# MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/therightdoctor
```

### Running the Application

#### Option 1: Run Both Servers Separately

**Terminal 1 - Backend Server:**
```bash
cd backend
npm run dev
```
Backend will run on `http://localhost:3000`

**Terminal 2 - Frontend Server:**
```bash
npm start
# OR
ng serve
```
Frontend will run on `http://localhost:4200`

#### Option 2: MongoDB Setup

If you don't have MongoDB installed locally:

**Install MongoDB locally:**
- Windows: Download from [MongoDB Download Center](https://www.mongodb.com/try/download/community)
- Mac: `brew install mongodb-community`
- Linux: Follow [MongoDB Installation Guide](https://docs.mongodb.com/manual/installation/)

**OR use MongoDB Atlas (Cloud):**
1. Create free account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a cluster
3. Get connection string
4. Update `backend/.env` with your connection string

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/person` | Get all people |
| GET | `/person/:id` | Get person by ID |
| POST | `/person` | Create new person |
| PUT | `/person/:id` | Update person |
| DELETE | `/person/:id` | Delete person |

### Person Schema

```json
{
  "name": "string (required, 2-100 chars)",
  "age": "number (required, 0-150)",
  "gender": "string (required, Male/Female/Other)",
  "mobile": "string (required, valid phone number)"
}
```

## 🎨 Design Features

- Modern blue color palette (#2196F3)
- Inter font family
- Glassmorphism effects
- Smooth transitions and hover effects
- Card-based layouts
- Professional dashboard statistics
- Status badges
- Avatar initials

## 📁 Project Structure

```
TheRightDoctor/
├── backend/
│   ├── models/
│   │   └── person.model.js
│   ├── routes/
│   │   └── person.routes.js
│   ├── server.js
│   ├── .env
│   └── package.json
├── src/
│   ├── app/
│   │   ├── user-list/
│   │   ├── user-edit/
│   │   ├── user-delete/
│   │   └── ...
│   └── styles.css
└── package.json
```

## 🧪 Testing the API

### Using cURL

**Create Person:**
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

**Get All People:**
```bash
curl http://localhost:3000/person
```

**Update Person:**
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

**Delete Person:**
```bash
curl -X DELETE http://localhost:3000/person/<id>
```

## 🐛 Troubleshooting

### MongoDB Connection Issues
- Ensure MongoDB is running: `mongod` or check MongoDB service
- Verify connection string in `.env`
- Check firewall settings

### CORS Errors
- Backend CORS is enabled for all origins
- If issues persist, check browser console

### Port Already in Use
- Frontend: Change port in `angular.json`
- Backend: Change PORT in `backend/.env`

## 📚 Technologies Used

### Frontend
- Angular 19
- TypeScript
- RxJS
- Angular Router
- Reactive Forms

### Backend
- Node.js
- Express.js
- Mongoose
- MongoDB
- dotenv
- cors
- body-parser

## 👨‍💻 Development

### Frontend Development
```bash
ng serve --open
```

### Backend Development (with auto-reload)
```bash
cd backend
npm run dev
```

### Build for Production
```bash
ng build --configuration production
```

## 📝 License

This project is created for educational purposes.

## 🤝 Contributing

Feel free to fork and submit pull requests!

---

**Happy Coding! 🚀**
