
# MERN Secure Authentication System
### Project 1 of the "Secure by Design" Series


[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![Tech Stack](https://img.shields.io/badge/Tech-MERN%20Stack-2ea44f)
![Security](https://img.shields.io/badge/Security-Hardened-red)

> **Cybersecurity in Practice: Part 1 - Secure Authentication**
>
> This repository marks the first entry in my "Cybersecurity in Practice" series, where I build and document real-world applications with a security-first approach. This installment focuses on implementing a defense-in-depth strategy for user authentication and session management in a modern web stack.


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
=======
# 🛡️ Cyber Security Projects Repository

> A comprehensive collection of cybersecurity applications demonstrating secure development practices, vulnerability assessment, and privacy-focused solutions built with modern web technologies.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Cybersecurity](https://img.shields.io/badge/Focus-Cybersecurity-red.svg)](https://owasp.org/)
[![OWASP](https://img.shields.io/badge/OWASP-Top%2010-orange.svg)](https://owasp.org/Top10/)
[![JWT](https://img.shields.io/badge/Auth-JWT-purple.svg)](https://jwt.io/)
[![Encryption](https://img.shields.io/badge/Encryption-AES--256-blue.svg)](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard)
[![Security](https://img.shields.io/badge/Security-Penetration%20Testing-darkred.svg)](https://www.sans.org/)
[![Node.js](https://img.shields.io/badge/Node.js-v18+-green.svg)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-v18+-blue.svg)](https://reactjs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-v6+-green.svg)](https://mongodb.com/)

## 🎯 Repository Overview

This repository showcases practical cybersecurity implementations through full-stack applications, covering authentication systems, vulnerability assessment, encryption, and privacy-preserving technologies. Each project demonstrates industry-standard security practices while maintaining clean, professional user interfaces.

---

## 📚 Projects Portfolio

### 🔐 1. MERN Authentication System
**Advanced JWT-Based Security Implementation**

A production-ready authentication system implementing enterprise-level security patterns with modern web technologies.

**🔧 Core Technologies:** MongoDB, Express.js, React, Node.js  
**🛡️ Security Features:**
- JWT Authentication with Refresh Token Rotation
- Role-Based Access Control (RBAC) with Granular Permissions
- Rate Limiting and Brute Force Protection
- Input Validation and Sanitization
- Secure HTTP Headers (Helmet.js Integration)
- Password Hashing with bcrypt + Salt

**📈 Key Learning Outcomes:**
- Token-based authentication architecture
- Secure API design patterns
- Frontend security best practices
- Database security implementation

---

### 💳 2. Secure Bug Tracker SaaS
**Enterprise Bug Management with Security Focus**

A comprehensive bug tracking platform designed for security researchers and bug bounty hunters, featuring encrypted data storage and audit trails.

**🔧 Core Technologies:** MERN Stack, JWT, PDF Generation, File Encryption  
**🛡️ Security Features:**
- End-to-End Encryption for Sensitive Reports
- Multi-Factor Authentication (MFA)
- Audit Logging and Activity Monitoring
- Secure PDF Report Generation
- Input Validation and XSS Prevention
- Role-Based Dashboard Access

**📈 Key Learning Outcomes:**
- Cryptographic implementation in web applications
- Secure file handling and storage
- Audit trail design and implementation
- Enterprise-level access control systems

---

### 🔍 3. Educational Vulnerability Assessment Platform
**Modern DVWA Clone with Learning Focus**

An interactive learning platform for understanding web application vulnerabilities through hands-on practice in a controlled environment.

**🔧 Core Technologies:** MERN Stack, Syntax Highlighting, Progress Tracking  
**🛡️ Educational Features:**
- OWASP Top 10 Vulnerability Demonstrations
- Interactive Exploitation Tutorials
- Secure Code Fix Examples
- Progress Tracking and Skill Assessment
- Multi-Level Difficulty Progression
- Real-World Impact Case Studies

**📈 Key Learning Outcomes:**
- Common web vulnerability patterns
- Secure coding practices
- Penetration testing methodologies
- Vulnerability assessment techniques

---

### 🗃️ 4. Encrypted File Vault
**Zero-Knowledge File Storage System**

A secure file storage solution implementing client-side encryption and multi-factor authentication for sensitive document management.

**🔧 Core Technologies:** MERN Stack, AES-256-GCM Encryption, 2FA, Email OTP  
**🛡️ Security Features:**
- Client-Side File Encryption (AES-256-GCM)
- Two-Factor Authentication Integration
- Email-Based OTP Verification
- Secure Key Derivation (PBKDF2)
- File Integrity Verification
- Automated Secure Backup Systems

**📈 Key Learning Outcomes:**
- Cryptographic file protection
- Key management strategies
- Multi-factor authentication implementation
- Zero-knowledge architecture principles

---

### 📬 5. Anonymous Reporting Platform
**Privacy-First Bug Reporting System**

A privacy-preserving platform enabling anonymous vulnerability reporting while maintaining system integrity and notification capabilities.

**🔧 Core Technologies:** MERN Stack, Telegram Bot API, Temporary Email Services  
**🛡️ Privacy Features:**
- Complete User Anonymity Protection
- IP Address Masking and Log Prevention
- Temporary Email Integration
- Metadata Stripping from Uploads
- Telegram Bot Notification System
- Secure Admin Dashboard

**📈 Key Learning Outcomes:**
- Privacy-preserving system design
- Anonymous communication protocols
- Metadata security and sanitization
- Bot integration and automation

---

### 🕷️ 6. Web Crawler & Parameter Extractor
**Security-Focused URL Analysis Tool**

A command-line tool for analyzing web applications through URL parameter extraction and structure analysis.

**🔧 Core Technologies:** Python, Command Line Interface, URL Parsing  
**🛡️ Analysis Features:**
- URL Parameter Extraction
- Query String Analysis
- Security Pattern Recognition
- Batch URL Processing
- Report Generation

**📈 Key Learning Outcomes:**
- Web application reconnaissance
- URL structure analysis
- Command-line tool development
- Security testing automation

---
>>>>>>> 227664f579d03ad337973490fc3cb85b187d14e9

## 🚀 Getting Started

### Prerequisites
<<<<<<< HEAD
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
=======
```bash
# Required Software
Node.js (v18+)
MongoDB (v6+)
Python (v3.8+) - for crawler project
Git
```

### Quick Setup
```bash
# Clone the repository
git clone https://github.com/Git-brintsi20/cyber-projects.git
cd cyber-projects

# Navigate to specific project
cd project-name

# Install dependencies
npm install

# Configure environment variables
cp .env.example .env
# Edit .env with your configuration

# Start development server
npm run dev
```

---

## 🏗️ Architecture & Design Principles

### Security-First Development
- **Defense in Depth:** Multiple layers of security controls
- **Principle of Least Privilege:** Minimal access rights implementation
- **Input Validation:** Comprehensive data sanitization
- **Secure Communication:** HTTPS and encrypted data transmission

### Modern UI/UX Standards
- **Clean Animations:** Smooth transitions without visual clutter
- **Responsive Design:** Mobile-first approach
- **Accessibility:** WCAG 2.1 compliance
- **Performance:** Optimized loading and interaction patterns

---

## 📖 Learning Path

### Beginner Track
1. **MERN Authentication System** - Foundation security concepts
2. **Web Crawler** - Basic security tool development

### Intermediate Track
3. **Encrypted File Vault** - Cryptographic implementations
4. **Bug Tracker SaaS** - Enterprise security patterns

### Advanced Track
5. **Vulnerability Assessment Platform** - Security testing
6. **Anonymous Reporting Platform** - Privacy engineering

---

## 🤝 Contributing

We welcome contributions that enhance security implementations, improve educational content, or add new cybersecurity project examples.

### Contribution Guidelines
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/security-enhancement`)
3. Implement security best practices
4. Add comprehensive documentation
5. Submit a pull request with detailed description

---

## ⚖️ Legal & Ethical Considerations

### Educational Use Only
- All vulnerable applications are for educational purposes
- Practice only in controlled environments
- Respect responsible disclosure principles
- Follow local laws and regulations

### Security Responsibility
- Implement proper access controls in production
- Regular security audits and updates
- Follow OWASP guidelines
- Maintain updated dependencies

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 🙏 Acknowledgments

- OWASP Foundation for security guidelines
- Security research community
- Open source security tools and libraries
- Educational cybersecurity resources

---

## 📞 Contact & Support

- **Issues:** [GitHub Issues](https://github.com/Git-brintsi20/cyber-projects/issues)
- **Security Reports:** Please report security issues privately via email 

---

**Built with 💻 for cybersecurity education and secure development practices.**
>>>>>>> 227664f579d03ad337973490fc3cb85b187d14e9
