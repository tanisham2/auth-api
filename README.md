# Auth API Backend

This is a  backend authentication API project built during my internship in STPL.

This project includes secure user authentication features with proper backend folder structure, middleware, validation, OTP-based password reset flow, and API documentation.

---

## Features

- User Registration API
- User Login API
- Forgot Password API (OTP via Email)
- Reset Password API
- JWT Authentication
- Password Hashing using bcrypt
- MongoDB Database Integration
- Swagger API Documentation
- Input Validation Middleware
- OTP Expiry System
- Secure Environment Variables using `.env`

---

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs
- Nodemailer
- Swagger UI

---

## APIs Included

### 1. Register User

POST /api/auth/register

2. Login User
POST /api/auth/login
3. Forgot Password (Send OTP)
POST /api/auth/forgot-password
4. Reset Password
POST /api/auth/reset-password
Swagger Documentation

Run the server and open:

http://localhost:5000/api-docs
Run Locally

Install dependencies:

npm install

Start server:

npm run dev
Author

Tanisha Mathur

### 1. Register User
```http
POST /api/auth/register
