# TheRightDoctor - Backend API

RESTful Web Service built with Node.js, Express, and MongoDB.

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas account)

## Installation

1. Install dependencies:
```bash
npm install
```

2. Configure MongoDB:
   - For local MongoDB: Make sure MongoDB is running on `mongodb://localhost:27017`
   - For MongoDB Atlas: Update the `MONGODB_URI` in `.env` file with your connection string

## Running the Server

### Development Mode (with auto-reload)
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

The server will start on `http://localhost:3000`

## API Endpoints

### Person Management

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

## Example Requests

### Create Person (POST /person)
```json
{
  "name": "John Doe",
  "age": 30,
  "gender": "Male",
  "mobile": "+1234567890"
}
```

### Update Person (PUT /person/:id)
```json
{
  "name": "John Smith",
  "age": 31,
  "gender": "Male",
  "mobile": "+1234567890"
}
```

## Error Handling

The API returns appropriate HTTP status codes:
- `200` - Success
- `201` - Created
- `400` - Bad Request (validation error)
- `404` - Not Found
- `409` - Conflict (duplicate entry)
- `500` - Server Error

## CORS

CORS is enabled for all origins to allow the Angular frontend to communicate with the API.
