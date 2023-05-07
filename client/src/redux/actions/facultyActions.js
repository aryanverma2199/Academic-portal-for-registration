import {
  SET_ERRORS,
  FACULTY_LOGIN,
  UPDATE_PASSWORD,
  UPDATE_FACULTY,
  //new
  ADD_STUDENT,
  DELETE_STUDENT,
  GET_STUDENT,
  // GET_ALL_STUDENT,
} from "../actionTypes";
import * as api from "../api";

export const facultySignIn = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.facultySignIn(formData);
    dispatch({ type: FACULTY_LOGIN, data });
    if (data.result.passwordUpdated) navigate("/faculty/home");
    else navigate("/faculty/password");
  } catch (error) {
    dispatch({ type: SET_ERRORS, payload: error.response.data });
  }
};

export const facultyUpdatePassword =
  (formData, navigate) => async (dispatch) => {
    try {
      const { data } = await api.facultyUpdatePassword(formData);
      dispatch({ type: UPDATE_PASSWORD, payload: true });
      alert("Password Updated");
      navigate("/faculty/home");
    } catch (error) {
      dispatch({ type: SET_ERRORS, payload: error.response.data });
    }
  };

export const updateFaculty = (formData) => async (dispatch) => {
  try {
    const { data } = await api.updateFaculty(formData);
    dispatch({ type: UPDATE_FACULTY, payload: true });
  } catch (error) {
    dispatch({ type: SET_ERRORS, payload: error.response.data });
  }
};

// export const getStudent = (formData) => async (dispatch) => {
//   try {
//     const { data } = await api.getMarksStudent(formData);
//     dispatch({ type: GET_STUDENT, payload: data });
//   } catch (error) {
//     dispatch({ type: SET_ERRORS, payload: error.response.data });
//   }
// };
// new 01/05
export const getStudent = (formData) => async (dispatch) => {
  try {
    const { data } = await api.getStudent(formData);
    dispatch({ type: GET_STUDENT, payload: data });
  } catch (error) {
    dispatch({ type: SET_ERRORS, payload: error.response.data });
  }
};

//get all student new
// export const getAllStudent = () => async (dispatch) => {
//   try {
//     const { data } = await api.getAllStudent();
//     dispatch({ type: GET_ALL_STUDENT, payload: data });
//   } catch (error) {
//     console.log("Redux Error", error);
//   }
// };
// 07/05
//Add student
export const addStudent = (formData) => async (dispatch) => {
  try {
    const { data } = await api.addStudent(formData);
    alert("Student Added Successfully");
    dispatch({ type: ADD_STUDENT, payload: true });
  } catch (error) {
    dispatch({ type: SET_ERRORS, payload: error.response.data });
  }
};

// Delete Student
export const deleteStudent = (formData) => async (dispatch) => {
  try {
    const { data } = await api.deleteStudent(formData);
    alert("Student Deleted");
    dispatch({ type: DELETE_STUDENT, payload: true });
  } catch (error) {
    dispatch({ type: SET_ERRORS, payload: error.response.data });
  }
};
