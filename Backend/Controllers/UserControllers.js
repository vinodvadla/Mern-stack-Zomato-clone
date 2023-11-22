let User = require("../Models/userModel");
let jwt = require("jsonwebtoken");
let bcrypt = require("bcrypt");

let creteToken = (id) => {
  let token = jwt.sign({ id }, process.env.SECRET);
  return token;
};



let signupUser = async (req, res) => {
  try {
    let { name, email, password } = req.body;
    let exists = await User.findOne({ email });
    if (exists) {
      throw new Error("User already exists");
    } else {
      let hash = await bcrypt.hash(password, 10);
      let user = new User({
        name,
        email,
        password: hash,
      });
      await user.save();
      return res.json({ message: "Registration successfull" });
    }
  } catch (err) {
    return res.status(404).json({ error: err.message });
  }
};


let loginUser = async (req, res) => {
  try {
    let { email, password } = req.body;
    let user = await User.findOne({ email });
    if (!user) {
      throw new Error("User not exists Please register");
    } else {
      let compare = await bcrypt.compare(password, user.password);
      if (!compare) {
        throw new Error("Incorrect Password");
      } else {
        let token = await creteToken(user._id);
        return res.status(200).json({ user, token });
      }
    }
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};


module.exports = { loginUser, signupUser }
