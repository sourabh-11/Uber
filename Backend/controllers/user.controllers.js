const { validationResult } = require('express-validator');
const UserModel = require('../models/user.model');
const userService = require('../services/user.service');

module.exports.registerUser = async (req, res, next) => {
  try {
    // Validate incoming request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        error: errors.array().map(err => ({
          message: err.msg,
        })),
      });
    }

    const { fullname, email, password } = req.body;

    // Hash password
    const hashedPassword = await new UserModel().hashPassword(password);

    // Create user
    const user = await userService.createUser({
      firstname: fullname.firstname,
      lastname: fullname.lastname,
      email,
      password: hashedPassword,
    });

    // Generate token
    const token = user.generateAuthToken();

    // Response
    res.status(201).json({
      message: 'User registered successfully',
      token,
      user: {
        id: user._id,
        fullname: user.fullname,
        email: user.email,
      },
    });
  } catch (err) {
    res.status(500).json({ message: err.message || 'Internal Server Error' });
  }
};
