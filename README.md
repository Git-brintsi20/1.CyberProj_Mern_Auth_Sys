# Advanced MERN Authentication & User Management System

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![Backend](https://img.shields.io/badge/Backend-Node.js%20%26%20Express-green)
![Frontend](https://img.shields.io/badge/Frontend-React%20%26%20Vite-blue)
![Database](https://img.shields.io/badge/Database-MongoDB-brightgreen)

A secure, full-stack authentication system built with MongoDB, Express.js, React, and Node.js. This project goes beyond basic auth by implementing JWT with Refresh Token Rotation, Email-based OTP verification, and Cloudflare Turnstile CAPTCHA for robust security and user management.

**Live Demo:** [Link to your deployed application]

---

## Key Features

-   🔐 **JWT & Refresh Token Rotation:** Secure, stateless API authentication using access tokens and automatically rotated refresh tokens stored in `HttpOnly` cookies to prevent XSS attacks.
-   📧 **Email-Based OTP:** Implements One-Time Passwords sent via email (using **Nodemailer**) for new user account verification and secure password resets.
-   🤖 **CAPTCHA Protection:** Integrates **Cloudflare Turnstile** on registration and login forms to protect against bots and automated abuse without the user-experience friction of traditional CAPTCHAs.
-   👑 **Role-Based Access Control (RBAC):** Middleware protects API routes, ensuring that only users with the appropriate permissions (e.g., `admin`) can access sensitive endpoints.
-   🛡️ **Enhanced Security:**
    -   **Server-Side Input Validation:** Uses `express-validator` to sanitize and validate all incoming data.
    -   **Password Hashing:** Leverages `bcrypt.js` to securely hash and salt user passwords before database storage.
    -   **CORS Configuration:** Properly configured Cross-Origin Resource Sharing for secure communication between the frontend and backend.
-   ⚛️ **Modern Frontend:**
    -   Built with **React** and **Vite** for a fast, modern development experience.
    -   **React Context API** for clean and efficient global state management.
    -   **React Router v6** for client-side routing.
    -   **Toastify** for user-friendly, non-intrusive notifications.
    -   **Tailwind CSS** for a utility-first, responsive design.

## Technology Stack

| Area      | Technologies                                                                                                                                                             |
| :-------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Backend** | Node.js, Express.js, MongoDB (with Mongoose), JSON Web Token (`jsonwebtoken`), `bcrypt.js`, `Nodemailer`, `otp-generator`, `express-validator`, `cookie-parser`, `cors` |
| **Frontend**  | React 19, Vite, React Router, React Context API, Axios, Tailwind CSS, `react-toastify`, `react-turnstile`                                                               |
| **DevOps**    | `nodemon` (for hot-reloading), ES Modules (`"type": "module"`)                                                                                                           |

## Project Structure

```
/
├── backend/
│   ├── config/
│   │   ├── emailTemplates.js
│   │   ├── mongodb.js
│   │   └── nodemailer.js
│   ├── controllers/
│   │   ├── authController.js
│   │   └── userController.js
│   ├── middleware/
│   │   ├── authMiddleware.js
│   │   └── validationMiddleware.js
│   ├── models/
│   │   └── userModel.js
│   ├── routes/
│   ├── .env.example
│   └── server.js
└── frontend/
    ├── src/
    │   ├── components/
    │   ├── context/
    │   │   └── AppContext.jsx
    │   ├── pages/
    │   │   ├── Login.jsx, Home.jsx, etc.
    │   ├── App.jsx
    │   └── main.jsx
    ├── .env.example
    └── vite.config.js
```

## Local Setup & Installation

### Prerequisites

-   Node.js (v18+)
-   NPM or Yarn
-   MongoDB (local or a free [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) cluster)
-   A [Cloudflare Account](https://dash.cloudflare.com/) to get Turnstile keys.
-   An email account/service (like Gmail with an "App Password") for Nodemailer.

### 1. Setup Backend

```bash
# Navigate to the backend directory
cd backend

# Install dependencies
npm install

# Create a .env file
cp .env.example .env
```

**Fill in `backend/.env` with your credentials:**
```env
# Server
PORT=5000
NODE_ENV=development

# Database
MONGO_URI=your_mongodb_connection_string

# JWT Secrets (use strong, random strings)
JWT_ACCESS_SECRET=your_super_strong_jwt_access_secret_key
JWT_REFRESH_SECRET=your_even_stronger_jwt_refresh_secret_key

# Nodemailer (for sending OTP emails)
NODEMAILER_HOST=smtp.gmail.com
NODEMAILER_PORT=465
NODEMAILER_USER=your_email@gmail.com
NODEMAILER_PASS=your_gmail_app_password

# Cloudflare Turnstile (Server-side validation)
TURNSTILE_SECRET_KEY=your_cloudflare_turnstile_secret_key
```

### 2. Setup Frontend

```bash
# Navigate to the frontend directory from the project root
cd ../frontend

# Install dependencies
npm install

# Create a .env file
cp .env.example .env
```

**Fill in `frontend/.env` with your public keys:**
```env
# The URL of your running backend server
VITE_API_URL=http://localhost:5000

# Cloudflare Turnstile (Client-side widget)
VITE_TURNSTILE_SITE_KEY=your_cloudflare_turnstile_site_key
```

### 3. Running the Application

You will need two separate terminals.

-   **Terminal 1 (Backend):**
    ```bash
    cd backend
    npm run server  # Uses nodemon for auto-reloading
    ```

-   **Terminal 2 (Frontend):**
    ```bash
    cd frontend
    npm run dev     # Starts the Vite dev server
    ```
The frontend will be accessible at `http://localhost:5173` (or similar) and the backend API at `http://localhost:5000`.