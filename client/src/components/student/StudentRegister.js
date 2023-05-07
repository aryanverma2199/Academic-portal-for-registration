import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { studentRegister } from "../../redux/actions/studentActions";

import "./studentregister.css"; // import the CSS file

function StudentRegister() {
  const dispatch = useDispatch();
  const store = useSelector((state) => state);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    email: "",
    year: "",
    semester: "",
    department: "",
    dob: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // handle form submission logic here
  // };
  const handleSubmit = (event) => {
    event.preventDefault();
    // fetch("http://localhost:5000/register", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },

    //   body: {
    //     name: "push",
    //     password: "939339",
    //     email: "singhpuahsp",
    //     year: 4,
    //     section: "a",
    //     department: "cse",
    //     dob: "20/20/6000",
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log("Form data successfully submitted:", data);
    //     setFormData({
    //       name: "",
    //       password: "",
    //       email: "",
    //       year: "",
    //       section: "",
    //       department: "",
    //       dob: "",
    //     });
    //   })
    //   .catch((error) => {
    //     console.error("Error submitting form data:", error);
    //   });

    dispatch(studentRegister(formData, navigate));
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} id="hello">
        <label>
          Name:
          <input
            id="line"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Password:
          <input
            id="line"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Email:
          <input
            id="line"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Year(1,2,3,4):
          <input
            id="line"
            type="text"
            name="year"
            value={formData.year}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Semester:
          <input
            id="line"
            type="text"
            name="semester"
            value={formData.semester}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Department:
          <input
            id="line"
            type="text"
            name="department"
            value={formData.department}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Date of Birth:
          <input
            id="line"
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleInputChange}
          />
        </label>
        <button id="tex" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default StudentRegister;
