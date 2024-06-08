// import React, { useState } from 'react';
// // import '../styles/Contact.css'

// // export default function ContactForm() {
// //   const [fullName, setFullName] = useState('');
// //   const [email, setEmail] = useState('');
// //   const [inquiry, setInquiry] = useState('Recruiter');
// //   const [message, setMessage] = useState('');
// //   const [submitted, setSubmitted] = useState(false);
// //   const [emailValid, setEmailValid] = useState(true);
// //   const [fieldsCompleted, setFieldsCompleted] = useState(true);
// //   const [nameRequired, setNameRequired] = useState(false);
// //   const [emailRequired, setEmailRequired] = useState(false);
// //   const [messageRequired, setMessageRequired] = useState(false);

// //   const handleChange = (event) => {
// //     const { name, value } = event.target;
// //     // Update the state based on the input field name
// //     switch (name) {
// //       case 'fullName':
// //         setFullName(value);
// //         setNameRequired(!value);
// //         break;
// //       case 'email':
// //         setEmail(value);
// //         setEmailValid(validateEmail(value));
// //         setEmailRequired(!value);
// //         break;
// //       case 'inquiry':
// //         setInquiry(value);
// //         break;
// //       case 'message':
// //         setMessage(value);
// //         setMessageRequired(!value);
// //         break;
// //       default:
// //         break;
// //     }
// //   };

// //   const validateEmail = (email) => {
// //     // Regular expression for email validation
// //     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// //     return regex.test(email);
// //   };

// //   const handleBlur = (event) => {
// //     const { name, value } = event.target;
// //     if (!value) {
// //       switch (name) {
// //         case 'fullName':
// //           setNameRequired(true);
// //           break;
// //         case 'email':
// //           setEmailRequired(true);
// //           break;
// //         case 'message':
// //           setMessageRequired(true);
// //           break;
// //         default:
// //           break;
// //       }
// //     }
// //   };

// //   const handleSubmit = async (event) => {
// //     event.preventDefault();

// //     // console.log("fullname", fullName, "email", email, "inquiry", inquiry, "message", message)

// //     if (!fullName || !email || !message) {
// //       setFieldsCompleted(false);
// //       return; // Exit the function if any field is empty
// //     } else if (!emailValid) {
// //       return; // Exit the function if email is invalid
// //     }
// //     setSubmitted(true);
// //     document.querySelector('#success-modal').classList.add('is-active');


// //   };

// //   const handleCancel = () => {
// //     // Navigate back to the previous page
// //     window.history.back();
// //   };

// //   return (
// //     <>
// //       {/* Notification for incomplete fields */}
// //       {!fieldsCompleted && (
// //         <div className="notification is-warning">
// //           Please fill out all required fields.
// //         </div>
// //       )}

// //       {/* Notification for invalid email */}
// //       {!emailValid && (
// //         <div className="notification is-danger">
// //           Please enter a valid email address.
// //         </div>
// //       )}

// //       {/* Notification for required fields */}
// //       {nameRequired && (
// //         <div className="notification is-warning">
// //           Name is required.
// //         </div>
// //       )}
// //       {emailRequired && (
// //         <div className="notification is-warning">
// //           Email is required.
// //         </div>
// //       )}
// //       {messageRequired && (
// //         <div className="notification is-warning">
// //           Message is required.
// //         </div>
// //       )}

// //       <div className="modal" id="success-modal">
// //         <div className="modal-background"></div>
// //         <div className="modal-card">
// //           <header className="modal-card-head">
// //             <p className="modal-card-title">Your message has been delivered!</p>
// //             <button className="delete" aria-label="close" onClick={() => {
// //               setSubmitted(false);
// //               window.location.href = '/';
// //             }}></button>
// //           </header>
// //         </div>
// //       </div>

// //       <form name="contact" onSubmit={handleSubmit} data-netlify="true">
// //         <div className="field">
// //           <label className="label">Name</label>
// //           <div className="control">
// //             <input
// //               name="fullName"
// //               value={fullName}
// //               className="input"
// //               type="text"
// //               placeholder="e.g. Audrey Hepburn"
// //               onChange={handleChange}
// //               onBlur={handleBlur}
// //             />
// //           </div>
// //         </div>
// //         <div className="field">
// //           <label className="label">Email</label>
// //           <div className="control has-icons-left">
// //             <input
// //               name="email"
// //               value={email}
// //               className={`input ${!emailValid ? 'is-danger' : ''}`}
// //               type="email"
// //               placeholder="e.g. email@example.com"
// //               onChange={handleChange}
// //               onBlur={handleBlur}
// //             />
// //             <span className="icon is-small is-left fa fa-envelope"></span>
// //           </div>
// //         </div>

