// import { combineReducers } from "redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import adminReducer from "./adminReducer";
import errorReducer from "./errorReducer";
import facultyReducer from "./facultyReducer";
import studentReducer from "./studentReducer";

export default combineReducers({
  admin: adminReducer,
  errors: errorReducer,
  faculty: facultyReducer,
  student: studentReducer,
});

// const rootReducer = combineReducers({
//   admin: adminReducer,
//   errors: errorReducer,
//   faculty: facultyReducer,
//   student: studentReducer,
// });

// const store = configureStore({
//   reducer: rootReducer,
// });

// export default store;
