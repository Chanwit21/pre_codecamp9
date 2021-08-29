const User = require('../model/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
  // Register logic gose here
  try {
    // Get user input
    const { first_name, last_name, email, password } = req.body;

    // Validate user Input
    if (!(email && password && first_name && last_name)) {
      return res.status(400).send({ message: 'All input is require' });
    }

    // Check if user aready exist
    // Validate if user exist in our database
    const oldUser = await User.findOne({ email });
    if (oldUser) {
      // ต้องมี return เพื่อมไ่ให่ไปทำงานข้างล่างต่อ
      return res.status(409).send({ message: "'User already exist. Please Login'" });
    }

    // Encrypt user Password
    const encryptPassword = await bcrypt.hash(password, 10);

    // Crete user in our database
    const user = await User.create({
      first_name,
      last_name,
      email: email.toLowerCase(),
      password: encryptPassword,
    });

    // Create token
    const payload = { user_id: User._id, email };
    const token = jwt.sign(payload, process.env.TOKEN_KEY, { expiresIn: '2h' });

    // Save User token
    user.token = token;

    //  return new user
    res.status(201).json({ user, message: 'User has been created' });
  } catch (err) {
    console.log(err);
  }
};

const login = async (req, res) => {
  // login logic gose here

  try {
    // Get user input
    const { email, password } = req.body;

    // Validate user input
    if (!(email && password)) {
      return res.status(400).send({ message: 'All input is require' });
    }

    // Validate if user exist in our database
    const user = await User.findOne({ email });

    if (user && bcrypt.compareSync(password, user.password)) {
      // Create token
      const payload = { user_id: user._id, email };
      const token = jwt.sign(payload, process.env.TOKEN_KEY, { expiresIn: '2h' });

      // save user token
      user.token = token;

      return res.status(200).json({ user, message: 'Login successfuly' });
    }

    res.status(400).send({ massage: 'Invalid Credentials' });
  } catch (err) {
    console.log(err);
  }
};

module.exports = { register, login };
