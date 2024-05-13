import React, { Component } from 'react';
import axios from 'axios';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      inquiry: 'Recruiter', // Default value
      message: '',
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (event) => {
    try {
      
    } catch (err) {
      
    }
  }

  handleCancel = () => {
    // Navigate back to the previous page
    window.history.back();
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div className="field">
            <label className="label">First Name</label>
            <div className="control">
              <input name="firstName" value={this.state.firstName} className="input" type="text" placeholder="e.g. Audrey" onChange={this.handleChange} />
            </div>
          </div>
          <div className="field">
            <label className="label">Last Name</label>
            <div className="control">
              <input name="lastName" value={this.state.lastName} className="input" type="text" placeholder="e.g. Hepburn" onChange={this.handleChange} />
            </div>
          </div>
          <div className="field">
            <label className="label">Email</label>
            <div className="control has-icons-left">
              <input name="email" value={this.state.email} className="input" type="email" placeholder="e.g. email@example.com" onChange={this.handleChange} />
              <span className="icon is-small is-left fa fa-envelope"></span>
            </div>
          </div>

          <div className="field">
            <label className="label">I am a:</label>
            <div className="control">
              <div className="select">
                <select name="inquiry" value={this.state.inquiry} onChange={this.handleChange}>
                  <option>Recruiter</option>
                  <option>Fellow developer</option>
                  <option>Potential collaborator</option>
                  <option>Not listed/other</option>
                </select>
              </div>
            </div>
          </div>

          <div className="field">
            <label className="label">Message</label>
            <div className="control">
              <textarea name="message"  className="textarea" placeholder="Optional message"></textarea>
            </div>
          </div>

          {/* <div className="field">
          <div className="control">
            <label className="checkbox">
              <input type="checkbox" />
              I agree to the <a href="#">terms and conditions</a>
            </label>
          </div>
        </div> */}

          {/* <div className="field">
          <div className="control">
            <label className="radio">
              <input type="radio" name="question" />
              Yes
            </label>
            <label className="radio">
              <input type="radio" name="question" />
              No
            </label>
          </div>
        </div> */}

          <div className="field is-grouped">
            <div className="control">
              <button type="submit" className="button is-link">Submit</button>
            </div>
            <div className="control">
            <button type="button" className="button is-link is-light" onClick={this.handleCancel}>Cancel</button>
            </div>
          </div>
        </form>
      </>
    );
  }
}

export default ContactForm;
