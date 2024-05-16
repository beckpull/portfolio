import { Schema, model } from 'mongoose';

const contactSchema = new Schema(
  {
    fullName: {
      type: String,
      // required: [true, "full name required"],
      trim: true
    },
    email: {
      type: String,
      isEmail: true,
      // required: [true, "email required"],
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