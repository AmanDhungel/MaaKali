import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    phonenumber: {
      type: String,
    },
    message: {
      type: String,
    },
    checked: { type: String, default: "false" },
  },
  {
    timestamps: true,
  }
);

const Contact =
  mongoose.models.Contact || mongoose.model("Contact", ContactSchema);
export default Contact;
