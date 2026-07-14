# Blogify

A web-based blog application built with Node.js, Express, MongoDB, and EJS. 

## Features
- User Authentication (JWT-based)
- Create, Read, Update, and Delete (CRUD) operations for blog posts
- Image uploading for posts (Multer)

## Technologies Used
- Node.js
- Express.js
- MongoDB & Mongoose
- EJS (Embedded JavaScript templating)
- JWT (JSON Web Tokens)
- dotenv

## Prerequisites
- Node.js (v14 or higher)
- MongoDB

## Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/Shrey170/blogify.git
   cd blogify
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   Create a `.env` file in the root directory and add your MongoDB URI and JWT Secret.
   ```env
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. Start the application:
   ```bash
   npm start
   # or for development mode:
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:3000` (or the port specified in your app).
