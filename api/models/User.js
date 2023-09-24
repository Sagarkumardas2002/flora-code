const mongoose = require("mongoose");

// const UserSchema = new mongoose.Schema(
//   {
//     username: {
//       type: String,
//       required: true,
//       unique: true,
//     },
//     email: {
//       type: String,
//       required: true,
//       unique: true,
//     },
//     password: {
//       type: String,
//       required: true,
//     },
//     // profilePic: {
//     //   type: String,
//     //   default: "",
//     // },
//   },
//   { timestamps: true }
// );

// module.exports = mongoose.model("User", UserSchema);



const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    message: {
      type: String,
      required: true,
    },
    // profilePic: {
    //   type: String,
    //   default: "",
    // },
  },
  { timestamps: true }
);


// const FeedbackSchema = new mongoose.Schema({
//   username: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   message: {
//     type: String,
//     required: true,
//   },
// },
//   { timestamps: true }
// );

// const Feedback = mongoose.model('Feedback', feedbackSchema);

module.exports = mongoose.model("User", UserSchema);
// module.exports = mongoose.model('Feedback', feedbackSchema);
