// // 01/05
// // import Test from "../models/test.js";
// // 01/05
// import Student from "../models/student.js";
// // import Subject from "../models/subject.js";
// import Department from "../models/department.js";
// // 01/05
// // import Marks from "../models/marks.js";
// // import Attendence from "../models/attendance.js";
// // 01/05
// import jwt from "jsonwebtoken";
// import bcrypt from "bcryptjs";

// export const studentLogin = async (req, res) => {
//   const { username, password } = req.body;
//   const errors = { usernameError: String, passwordError: String };
//   try {
//     const existingStudent = await Student.findOne({ username });
//     if (!existingStudent) {
//       errors.usernameError = "Student doesn't exist.";
//       return res.status(404).json(errors);
//     }
//     const isPasswordCorrect = await bcrypt.compare(
//       password,
//       existingStudent.password
//     );
//     if (!isPasswordCorrect) {
//       errors.passwordError = "Invalid Credentials";
//       return res.status(404).json(errors);
//     }

//     const token = jwt.sign(
//       {
//         email: existingStudent.email,
//         id: existingStudent._id,
//       },
//       "sEcReT",
//       { expiresIn: "1h" }
//     );

//     res.status(200).json({ result: existingStudent, token: token });
//   } catch (error) {
//     console.log(error);
//   }
// };

// // register
// export const registerStudent = async (req, res) => {
//   console.log("mai aa gya");
//   try {
//     const { name, password, email, year, semester, department, dob } = req.body;

//     const existingDepartment = await Department.findOne({ department });
//     let departmentHelper = existingDepartment.departmentCode;

//     const students = await Student.find({ department });
//     let helper;
//     if (students.length < 10) {
//       helper = "00" + students.length.toString();
//     } else if (students.length < 100 && students.length > 9) {
//       helper = "0" + students.length.toString();
//     } else {
//       helper = students.length.toString();
//     }
//     var date = new Date();
//     var components = ["STU", date.getFullYear(), departmentHelper, helper];

//     var username = components.join("");
//     let hashedPassword;
//     const newDob = dob.split("-").reverse().join("-");

//     hashedPassword = await bcrypt.hash(password, 10);

//     const newStudent = await Student.create({
//       name,
//       password: hashedPassword,
//       username,
//       email,
//       year,
//       semester,
//       dob,
//       department,
//       passwordUpdated: true,
//     });

//     if (newStudent) {
//       console.log(newStudent);
//       return res.status(200).json(newStudent);
//     }
//   } catch (error) {
//     console.error(`the error is => ${error}`);
//     res.status(500).json(error);
//   }
// };

// export const updatedPassword = async (req, res) => {
//   try {
//     const { newPassword, confirmPassword, email } = req.body;
//     const errors = { mismatchError: String };
//     if (newPassword !== confirmPassword) {
//       errors.mismatchError =
//         "Your password and confirmation password do not match";
//       return res.status(400).json(errors);
//     }

//     const student = await Student.findOne({ email });
//     let hashedPassword;
//     hashedPassword = await bcrypt.hash(newPassword, 10);
//     student.password = hashedPassword;
//     await student.save();
//     if (student.passwordUpdated === false) {
//       student.passwordUpdated = true;
//       await student.save();
//     }

//     res.status(200).json({
//       success: true,
//       message: "Password updated successfully",
//       response: student,
//     });
//   } catch (error) {
//     res.status(500).json(error);
//   }
// };

// export const updateStudent = async (req, res) => {
//   console.log("from update of Student");
//   try {
//     const {
//       name,
//       dob,
//       department,
//       contactNumber,
//       avatar,
//       email,
//       batch,
//       semester,
//       year,
//       fatherName,
//       motherName,
//       fatherContactNumber,
//       rollno,
//       category,
//       address,
//     } = req.body;

//     console.log(
//       "the data to update ====> ",
//       name,
//       dob,
//       department,
//       contactNumber,
//       avatar,
//       email,
//       batch,
//       semester,
//       year,
//       fatherName,
//       motherName,
//       fatherContactNumber
//     );

//     const updatedStudent = await Student.findOne({ email }).catch((err) => {
//       console.log("error from update student is : ", err);
//     });

