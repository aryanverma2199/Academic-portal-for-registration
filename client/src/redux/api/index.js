import axios from "axios";

// const API = axios.create({ baseURL: process.env.REACT_APP_SERVER_URL });
const API = axios.create({ baseURL: "http://localhost:5000/" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("user")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("user")).token
    }`;
  }
  return req;
});

// Admin

export const adminSignIn = (formData) => API.post("/api/admin/login", formData);

export const adminUpdatePassword = (updatedPassword) =>
  API.post("/api/admin/updatepassword", updatedPassword);

export const getAllStudent = () => API.get("/api/admin/getallstudent");

export const getAllFaculty = () => API.get("/api/admin/getallfaculty");

export const getAllAdmin = () => API.get("/api/admin/getalladmin");

export const getAllDepartment = () => API.get("/api/admin/getalldepartment");

export const updateAdmin = (updatedAdmin) =>
  API.post("/api/admin/updateprofile", updatedAdmin);

export const addAdmin = (admin) => API.post("/api/admin/addadmin", admin);

export const deleteAdmin = (data) => API.post("/api/admin/deleteadmin", data);
export const deleteFaculty = (data) =>
  API.post("/api/admin/deletefaculty", data);
export const deleteStudent = (data) =>
  API.post("/api/admin/deletestudent", data);

export const deleteDepartment = (data) =>
  API.post("/api/admin/deletedepartment", data);

export const getAdmin = (admin) => API.post("/api/admin/getadmin", admin);

export const addDepartment = (department) =>
  API.post("/api/admin/adddepartment", department);

export const addFaculty = (faculty) =>
  API.post("/api/admin/addfaculty", faculty);

export const getFaculty = (department) =>
  API.post("/api/admin/getfaculty", department);

export const addStudent = (student) =>
  API.post("/api/admin/addstudent", student);

export const getStudent = (student) =>
  API.post("/api/admin/getstudent", student);

// Faculty

export const facultySignIn = (formData) =>
  API.post("/api/faculty/login", formData);

export const facultyUpdatePassword = (updatedPassword) =>
  API.post("/api/faculty/updatepassword", updatedPassword);

export const updateFaculty = (updatedFaculty) =>
  API.post("/api/faculty/updateprofile", updatedFaculty);

// new
// export const addStudent1 = (student) =>
//   API.post("/api/faculty/addstudent", student);
// export const getStudent1 = (student) =>
//   API.post("/api/faculty/getstudent", student);
// export const deleteStudent1 = (data) =>
//   API.post("/api/faculty/deletestudent", data);

// Student

export const studentSignIn = (formData) =>
  API.post("/api/student/login", formData);

// newly added on 17/04/2023
export const studentRegister = (formData) =>
  API.post("/api/student/register", formData);

export const studentUpdatePassword = (updatedPassword) =>
  API.post("/api/student/updatepassword", updatedPassword);

export const updateStudent = (updatedStudent) => {
  console.log("The form data is==>", updatedStudent);
  return API.post("/api/student/updateprofile", updatedStudent);
};
