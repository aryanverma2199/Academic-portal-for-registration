import {
  SET_ERRORS,
  UPDATE_PASSWORD,
  STUDENT_LOGIN,
  UPDATE_STUDENT,
  // GET_SUBJECT,
  STUDENT_REGISTER,
} from "../actionTypes";
import * as api from "../api";

export const studentRegister = (formData, navigate) => async (dispatch) => {
  // try {
  //   const { data } = await api.adminSignIn(formData);
  //   dispatch({ type: ADMIN_LOGIN, data });
  //   if (data.result.passwordUpdated) navigate("/admin/home");
  //   else navigate("/admin/update/password");
  // } catch (error) {
  //   dispatch({ type: SET_ERRORS, payload: error.response.data });
  // }

  try {
    const { data, status } = await api.studentRegister(formData);
    const dataFromDispatch = dispatch({ type: STUDENT_REGISTER, data });
    console.log("the data that received in dispatch", dataFromDispatch);

    if (status == 200) navigate("/login/studentlogin");
    else navigate("/student/register");
  } catch (error) {
    dispatch({ type: SET_ERRORS, payload: error.response.data });
  }
};

export const studentSignIn = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.studentSignIn(formData);
    dispatch({ type: STUDENT_LOGIN, data });
    if (data.result.passwordUpdated) navigate("/student/home");
    else navigate("/student/password");
  } catch (error) {
    dispatch({ type: SET_ERRORS, payload: error.response.data });
  }
};

export const studentUpdatePassword =
  (formData, navigate) => async (dispatch) => {
    try {
      const { data } = await api.studentUpdatePassword(formData);
      dispatch({ type: UPDATE_PASSWORD, payload: true });
      alert("Password Updated");
      navigate("/student/home");
    } catch (error) {
      dispatch({ type: SET_ERRORS, payload: error.response.data });
    }
  };

export const updateStudent = (formData) => async (dispatch) => {
  try {
    const { data } = await api.updateStudent(formData);
    dispatch({ type: UPDATE_STUDENT, payload: true });
  } catch (error) {
    dispatch({ type: SET_ERRORS, payload: error.response.data });
  }
};
