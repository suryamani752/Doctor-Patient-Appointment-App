const express = require("express");
const {
  loginController,
  registerController,
  authContoller,
  ApplyDoctorController,
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

router.post("/apply-doctor", authMiddleware, ApplyDoctorController);

module.exports = router;
