import { Schema, model } from 'mongoose';

const contactSchema = new Schema(
  {
    firstName: {
      type: String,
      required: [true, "first name required"],
      trim: true
    },
    lastName: {
      type: String,
      required: [true, "last name required"],
      trim: true
    },
    email: {
      type: String,
      isEmail: true,
      required: [true, "email required"],
      unique: true
    },
    inquiry: {
      type: String,
    },
    message: {
      type: String,
      // required: [true, "message required"],
      trim: true
    },
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
    id: false,
  }
);


const Contact = model('contact', contactSchema);

export default Contact;