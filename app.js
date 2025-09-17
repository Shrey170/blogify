require("dotenv").config();

const express = require('express');
const path = require('path');    
const ejs = require('ejs');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.error("❌ MongoDB Connection Error:", err));

const Blog = require('./models/blog');

const userRoute = require('./routes/user');
const blogRoute = require('./routes/blog');

const { checkForAuthenticationCookie } = require('./middlewares/authentication');

const app = express();
const PORT = process.env.PORT || 3000;   // fallback if .env is missing

// view engine setup
app.set("view engine", "ejs");
app.set("views", path.resolve("views"));

// middleware
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(checkForAuthenticationCookie("token"));
app.use(express.static(path.resolve('./public')));

// routes
app.get('/', async (req, res) => {
  try {
    const allBlogs = await Blog.find({});
    return res.render('home', {
      user: req.user,
      blogs: allBlogs
    });
  } catch (err) {
    console.error("Error fetching blogs:", err);
    return res.status(500).send("Server Error");
  }
});

app.use('/user', userRoute);
app.use('/blog', blogRoute);

// start server
app.listen(PORT, () => console.log(`🚀 Server started at PORT: ${PORT}`));


console.log("DEBUG MONGO_URL:", process.env.MONGO_URL);
console.log("DEBUG PORT:", process.env.PORT);
