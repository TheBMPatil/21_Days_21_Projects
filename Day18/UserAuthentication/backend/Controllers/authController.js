const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../Models/userModel");
const createError = require("../utils/appError");
// // Register
// exports.signup = async (req, res, next) => {
//   try {
//     const user = await User.findOne({ email: req.body.email });

//     if (user) {
//       return next(new createError("User already exists..!", 400));
//     }

//     const hashedPassword = await bcrypt.hash(req.body.password, 12);

//     const newUser = await User.create({
//       ...req.body,
//       password: hashedPassword,
//     });

//     const token = jwt.sign({ _id: newUser._id }, process.env.JWT_SECRET, {
//       expiresIn: "90d",
//     });

//     res.status(201).json({
//       status: "success",
//       message: "User registered successfully..!",
//       token,
//     });
//   } catch (error) {
//     next(error);
//   }
// };

// // Login
// exports.login = async (req, res, next) => {
//   try {
//     const { email, password } = req.body;

//     const user = await User.findOne({ email });
//     if (!user) {
//       return next(new createError("Invalid email or password", 401));
//     }

//     const isPasswordCorrect = await bcrypt.compare(password, user.password);
//     if (!isPasswordCorrect) {
//       return next(new createError("Invalid email or password", 401));
//     }

//     const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
//       expiresIn: "90d",
//     });

//     res.status(200).json({
//       status: "success",
//       message: "Logged in successfully",
//       token,
//     });
//   } catch (error) {
//     next(error);
//   }
// };

// Register
exports.signup = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      return next(new createError("User already exists..!", 400)); // Use createError here
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 12);

    const newUser = await User.create({
      ...req.body,
      password: hashedPassword,
    });

    const token = jwt.sign({ _id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "90d",
    });

    res.status(201).json({
      status: "success",
      message: "User registered successfully..!",
      token,
      user: {
        _id:    newUser._id,
        name:   newUser.name,
        email:  newUser.email,
        role:   newUser.role,
      },
    });
  } catch (error) {
    next(error);
  }
};

// Login
exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return next(new createError("Invalid email or password", 401)); // Use createError here
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return next(new createError("Invalid email or password", 401)); // Use createError here
    }

    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "90d",
    });

    res.status(200).json({
      status: "success",
      message: "Logged in successfully",
      token,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    next(error);
  }
};
