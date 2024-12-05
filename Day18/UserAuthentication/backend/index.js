require("dotenv").config(); 


const express = require("express"); // Fixed 'requier' to 'require'
const mongoose = require("mongoose"); // Fixed 'moongose' to 'mongoose'
const cors = require("cors"); // Fixed 'requier' to 'require'
const authRouter = require('./routes/authRoute')

const app = express();
console.log(process.env.JWT_SECRET);
// 1) Middlewares
app.use(cors()); // Added parentheses to correctly invoke cors middleware
app.use(express.json()); // Ensure Express can parse JSON

// 2) Routes
app.use('/api/auth',authRouter)
// app.get("/", (req, res) => {
//   res.send("Welcome to the authentication app!");
// });

// 3) MongoDB Connection
mongoose
  .connect("mongodb://127.0.0.1:27017/authentication", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// 4) Global Error Handler
app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message, // Fix typo here
  });
});

// 5) Server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
