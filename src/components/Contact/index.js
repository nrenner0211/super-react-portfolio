import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import {TiMessages} from "react-icons/ti";

function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      setFormState({ [e.target.name]: e.target.value });
      console.log('Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
  };

  return (
    <section className='container-fluid'>
      <h1 className='intro'><TiMessages/> Contact</h1>
      <section className=''>
        <form id="contact-form" className='container-custom' onSubmit={handleSubmit}>

            <label htmlFor="name">Name:</label>
            <input type="text" placeholder="Name" name="name" defaultValue={name} onBlur={handleChange} />
            <label htmlFor="email">Email:</label>
            <input type="email" placeholder="Email" name="email" defaultValue={email} onBlur={handleChange} />
            <label htmlFor="message">Message:</label>
            <textarea name="message" placeholder="Leave a message :-)" defaultValue={message} onBlur={handleChange} />
            
            {errorMessage && (
            <div>
                <p className="error-text">{errorMessage}</p>
            </div>
            )}
            <button className="btn" data-testid="button" type="submit">Submit</button>
        </form>
      </section>
    </section>
  );
}

export default Contact;