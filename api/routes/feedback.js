const User = require("../models/User");

const router = require("express").Router();

router.get('/feedback', async (req, res) => {
    const feedback = await User.find();
    res.status(200).json(feedback);
});

module.exports = router;