//     if (fatherContactNumber) {
//       console.log("the contact number");
//       updatedStudent.fatherContactNumber = fatherContactNumber;

//       await updatedStudent.save().then((data) => {
//         console.log("the father contact name is updated", data);
//       });
//     }

//     if (motherName) {
//       updatedStudent.motherName = motherName;
//       await updatedStudent.save().then((data) => {
//         console.log("the mother name is updated", data);
//       });
//     }

//     if (fatherName) {
//       updatedStudent.fatherName = fatherName;
//       await updatedStudent.save().then((data) => {
//         console.log("the father name is updated", data);
//       });
//     }

//     if (name) {
//       updatedStudent.name = name;
//       await updatedStudent.save();
//     }

//     if (dob) {
//       updatedStudent.dob = dob;
//       await updatedStudent.save();
//     }

//     if (department) {
//       updatedStudent.department = department;
//       await updatedStudent.save();
//     }

//     if (contactNumber) {
//       updatedStudent.contactNumber = contactNumber;
//       await updatedStudent.save();
//     }

//     if (batch) {
//       updatedStudent.batch = batch;
//       await updatedStudent.save();
//     }

//     if (semester) {
//       updatedStudent.semester = semester;
//       await updatedStudent.save();
//     }

//     // new
//     if (rollno) {
//       updatedStudent.rollno = rollno;
//       await updatedStudent.save();
//     }

//     if (category) {
//       updatedStudent.category = category;
//       await updatedStudent.save();
//     }

//     if (address) {
//       updatedStudent.address = address;
//       await updatedStudent.save();
//     }

//     // new
//     if (year) {
//       updatedStudent.year = year;
//       await updatedStudent.save();
//     }

//     if (avatar) {
//       updatedStudent.avatar = avatar;
//       await updatedStudent.save();
//     }

//     console.log("UPDATED DATA====> ", updatedStudent);

//     res.status(200).json(updatedStudent);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// };
// // 01/05

// // export const testResult = async (req, res) => {
// //   try {
// //     const { department, year, section } = req.body;
// //     const errors = { notestError: String };
// //     const student = await Student.findOne({ department, year, section });
// //     const test = await Test.find({ department, year, section });
// //     if (test.length === 0) {
// //       errors.notestError = "No Test Found";
// //       return res.status(404).json(errors);
// //     }
// //     var result = [];
// //     for (var i = 0; i < test.length; i++) {
// //       var subjectCode = test[i].subjectCode;
// //       var subject = await Subject.findOne({ subjectCode });
// //       var marks = await Marks.findOne({
// //         student: student._id,
// //         exam: test[i]._id,
// //       });
// //       if (marks) {
// //         var temp = {
// //           marks: marks.marks,
// //           totalMarks: test[i].totalMarks,
// //           subjectName: subject.subjectName,
// //           subjectCode,
// //           test: test[i].test,
// //         };

// //         result.push(temp);
// //       }
// //     }

// //     res.status(200).json({ result });
// //   } catch (error) {
// //     res.status(500).json(error);
// //   }
// // };
// // 01/05

// // 01/05
// // export const attendance = async (req, res) => {
// //   try {
// //     const { department, year, section } = req.body;
// //     const errors = { notestError: String };
// //     const student = await Student.findOne({ department, year, section });

// //     const attendence = await Attendence.find({
// //       student: student._id,
// //     }).populate("subject");
// //     if (!attendence) {
// //       res.status(400).json({ message: "Attendence not found" });
// //     }

// //     res.status(200).json({
// //       result: attendence.map((att) => {
// //         let res = {};
// //         res.percentage = (
// //           (att.lectureAttended / att.totalLecturesByFaculty) *
// //           100
// //         ).toFixed(2);
// //         res.subjectCode = att.subject.subjectCode;
// //         res.subjectName = att.subject.subjectName;
// //         res.attended = att.lectureAttended;
// //         res.total = att.totalLecturesByFaculty;
// //         return res;
// //       }),
// //     });
// //   } catch (error) {
// //     res.status(500).json(error);
// //   }
// // };
// // 01/05

