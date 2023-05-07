import express from "express";
import {
  studentLogin,
  updatedPassword,
  updateStudent,
  registerStudent,
} from "../controller/studentController.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.post("/login", studentLogin);
// registration
router.post("/register", registerStudent);
router.post("/updatepassword", auth, updatedPassword);
router.post("/updateprofile", auth, updateStudent);

export default router;
