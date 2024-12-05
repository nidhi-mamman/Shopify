const User = require("../model/user");

const signUp = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.create({
      name: name,
      email: email,
      password: password,
    });
    if (user) {
      return res.status(201).json({
        msg: "Signed up successfully",
        user: user
      });
    }
  } catch (error) {
    return res.status(500).json({
      msg: error,
    });
  }
};

module.exports = { signUp };
