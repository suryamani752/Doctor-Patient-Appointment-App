const express = require("express");
const {
  loginController,
  registerController,
  authContoller,
} = require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddleware");

//router object
const router = express.Router();

//routes
//login || post
router.post("/login", loginController);

//register || post
router.post("/register", registerController);

//Auth || POST
router.post("/getUserData", authMiddleware, authContoller);

module.exports = router;
