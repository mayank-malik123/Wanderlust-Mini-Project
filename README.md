# 🌍 Wanderlust – Travel Listing Web Application

Wanderlust is a full-stack travel listing web application inspired by platforms like Airbnb. It allows users to explore travel destinations, create and manage property listings, and share their experiences through reviews.

## 🚀 Features

- User authentication and authorization
- Create, view, edit and delete travel listings
- Upload and manage listing images
- Add and delete reviews
- Interactive maps for location visualization
- Session management and flash messages
- Form validation and error handling
- Responsive user interface

## 🛠️ Tech Stack

**Backend**
- Node.js
- Express.js

**Database**
- MongoDB
- Mongoose

**Frontend**
- EJS
- EJS-Mate
- HTML
- CSS
- JavaScript

**Authentication & Security**
- Passport.js
- Passport Local
- Express Session
- Joi

**Cloud & Other Tools**
- Cloudinary
- Mapbox
- Multer
- dotenv

## 📁 Project Structure

```text
Wanderlust/
│
├── controllers/       # Application controllers
├── init/              # Initial/sample data
├── models/            # Mongoose database models
├── public/            # Static files (CSS, JS, images)
├── routes/            # Application routes
├── utils/             # Utility functions
├── views/             # EJS templates
│
├── app.js             # Main application entry point
├── cloudConfig.js     # Cloudinary configuration
├── middleware.js      # Custom middleware
├── schema.js          # Validation schemas
├── package.json
├── package-lock.json
└── .gitignore
```

## ⚙️ Installation and Setup

### 1. Clone the repository

```bash
git clone https://github.com/mayank-malik123/Wanderlust-Mini-Project.git
```

### 2. Navigate to the project directory

```bash
cd Wanderlust-Mini-Project
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure the environment

Configure the required MongoDB, Cloudinary, Mapbox and session credentials using environment variables. Do not commit your `.env` file or expose private credentials.

### 5. Start MongoDB

Make sure your MongoDB service is running and the database connection is configured.

### 6. Run the application

```bash
node app.js
```

### 7. Open in browser

```text
http://localhost:8080
```

## 🎯 Project Objective

The objective of Wanderlust is to develop a full-stack web application that demonstrates practical implementation of backend development, database management, user authentication, CRUD operations, cloud-based image storage and location-based services.

## 👨‍💻 Author

**Mayank Malik**

GitHub: [mayank-malik123](https://github.com/mayank-malik123)

## 📌 Repository

[Wanderlust-Mini-Project](https://github.com/mayank-malik123/Wanderlust-Mini-Project)
