# MongoDB Atlas Setup Guide

Since MongoDB is not installed locally, you can use **MongoDB Atlas** (free cloud database).

## Step-by-Step Setup

### 1. Create MongoDB Atlas Account

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)
2. Sign up for a free account
3. Verify your email

### 2. Create a Cluster

1. After logging in, click **"Build a Database"**
2. Choose **"M0 FREE"** tier
3. Select a cloud provider (AWS, Google Cloud, or Azure)
4. Choose a region closest to you
5. Click **"Create Cluster"** (this takes 3-5 minutes)

### 3. Create Database User

1. Click **"Database Access"** in the left sidebar
2. Click **"Add New Database User"**
3. Choose **"Password"** authentication
4. Enter username (e.g., `admin`)
5. Enter a strong password (save this!)
6. Set **"Database User Privileges"** to **"Read and write to any database"**
7. Click **"Add User"**

### 4. Configure Network Access

1. Click **"Network Access"** in the left sidebar
2. Click **"Add IP Address"**
3. Click **"Allow Access from Anywhere"** (for development)
   - This adds `0.0.0.0/0` to the whitelist
4. Click **"Confirm"**

### 5. Get Connection String

1. Click **"Database"** in the left sidebar
2. Click **"Connect"** on your cluster
3. Choose **"Connect your application"**
4. Select **"Node.js"** as driver and version **"4.1 or later"**
5. Copy the connection string (looks like):
   ```
   mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```

### 6. Update Backend Configuration

1. Open `backend/.env` file
2. Replace the MongoDB URI with your connection string:
   ```env
   MONGODB_URI=mongodb+srv://admin:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/therightdoctor?retryWrites=true&w=majority
   ```
   
   **Important:**
   - Replace `<username>` with your database username
   - Replace `<password>` with your database password
   - Add `/therightdoctor` before the `?` to specify the database name

### 7. Test Connection

1. Open terminal in the `backend` folder
2. Run the seed script to test connection and add sample data:
   ```bash
   npm run seed
   ```

3. You should see:
   ```
   ✅ Connected to MongoDB
   🗑️  Cleared existing data
   ✅ Inserted 5 sample people
   ✨ Database seeded successfully!
   ```

### 8. Start the Backend Server

```bash
npm run dev
```

You should see:
```
🚀 Server is running on http://localhost:3000
✅ MongoDB Connected Successfully
```

## Troubleshooting

### Connection Timeout
- Check if your IP is whitelisted in Network Access
- Verify your username and password are correct
- Make sure you added the database name to the connection string

### Authentication Failed
- Double-check username and password
- Make sure there are no special characters that need URL encoding
- If password has special characters, URL encode them:
  - `@` → `%40`
  - `#` → `%23`
  - `$` → `%24`
  - etc.

### Cannot Connect
- Ensure you have internet connection
- Check if firewall is blocking MongoDB Atlas
- Try using a different network

## View Your Data

1. Go to MongoDB Atlas dashboard
2. Click **"Browse Collections"** on your cluster
3. You'll see the `therightdoctor` database
4. Click on `people` collection to view your data

## Alternative: Install MongoDB Locally

If you prefer local MongoDB:

### Windows
1. Download from [MongoDB Download Center](https://www.mongodb.com/try/download/community)
2. Run the installer
3. MongoDB will run as a service automatically
4. Use connection string: `mongodb://localhost:27017/therightdoctor`

### Mac
```bash
brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb-community
```

### Linux (Ubuntu)
```bash
wget -qO - https://www.mongodb.org/static/pgp/server-6.0.asc | sudo apt-key add -
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list
sudo apt-get update
sudo apt-get install -y mongodb-org
sudo systemctl start mongod
```

---

**Need Help?** Check the [MongoDB Atlas Documentation](https://docs.atlas.mongodb.com/)
