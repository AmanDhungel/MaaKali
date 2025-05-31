import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username is required."],
    trim: true,
    validate: {
      validator: function (val: string) {
        return val.length >= 3;
      },
      message: "Username must be at least 3 characters long.",
    },
  },
  email: {
    type: String,
    required: [true, "Email is required."],
    unique: true,
    trim: true,
    validate: [
      {
        validator: function (val: string) {
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
        },
        message: "Invalid email format.",
      },
      {
        validator: async function (val: string) {
          const existing = await this.constructor.findOne({ email: val });
          return !existing || existing._id.equals(this._id);
        },
        message: "Email already exists.",
      },
    ],
  },
  password: {
    type: String,
    required: [true, "Password is required."],
    trim: true,
    validate: {
      validator: function (val: string) {
        return val.length >= 6;
      },
      message: "Password must be at least 6 characters long.",
    },
  },
  image: {
    type: String,
    trim: true,
    validate: {
      validator: function (val: string) {
        if (!val) return true;
        return /^https?:\/\/.+\.(jpg|jpeg|png|gif|webp)$/i.test(val);
      },
      message: "Image must be a valid URL.",
    },
  },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
