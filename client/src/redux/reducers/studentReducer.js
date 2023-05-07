import {
  LOGOUT,
  STUDENT_LOGIN,
  UPDATE_STUDENT,
  UPDATE_PASSWORD,
  STUDENT_REGISTER,
} from "../actionTypes";

const initialState = {
  authData: null,
  updatedPassword: false,
  updatedStudent: false,

  UserName: "",
};

const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    // // newly added on 17/04/2023

    case STUDENT_REGISTER:
      return { ...state, UserName: action?.data.username };

    // ends here of 17/04/2023

    case STUDENT_LOGIN:
      localStorage.setItem("user", JSON.stringify({ ...action?.data }));
      return { ...state, authData: action?.data };
    case LOGOUT:
      localStorage.clear();
      return { ...state, authData: null };
    case UPDATE_PASSWORD:
      return {
        ...state,
        updatedPassword: action.payload,
      };
    case UPDATE_STUDENT:
      return {
        ...state,
        updatedStudent: action.payload,
      };

    default:
      return state;
  }
};

export default studentReducer;
