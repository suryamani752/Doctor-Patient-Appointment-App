const express = require("express");
const {
  loginController,
  registerController,
  authContoller,
  ApplyDoctorController,
  getAllNotificationController,
  DeleteAllNotificationController,
  getAllDoctorController,
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
router.post(
  "/get-all-notification",
  authMiddleware,
  getAllNotificationController
);
router.post(
  "/Delete-all-notification",
  authMiddleware,
  DeleteAllNotificationController
);

//get all doctor
router.get("/getAllDoctor", authMiddleware, getAllDoctorController)

module.exports = router;
