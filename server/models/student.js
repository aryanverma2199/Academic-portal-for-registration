import mongoose from "mongoose";
const { Schema } = mongoose;
const studentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  avatar: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },

  rollno: {
    type: Number,
  },
  category: {
    type: String,
  },
  address: {
    type: String,
  },
  allotment: {
    type: String,
  },
  // 6
  xresult: {
    type: String,
  },
  xiiresult: {
    type: String,
  },
  tcmigration: {
    type: String,
  },
  castecertificate: {
    type: String,
  },
  incomecertificate: {
    type: String,
  },
  domicilecertificate: {
    type: String,
  },
  // 6
  year: {
    type: Number,
    required: true,
  },
  subjects: [
    {
      type: Schema.Types.ObjectId,
      ref: "subject",
    },
  ],
  username: {
    type: String,
  },
  gender: {
    type: String,
  },
  fatherName: {
    type: String,
  },
  motherName: {
    type: String,
  },
  department: {
    type: String,
    required: true,
  },
  semester: {
    type: String,
    required: true,
  },
  batch: {
    type: String,
  },
  contactNumber: {
    type: Number,
  },
  fatherContactNumber: {
    type: Number,
  },
  dob: {
    type: String,
    required: true,
  },
  passwordUpdated: {
    type: Boolean,
    default: false,
  },

  //new on 07-05-2023
  feeDocArray: [
    {
      docUrl: {
        type: String,
      },
      status: {
        type: String,
        enum: ["pending", "approved", "rejected"],
        default: "pending",
      },
    },
  ],
});

export default mongoose.model("student", studentSchema);
