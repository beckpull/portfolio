import React, { useState } from 'react';
import axios from 'axios';

export default function ContactForm() {
  let [fullName, setFullName] = useState('');
  let [email, setEmail] = useState('');
  let [inquiry, setInquiry] = useState('Recruiter');
  let [message, setMessage] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    // Update the state based on the input field name
    switch (name) {
      case 'fullName':
        setFullName(value);
        break;
      case 'email':
        setEmail(value);
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

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/api/contacts', {
        fullName,
        email,
        inquiry,
        message
      });

      // Handle successful response here, such as displaying a success message
      console.log('Contact form submitted successfully!', response.data);

      // Optionally, reset the form fields after successful submission
      setFullName('');
      setEmail('');
      setInquiry('Recruiter');
      setMessage('');
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
<form name="contact" method="POST" onSubmit={handleSubmit} data-netlify="true">
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
