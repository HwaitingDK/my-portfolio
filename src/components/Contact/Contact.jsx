import React, { useState } from 'react';
import { images } from '../../constants';
import './Contact.scss';

// const Footer = () => {
//     const date = new Date().getFullYear();
//   return (
//     <div className='footer'>
//         <div>@{date} Dikshant</div>
//         <div>All rights reserved</div>
//     </div>
//   )
// }


const Contact = () => {
    const [formData, setFormData] = useState({name: '', email: '', message: ''})
    const [isFromSubmitted, setIsFromSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const { name, email, message } = formData;

    const handleChangeInput = (e) => {
        const { name, value } = e.target;

        setFormData ({ ...formData, [name]: value });
    }

    const handleSubmit = (e) => {
        setLoading(true);
        
        const contact = {
        _type: 'contact',
        name: name,
        email: email,
        message: message,
        }
    }

    return (
        <>
        <h2 className="head-text">Take a Coffee & chat with me</h2>

        <div className="app__footer-cards">
            <div className="app__footer-card">
            <img src={images.email} alt='email' />
            <a href="mailto:09gmail09@gmail.com" className="p-text">Hello@Dikshant.com</a>
            </div>
            <div className="app__footer-card">
            <img src={images.mobile} alt='email' />
            <a href="tel:+(91) 930 602 9268" className="p-text">+(91) 930 602 9268</a>
            </div>
        </div>
        {!isFromSubmitted ?
        <div className="app__footer-form app__flex">
            <div className="app__flex">
            <input type="text" className="p-text" placeholder="Your Name" name = "name" value={name} onChange={handleChangeInput}/>
            </div>
            <div className="app__flex">
            <input type="email" className="p-text" placeholder="Your Email" name = "email" value={email} onChange={handleChangeInput}/>
            </div>
            
            <div>
            <textarea 
                className="p-text"
                placeholder="Your Message"
                value={message}
                name="message"
                onChange={handleChangeInput}
                />
            </div>
            <button type="button" className="p-text" onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
        </div>
        : 
        <div>
            <h3 className="head-text">Thank you, for getting in touch!</h3>
        </div>
        }
        </>
    );
    }

export default Contact;