// -------------------------trial 2

import Student from "../models/student.js";

import Department from "../models/department.js";

import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const studentLogin = async (req, res) => {
  const { username, password } = req.body;
  const errors = { usernameError: String, passwordError: String };
  try {
    const existingStudent = await Student.findOne({ username });
    if (!existingStudent) {
      errors.usernameError = "Student doesn't exist.";
      return res.status(404).json(errors);
    }
    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingStudent.password
    );
    if (!isPasswordCorrect) {
      errors.passwordError = "Invalid Credentials";
      return res.status(404).json(errors);
    }

    const token = jwt.sign(
      {
        email: existingStudent.email,
        id: existingStudent._id,
      },
      "sEcReT",
      { expiresIn: "1h" }
    );

    res.status(200).json({ result: existingStudent, token: token });
  } catch (error) {
    console.log(error);
  }
};

// register
export const registerStudent = async (req, res) => {
  console.log("mai aa gya");
  try {
    const { name, password, email, year, semester, department, dob } = req.body;

    const existingDepartment = await Department.findOne({ department });
    let departmentHelper = existingDepartment.departmentCode;

    const students = await Student.find({ department });
    let helper;
    if (students.length < 10) {
      helper = "00" + students.length.toString();
    } else if (students.length < 100 && students.length > 9) {
      helper = "0" + students.length.toString();
    } else {
      helper = students.length.toString();
    }
    var date = new Date();
    var components = ["STU", date.getFullYear(), departmentHelper, helper];

    var username = components.join("");
    let hashedPassword;
    const newDob = dob.split("-").reverse().join("-");

    hashedPassword = await bcrypt.hash(password, 10);

    const newStudent = await Student.create({
      name,
      password: hashedPassword,
      username,
      email,
      year,
      semester,
      dob,
      department,
      passwordUpdated: true,
    });

    if (newStudent) {
      console.log(newStudent);
      return res.status(200).json(newStudent);
    }
  } catch (error) {
    console.error(`the error is => ${error}`);
    res.status(500).json(error);
  }
};

