import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import NavBar from '../NavBar.js';
import logo from '../logo.png';
import './ContactForm.css';

function ContactForm() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_v4vmthr', 'template_idl8k1c', form.current, 'M_WDqlKpEVmYp-2u9').then((result) => {
            e.target.reset();
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <div className="contactForm tc">
            <img className='logo' src={logo} alt='Risk of Rain 2' /><br />
            <NavBar /><br />
        <form className='form' ref={form} onSubmit={sendEmail}>
            <label for='name'>Name or Discord ID (For contribution credits):</label><br />
            <input type='text' name='user_name' required /><br />
            <label for='content'>Add your message here:</label><br />
            <textarea id='content' name='message' rows='10' cols='50' required /><br />
            <input type='submit' value='Send Muz a message!' />
        </form>
        </div>
    ) 
}

export default ContactForm;