// //         <div className="field">
// //           <label className="label">I am a:</label>
// //           <div className="control">
// //             <div className="select">
// //               <select name="inquiry" value={inquiry} onChange={handleChange}>
// //                 <option value="recruiter">Recruiter</option>
// //                 <option value="developer">Fellow developer</option>
// //                 <option value="collaborator">Potential collaborator</option>
// //                 <option value="other">Not listed/other</option>
// //               </select>
// //             </div>
// //           </div>
// //         </div>

// //         <div className="field">
// //           <label className="label">Message</label>
// //           <div className="control">
// //             <textarea
// //               name="message"
// //               className="textarea"
// //               placeholder="Optional message"
// //               value={message}
// //               onChange={handleChange}
// //               onBlur={handleBlur}
// //             ></textarea>
// //           </div>
// //         </div>

// //         <div className="field is-grouped">
// //           <div className="control">
// //             <button type="submit" className="button is-link">Send</button>
// //           </div>
// //           <div className="control">
// //             <button type="button" className="button is-link is-light" onClick={handleCancel}>Cancel</button>
// //           </div>
// //         </div>
// //       </form>
// //     </>
// //   );
// // }


// import { useForm, ValidationError } from '@formspree/react';

// function ContactForm() {
//   const [state, handleSubmit] = useForm("mleqqrew");
//   const [fullName, setFullName] = useState('');
//   const [email, setEmail] = useState('');
//   const [inquiry, setInquiry] = useState('Recruiter');
//   const [message, setMessage] = useState('');
//   const [submitted, setSubmitted] = useState(false);
//   const [emailValid, setEmailValid] = useState(true);
//   const [fieldsCompleted, setFieldsCompleted] = useState(true);
//   const [nameRequired, setNameRequired] = useState(false);
//   const [emailRequired, setEmailRequired] = useState(false);
//   const [messageRequired, setMessageRequired] = useState(false);

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     // Update the state based on the input field name
//     switch (name) {
//       case 'fullName':
//         setFullName(value);
//         setNameRequired(!value);
//         break;
//       case 'email':
//         setEmail(value);
//         setEmailValid(validateEmail(value));
//         setEmailRequired(!value);
//         break;
//       case 'inquiry':
//         setInquiry(value);
//         break;
//       case 'message':
//         setMessage(value);
//         setMessageRequired(!value);
//         break;
//       default:
//         break;
//     }
//   };

//   const validateEmail = (email) => {
//     // Regular expression for email validation
//     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return regex.test(email);
//   };

//   const handleBlur = (event) => {
//     const { name, value } = event.target;
//     if (!value) {
//       switch (name) {
//         case 'fullName':
//           setNameRequired(true);
//           break;
//         case 'email':
//           setEmailRequired(true);
//           break;
//         case 'message':
//           setMessageRequired(true);
//           break;
//         default:
//           break;
//       }
//     }
//   };

//   const handleCancel = () => {
//     // Navigate back to the previous page
//     window.history.back();
//   };



//   if (state.succeeded) {
//     setSubmitted(true);
//     document.querySelector('#success-modal').classList.add('is-active');
//   }

//   return (
//     <>
//       <div className="modal" id="success-modal">
//         <div className="modal-background"></div>
//         <div className="modal-card">
//           <header className="modal-card-head">
//             <p className="modal-card-title">Your message has been delivered!</p>
//             <button className="delete" aria-label="close" onClick={() => {
//               setSubmitted(false);
//               window.location.href = '/';
//             }}></button>
//           </header>
//         </div>
//       </div>

//       {/* Notification for incomplete fields */}
//       {!fieldsCompleted && (
//         <div className="notification is-warning">
//           Please fill out all required fields.
//         </div>
//       )}

//       {/* Notification for invalid email */}
//       {!emailValid && (
//         <div className="notification is-danger">
//           Please enter a valid email address.
//         </div>
//       )}

//       {/* Notification for required fields */}
//       {nameRequired && (
//         <div className="notification is-warning">
//           Name is required.
//         </div>
//       )}
//       {emailRequired && (
//         <div className="notification is-warning">
//           Email is required.
//         </div>
//       )}
//       {messageRequired && (
//         <div className="notification is-warning">
//           Message is required.
//         </div>
//       )}

//       <form onSubmit={handleSubmit} className="contact-form">

//         <div className="field">
//           <label className="label">Name</label>
//           <div className="control">
//             <input
//               name="fullName"
//               value={fullName}
//               className="input"
//               type="text"
//               placeholder="e.g. Audrey Hepburn"
//               onChange={handleChange}
//               onBlur={handleBlur}
//             />
//           </div>
//         </div>
//         <div className="field">
//           <label className="label">Email</label>
//           <div className="control has-icons-left">
//             <input
//               name="email"
//               value={email}
//               className={`input ${!emailValid ? 'is-danger' : ''}`}
//               type="email"
//               placeholder="e.g. email@example.com"
//               onChange={handleChange}
//               onBlur={handleBlur}
//             />
//             <span className="icon is-small is-left fa fa-envelope"></span>
//           </div>
//         </div>

