import express from "express";
import {
  facultyLogin,
  updatedPassword,
  updateFaculty,
  addStudent,
  deleteStudent,
  getAllStudent,
  getStudent,
} from "../controller/facultyController.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.post("/login", facultyLogin);
router.post("/updatepassword", auth, updatedPassword);
router.post("/updateprofile", auth, updateFaculty);
// new update
router.get("/getallstudent", auth, getAllStudent);
router.post("/addstudent", auth, addStudent);
router.post("/getstudent", auth, getStudent);
router.post("/deletestudent", auth, deleteStudent);

export default router;
