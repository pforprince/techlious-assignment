const User = require("../models/UserModel");
const bcrypt = require("bcrypt");

// access - public
// task - to register the user
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const userExists = await User.findOne({ email });

    if (userExists) {
      res.status(400).json({ error: "User already exists" });
    } else {
      const myPassword = await bcrypt.hash(password, 10);
      const user = new User({
        name,
        password: myPassword,
        email,
      });
      await user.save().then(() => {
        res.status(200).json({
          _id: user._id,
          name: user.name,
          email: user.email,
        });
      });
    }
  } catch (error) {
    res.status(500).json({
      error: "Something went wrong",
    });
  }
};

// access - public
// task - to login the user
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExists = await User.findOne({ email }); // if the user email is present in database or not

    if (userExists && (await bcrypt.compare(password, userExists.password))) {
      // if the password matched
      res.status(200).json({
        _id: userExists._id,
        name: userExists.name,
        email: userExists.email,
      });
    } else {
      res.status(401).json({
        error: "Invalid email or password",
      });
    }
  } catch (error) {
    res.status(500).json({
      error: "Something went wrong",
    });
  }
};

module.exports = { registerUser, loginUser };