//         {/* <div className="form-group">
//         <label htmlFor="email" className="form-label">
//           Email Address
//         </label>
//         <input
//           id="email"
//           type="email"
//           name="email"
//           className="form-input"
//           required
//         />
//         <ValidationError
//           prefix="Email"
//           field="email"
//           errors={state.errors}
//           className="form-error"
//         />
//       </div> */}

//         <div className="field">
//           <label className="label">I am a:</label>
//           <div className="control">
//             <div className="select">
//               <select name="inquiry" value={inquiry} onChange={handleChange}>
//                 <option value="recruiter">Recruiter</option>
//                 <option value="developer">Fellow developer</option>
//                 <option value="collaborator">Potential collaborator</option>
//                 <option value="other">Not listed/other</option>
//               </select>
//             </div>
//           </div>
//         </div>

//         <div className="field">
//           <label className="label">Message</label>
//           <div className="control">
//             <textarea
//               name="message"
//               className="textarea"
//               placeholder="Optional message"
//               value={message}
//               onChange={handleChange}
//               onBlur={handleBlur}
//             ></textarea>
//           </div>
//         </div>

//         {/* <div className="form-group">
//         <label htmlFor="message" className="form-label">
//           Message
//         </label>
//         <textarea
//           id="message"
//           name="message"
//           className="form-textarea"
//           required
//         />
//         <ValidationError
//           prefix="Message"
//           field="message"
//           errors={state.errors}
//           className="form-error"
//         />
//       </div> */}

//         <div className="field is-grouped">
//           <div className="control">
//             <button type="submit" disabled={state.submitting} className="button is-link">Send</button>
//           </div>
//           <div className="control">
//             <button type="button" className="button is-link is-light" onClick={handleCancel}>Cancel</button>
//           </div>
//         </div>
//       </form>
//     </>
//   );
// }

// export default ContactForm;

import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import '../styles/Contact.css'; 

function ContactForm() {
  const [state, handleSubmitFormspree] = useForm("mleqqrew");
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [inquiry, setInquiry] = useState('Recruiter');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [emailValid, setEmailValid] = useState(true);
  const [fieldsCompleted, setFieldsCompleted] = useState(true);
  const [nameRequired, setNameRequired] = useState(false);
  const [emailRequired, setEmailRequired] = useState(false);
  const [messageRequired, setMessageRequired] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    // Update the state based on the input field name
    switch (name) {
      case 'fullName':
        setFullName(value);
        setNameRequired(!value);
        break;
      case 'email':
        setEmail(value);
        setEmailValid(validateEmail(value));
        setEmailRequired(!value);
        break;
      case 'inquiry':
        setInquiry(value);
        break;
      case 'message':
        setMessage(value);
        setMessageRequired(!value);
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

  const handleBlur = (event) => {
    const { name, value } = event.target;
    if (!value) {
      switch (name) {
        case 'fullName':
          setNameRequired(true);
          break;
        case 'email':
          setEmailRequired(true);
          break;
        case 'message':
          setMessageRequired(true);
          break;
        default:
          break;
      }
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!fullName || !email || !message) {
      setFieldsCompleted(false);
      return; // Exit the function if any field is empty
    } else if (!emailValid) {
      return; // Exit the function if email is invalid
    }

    // Submit the formspree form
    handleSubmitFormspree(event).then(() => {
      // if (state.succeeded) {
        setSubmitted(true);
        document.querySelector('#success-modal').classList.add('is-active');
      // }
    });
  };

  const handleCancel = () => {
    // Navigate back to the previous page
    window.history.back();
  };

  return (
    <>
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

      {/* Notification for required fields */}
      {nameRequired && (
        <div className="notification is-warning">
          Name is required.
        </div>
      )}
      {emailRequired && (
        <div className="notification is-warning">
          Email is required.
        </div>
      )}
      {messageRequired && (
        <div className="notification is-warning">
          Message is required.
        </div>
      )}

      <form onSubmit={handleSubmit} className="contact-form">

        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input
              name="fullName"
              value={fullName}
              className="input"
              type="text"
              placeholder="e.g. Audrey Hepburn"
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Email</label>
          <div className="control has-icons-left">
            <input
              name="email"
              value={email}
              className={`input ${!emailValid ? 'is-danger' : ''}`}
              type="email"
              placeholder="e.g. email@example.com"
              onChange={handleChange}
              onBlur={handleBlur}
            />
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
            <textarea
              name="message"
              className="textarea"
              placeholder="Optional message"
              value={message}
              onChange={handleChange}
              onBlur={handleBlur}
            ></textarea>
          </div>
        </div>

        <div className="field is-grouped">
          <div className="control">
            <button type="submit" disabled={state.submitting} className="button is-link">Send</button>
          </div>
          <div className="control">
            <button type="button" className="button is-link is-light" onClick={handleCancel}>Cancel</button>
          </div>
        </div>
      </form>
    </>
  );
}

export default ContactForm;

