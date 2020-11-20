import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import Loading from 'components/Loading';
import './Contact.css';

const Contact = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        setIsLoaded(true);
    }, []);
    const onSubmit = (event) => {
        event.preventDefault();
        emailjs.sendForm('service_xr723vq', 'template_qf9kdqz', event.target, 'user_H4ohHQRiHSzcSUcFanWZH')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
        });
        setTimeout(function () {
            document.getElementById("alert").innerHTML = '';
            document.getElementById("alert").style.display = "none";
        }, 3000);
        document.getElementById("alert").style.display = "inline-block";
        document.getElementById("alert").innerHTML = 'Sent Successfully!👋';
        event.target.reset();
    };
    return (
        <div id="contact" className="get-in-touch container row">
            <h4>03.</h4>    
            <h2 className="title col-lg-12">Get in Touch</h2>
            <p data-aos="fade-up" id="alert"></p>
            { isLoaded ?
            <>
            <div data-aos="fade-up" data-aos-delay="200" className="get-in-touch-content col-lg-12 row">
                <form encType="multipart/form-data" method="post" onSubmit={onSubmit} className="contact-form row col-lg-6" autoComplete="off">
                    <div className="form-field col-lg-12">
                        <input name="name" id="name" className="input-text js-input" type="text" required />
                        <label className="label" htmlFor="name">Name</label>
                    </div>
                    <div className="form-field col-lg-12">
                        <input name="email" id="email" className="input-text js-input" type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required />
                        <label className="label" htmlFor="email">Email</label>
                    </div>  
                    <div className="form-field col-lg-12">
                        <input name="message" id="message" className="input-text js-input" type="text" required />
                        <label className="label" htmlFor="message">Message</label>
                    </div>
                    <div className="form-field submit-container col-lg-12">
                        <input onSubmit={onSubmit} className="btn submit-btn" type="submit" value="Send!" />
                    </div>
                </form>
            </div>
            </>
            : <Loading /> } 
        </div>
    );
};

export default Contact;
