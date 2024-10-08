const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
// var app = express();  

//REGISTER
router.post("/register", async (req, res) => {
  try {
    // const salt = await bcrypt.genSalt(10);
    // const hashedPass = await bcrypt.hash(req.body.password, salt);
    const newUser = new User({
      username: req.body.name,
      email: req.body.email,
      message: req.body.message,
    });

    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

//LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) return res.status(400).json("Wrong credentials!");


    const validated = await bcrypt.compare(req.body.password, user.password);
    if (!validated) return res.status(400).json("Wrong credentials!");


    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    return res.status(500).json(err);

  }
});



//Feedback
// router.post("/feedback", async (req, res) => {
//   try {
//     // const salt = await bcrypt.genSalt(10);
//     // const hashedPass = await bcrypt.hash(req.body.password, salt);
//     const newFeedback = new Feedback({
//       username: req.body.username,
//       email: req.body.email,
//       message: req.body.message,
//     });

//     const feedback = await newFeedback.save();
//     res.status(200).json(feedback);
//   } catch (err) {
//     res.status(500).json(err);
//     console.log(err);
//   }
// });

module.exports = router;
