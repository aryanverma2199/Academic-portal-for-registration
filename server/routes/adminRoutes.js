import express from "express";
import auth from "../middleware/auth.js";
import {
  adminLogin,
  updateAdmin,
  addAdmin,
  addFaculty,
  getFaculty,
  addStudent,
  getStudent,
  addDepartment,
  getAllStudent,
  getAllFaculty,
  getAllAdmin,
  getAllDepartment,
  updatedPassword,
  getAdmin,
  deleteAdmin,
  deleteDepartment,
  deleteFaculty,
  deleteStudent,
} from "../controller/adminController.js";
const router = express.Router();

router.post("/login", adminLogin);
router.post("/updatepassword", auth, updatedPassword);
router.get("/getallstudent", auth, getAllStudent);

router.get("/getallfaculty", auth, getAllFaculty);
router.get("/getalldepartment", auth, getAllDepartment);

router.get("/getalladmin", auth, getAllAdmin);
router.post("/updateprofile", auth, updateAdmin);
router.post("/addadmin", addAdmin);
router.post("/adddepartment", auth, addDepartment);
router.post("/addfaculty", auth, addFaculty);
router.post("/getfaculty", auth, getFaculty);

router.post("/addstudent", auth, addStudent);
router.post("/getstudent", auth, getStudent);

router.post("/getadmin", auth, getAdmin);
router.post("/deleteadmin", auth, deleteAdmin);
router.post("/deletefaculty", auth, deleteFaculty);
router.post("/deletestudent", auth, deleteStudent);
router.post("/deletedepartment", auth, deleteDepartment);

export default router;
