# MERN Secure Authentication System

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![Tech Stack](https://img.shields.io/badge/Tech-MERN%20Stack-2ea44f)
![Security](https://img.shields.io/badge/Security-Hardened-red)

A security-focused, full-stack authentication system built on the MERN stack. This project serves as a boilerplate for building robust applications, implementing a **defense-in-depth** strategy with modern security controls against common web vulnerabilities.

**Live Demo:** [Link to your deployed application]

---

## 🛡️ Security Architecture & Key Features

This system was built with a security-first mindset. Below is a breakdown of the core security controls implemented.

### 1. Authentication & Session Management
-   **JWT & Refresh Token Rotation:** Employs JSON Web Tokens (JWT) for stateless API authentication. Access tokens are short-lived, while long-lived refresh tokens are stored in secure, `httpOnly` cookies. Refresh tokens are automatically rotated upon use to invalidate any potentially compromised tokens.
-   **Secure Cookie Handling:** All session-related tokens are stored in `httpOnly`, `secure`, and `SameSite=Strict` cookies, preventing access from client-side JavaScript (mitigating XSS) and protecting against CSRF attacks.
-   **One-Time Passwords (OTP):** Utilizes `otp-generator` for time-sensitive operations like password resets, ensuring that requests are initiated by the legitimate user.

### 2. Defense Against Automated Attacks
-   **Cloudflare Turnstile Integration:** Implements Cloudflare's smart, privacy-preserving CAPTCHA alternative. It verifies that requests are from legitimate human users without the friction of traditional CAPTCHAs, protecting login and registration endpoints from bots and credential stuffing attacks. (`react-turnstile` on the frontend, custom middleware on the backend).

### 3. Data Integrity & API Security
-   **Server-Side Input Validation:** Leverages `express-validator` to rigorously sanitize and validate all incoming data on the backend. This is a critical defense against injection attacks (NoSQL, XSS) and ensures data integrity before it reaches the controllers or database models.
-   **Strict CORS Policy:** A strict Cross-Origin Resource Sharing (CORS) policy is configured to only allow requests from the designated frontend application, preventing unauthorized web pages from interacting with the API.
-   **Standardized API Responses:** A helper utility ensures consistent and secure response formatting, preventing accidental leakage of sensitive information or stack traces in error messages.

### 4. User & Credential Security
-   **Strong Password Hashing:** Uses the industry-standard `bcryptjs` library to hash and salt user passwords, ensuring that plaintext passwords are never stored in the database.
-   **Email Verification Flow:** Incorporates `nodemailer` to send verification emails upon registration, ensuring that users have access to the email address they sign up with, adding a layer of identity verification.

## 💻 Technology Stack

-   **Backend:**
    -   **Framework:** Node.js, Express.js
    -   **Database:** MongoDB with Mongoose (ODM)
    -   **Security:** `jsonwebtoken`, `bcryptjs`, `express-validator`, `cookie-parser`, `cors`, `nodemailer`, `otp-generator`
    -   **Architecture:** ES Modules (`"type": "module"`)

-   **Frontend:**
    -   **Framework:** React 19, Vite
    -   **State Management:** React Context API
    -   **Routing:** React Router v6
    -   **Styling:** Tailwind CSS
    -   **UI/UX:** `react-toastify` for notifications, `react-turnstile` for security challenges
    -   **API Communication:** Axios

## 📂 Project Structure

```
/
├── backend/
│   ├── config/         # (DB connection, Nodemailer, Email Templates)
│   ├── controllers/    # (Request handling and business logic)
│   ├── helpers/        # (Cookie, OTP, and Response helpers)
│   ├── middleware/     # (Auth, Turnstile, Input Validation)
│   ├── models/         # (Mongoose schemas)
│   ├── routes/         # (API endpoint definitions)
│   ├── .env.example
│   └── server.js       # (Express server entry point)
└── frontend/
    ├── src/
    │   ├── components/
    │   ├── context/    # (Global state via React Context)
    │   ├── pages/      # (Login, Register, Email Verify, etc.)
    │   ├── assets/
    │   └── App.jsx     # (Main app component with routing)
    ├── .env.example
    └── vite.config.js
```

## 🚀 Getting Started

### Prerequisites
-   Node.js (v18+)
-   NPM or Yarn
-   MongoDB (local or a free [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) cluster)
-   Cloudflare account for [Turnstile keys](https://dash.cloudflare.com/?to=/:account/turnstile)

### Installation & Setup

1.  **Clone the Repository:**
    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name
    ```

2.  **Setup Backend:**
    ```bash
    cd backend
    npm install
    cp .env.example .env
    ```
    Now, edit `backend/.env` with your credentials:
    ```env
    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    JWT_ACCESS_SECRET=your_strong_jwt_access_secret
    JWT_REFRESH_SECRET=your_strong_jwt_refresh_secret

    # Cloudflare Turnstile Secret Key
    TURNSTILE_SECRET_KEY=your_cloudflare_turnstile_secret_key

    # Nodemailer (e.g., for Gmail)
    NODEMAILER_HOST=smtp.gmail.com
    NODEMAILER_PORT=465
    NODEMAILER_USER=your_email@gmail.com
    NODEMAILER_PASS=your_gmail_app_password
    ```

3.  **Setup Frontend:**
    ```bash
    # From the root directory
    cd ../frontend
    npm install
    cp .env.example .env
    ```
    Edit `frontend/.env` with your public keys:
    ```env
    # The URL of your running backend server
    VITE_API_URL=http://localhost:5000

    # Cloudflare Turnstile Site Key (this one is public)
    VITE_TURNSTILE_SITE_KEY=your_cloudflare_turnstile_site_key
    ```

### Running the Application

-   **Terminal 1 (Backend):**
    ```bash
    cd backend
    npm run server # Uses nodemon for auto-reloading
    ```

-   **Terminal 2 (Frontend):**
    ```bash
    cd frontend
    npm run dev
    ```