export const updatedPassword = async (req, res) => {
  try {
    const { newPassword, confirmPassword, email } = req.body;
    const errors = { mismatchError: String };
    if (newPassword !== confirmPassword) {
      errors.mismatchError =
        "Your password and confirmation password do not match";
      return res.status(400).json(errors);
    }

    const student = await Student.findOne({ email });
    let hashedPassword;
    hashedPassword = await bcrypt.hash(newPassword, 10);
    student.password = hashedPassword;
    await student.save();
    if (student.passwordUpdated === false) {
      student.passwordUpdated = true;
      await student.save();
    }

    res.status(200).json({
      success: true,
      message: "Password updated successfully",
      response: student,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateStudent = async (req, res) => {
  console.log("from update of Student");
  try {
    const {
      name,
      dob,
      department,
      contactNumber,
      avatar,
      email,
      batch,
      semester,
      year,
      fatherName,
      motherName,
      fatherContactNumber,
      rollno,
      category,
      address,
      allotment,
      // 6
      xresult,
      xiiresult,
      tcmigration,
      castecertificate,
      incomecertificate,
      domicilecertificate,
    } = req.body;

    console.log(
      "the data to update ====> ",
      name,
      dob,
      department,
      contactNumber,
      avatar,
      email,
      batch,
      semester,
      year,
      fatherName,
      motherName,
      fatherContactNumber,
      rollno,
      category,
      address,
      allotment,
      xresult,
      xiiresult,
      tcmigration,
      castecertificate,
      incomecertificate,
      domicilecertificate
    );

    const updatedStudent = await Student.findOne({ email }).catch((err) => {
      console.log("error from update student is : ", err);
    });

    const objArr = {
      rollno: rollno,
      category: category,
      address: address,
      allotment: allotment,
      fatherContactNumber: fatherContactNumber,
      fatherName: fatherName,
      motherName: motherName,
      dob: dob,
      department: department,
      contactNumber: contactNumber,
      avatar: avatar,
      email: email,
      batch: batch,
      semester: semester,
      year: year,
      name: name,
      // 6
      xresult: xresult,
      xiiresult: xiiresult,
      tcmigration: tcmigration,
      castecertificate: castecertificate,
      incomecertificate: incomecertificate,
      domicilecertificate: domicilecertificate,
    };

    // function switchFunction(caseName) {
    //   switch (caseName) {
    //     case "fatherContactNumber":
    //       console.log("4");
    //       updatedStudent.fatherContactNumber = fatherContactNumber;
    //       break;
    //     case "fatherName":
    //       console.log("5");
    //       updatedStudent.fatherName = fatherName;
    //       break;
    //     case "motherName":
    //       console.log("6");
    //       updatedStudent.motherName = motherName;
    //       break;
    //     case "dob":
    //       console.log("7");
    //       updatedStudent.dob = dob;
    //       break;
    //     case "department":
    //       console.log("8");
    //       updatedStudent.department = department;
    //       break;
    //     case "contactNumber":
    //       console.log("9");
    //       updatedStudent.contactNumber = contactNumber;
    //       break;
    //     case "avatar":
    //       console.log("10");
    //       updatedStudent.avatar = avatar;
    //       break;
    //     case "email":
    //       console.log("11");
    //       updatedPassword.email = email;
    //       break;
    //     case "batch":
    //       console.log("12");
    //       updatedStudent.batch = batch;
    //       break;
    //     case "semester":
    //       console.log("13");
    //       updatedStudent.semester = semester;
    //       break;
    //     case "year":
    //       console.log("14");
    //       updatedStudent.year = year;
    //       break;
    //     case "name":
    //       console.log("15");
    //       updatedStudent.name = name;
    //       break;
    //     case "rollNo":
    //       console.log("1");
    //       updatedStudent.rollno = rollno;
    //       break;
    //     case "address":
    //       console.log("2");
    //       updatedStudent.address = address;
    //       break;
    //     case "category":
    //       console.log("3");
    //       updatedStudent.category = category;
    //       break;
    //   }
    // }

    // for (let caseName of objArr) {
    //   console.log("---------------->", caseName);
    //   switchFunction(caseName);
    // }

    for (let [key, value] of Object.entries(objArr)) {
      console.log("key and value pair ");
      if (value) {
        switch (key) {
          case "fatherContactNumber":
            updatedStudent.fatherContactNumber = fatherContactNumber;
            break;
          case "fatherName":
            updatedStudent.fatherName = fatherName;
            break;
          case "motherName":
            updatedStudent.motherName = motherName;
            break;
          case "dob":
            updatedStudent.dob = dob;
            break;
          case "department":
            updatedStudent.department = department;
            break;
          case "contactNumber":
            updatedStudent.contactNumber = contactNumber;
            break;
          case "avatar":
            updatedStudent.avatar = avatar;
            break;
          case "email":
            updatedStudent.email = email;
            break;
          case "batch":
            updatedStudent.batch = batch;
            break;
          case "semester":
            updatedStudent.semester = semester;
            break;
          case "year":
            updatedStudent.year = year;
            break;
          case "name":
            updatedStudent.name = name;
            break;
          case "rollNo":
            updatedStudent.rollno = rollno;
            break;
          case "address":
            updatedStudent.address = address;
            break;
          case "category":
            updatedStudent.category = category;
            break;
          case "allotment":
            updatedStudent.allotment = allotment;
            break;
          // 6
          case "xresult":
            updatedStudent.xresult = xresult;
            break;
          case "xiiresult":
            updatedStudent.xiiresult = xiiresult;
            break;
          case "tcmigration":
            updatedStudent.tcmigration = tcmigration;
            break;
          case "castecertificate":
            updatedStudent.castecertificate = castecertificate;
            break;
          case "incomecertificate":
            updatedStudent.incomecertificate = incomecertificate;
            break;
          case "domicilecertificate":
            updatedStudent.domicilecertificate = domicilecertificate;
            break;
        }
      }
    }

    await updatedStudent.save();
    console.log("updated student ====>", updatedStudent);

    res.status(200).json(updatedStudent);
  } catch (error) {
    res.status(500).json(error);
  }
};
