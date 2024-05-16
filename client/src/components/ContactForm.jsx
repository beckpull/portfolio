import React, { useState } from 'react';
import axios from 'axios';


// import nodemailer from 'nodemailer';

// // Create a transporter object using SMTP
// const transporter = nodemailer.createTransport({
//   service: 'gmail',

//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS
//   }
// });

// // Function to send an email
// const sendEmail = async (to, subject, text) => {
//   try {
//     const info = await transporter.sendMail({
//       from: 'beckpull7@gmail.com',
//       to: to,
//       subject: subject,
//       text: text
//     });
//     console.log('Email sent:', info.response);
//   } catch (error) {
//     console.error('Error sending email:', error);
//   }
// };

// Example usage


export default function ContactForm() {
  let [fullName, setFullName] = useState('');
  let [email, setEmail] = useState('');
  let [inquiry, setInquiry] = useState('Recruiter');
  let [message, setMessage] = useState('');
  let [submitted, setSubmitted] = useState(false);
  let [emailValid, setEmailValid] = useState(true);
  let [fieldsCompleted, setFieldsCompleted] = useState(true);

  const handleChange = (event) => {
    const { name, value } = event.target;
    // Update the state based on the input field name
    switch (name) {
      case 'fullName':
        setFullName(value);
        break;
      case 'email':
        setEmail(value);
        setEmailValid(validateEmail(value)); // Validate email
        break;
      case 'inquiry':
        setInquiry(value);
        break;
      case 'message':
        setMessage(value);
        break;
      default:
        break;
    }
  };

  const validateEmail = (email) => {
    // Regular expression for email validation
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };


  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!fullName || !email || !message) {
      setFieldsCompleted(false);
      return; // Exit the function if any field is empty
    } else if (!emailValid) {
      return; // Exit the function if email is invalid
    }
    setSubmitted(true);
    document.querySelector('#success-modal').classList.add('is-active');

    try {
      const response = await axios.post('http://localhost:3000/api/contacts', {
        fullName: fullName,
        email: email,
        inquiry: inquiry,
        message: message
      });
      setSubmitted(true);

      document.querySelector('#success-modal').classList.add('is-active');

      // Handle successful response here, such as displaying a success message
      console.log('Contact form submitted successfully!', `submitted: ${submitted}`, response.data);

      setFullName('');
      setEmail('');
      setInquiry('Recruiter');
      setMessage('');

      // sendEmail(email, 'Thank you for reaching out to me!', 'This email is to confirm that I have received your message and if requested, I will respond shortly! I hope you have a wonderful day 🌻');
      // sendEmail('beckpull@icloud.com', 'Response received from beckpull.com', `Name: ${fullName} Email: ${email} Inquiry Type: ${inquiry} Message: ${message}`);


    } catch (error) {
      // Handle error
      console.error('Error submitting contact form:', error);
    }
  };

  const handleCancel = () => {
    // Navigate back to the previous page
    window.history.back();
  };

  return (
    <>
      {/* Notification for incomplete fields */}
      {!fieldsCompleted && (
        <div className="notification is-warning">
          Please fill out all required fields.
        </div>
      )}

      {/* Notification for invalid email */}
      {!emailValid && (
        <div className="notification is-danger">
          Please enter a valid email address.
        </div>
      )}
      <div className="modal" id="success-modal">
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Your message has been delivered!</p>
            <button className="delete" aria-label="close" onClick={() => {
              setSubmitted(false);
              window.location.href = '/';
            }}></button>
          </header>
        </div>
      </div>

      <form name="contact" onSubmit={handleSubmit} data-netlify="true">
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input name="fullName" value={fullName} className="input" type="text" placeholder="e.g. Audrey Hepburn" onChange={handleChange} />
          </div>
        </div>
        <div className="field">
          <label className="label">Email</label>
          <div className="control has-icons-left">
            <input name="email" value={email} className="input" type="email" placeholder="e.g. email@example.com" onChange={handleChange} />
            <span className="icon is-small is-left fa fa-envelope"></span>
          </div>
        </div>

        <div className="field">
          <label className="label">I am a:</label>
          <div className="control">
            <div className="select">
              <select name="inquiry" value={inquiry} onChange={handleChange}>
                <option value="recruiter">Recruiter</option>
                <option value="developer">Fellow developer</option>
                <option value="collaborator">Potential collaborator</option>
                <option value="other">Not listed/other</option>
              </select>
            </div>
          </div>
        </div>

        <div className="field">
          <label className="label">Message</label>
          <div className="control">
            <textarea name="message" className="textarea" placeholder="Optional message" value={message} onChange={handleChange}></textarea>
          </div>
        </div>

        <div className="field is-grouped">
          <div className="control">
            <button type="submit" className="button is-link">Send</button>
          </div>
          <div className="control">
            <button type="button" className="button is-link is-light" onClick={handleCancel}>Cancel</button>
          </div>
        </div>
      </form>
    </>
  );
}

