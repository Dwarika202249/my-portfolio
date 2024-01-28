import { useRef, useState } from "react";
import "./Contact.css";
import emailjs from '@emailjs/browser';
import { themeContext } from "../../Context";
import { useContext } from 'react';

const Contact = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const [done, setDone] = useState(false)

    const form = useRef();

    const SendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_3c7dnw2', 'template_ii5vc8q', form.current, 'IRQRWk_2Z0DeR8-Pp')
        .then((result)=> {
            console.log(result.text);
            setDone(true);
            form.current.reset();
        }, (errror) => {
            console.log(errror.text);
        }
        )
    }


  return (
    <div className="contact-form" id="Contact">
        <div className="c-left">
            <div className="awesome contact">
                <span style={{color: darkMode ? 'white' : ''}}>Get in touch</span>
                <span>Contact me</span>
                <div className="c-blur c-blur1" style={{background: "#ABF1FF94"}}></div>
            </div>
        </div>

        <div className="c-right">
            <form ref={form} onSubmit={SendEmail}>
                <input type="text" name='user_name' className='user' placeholder='Name' />
                <input type="text" name='user_email' className='user' placeholder='Email' />
                <textarea name="message" className='user' placeholder='Your message'></textarea>
                <input type="submit" value="Send" className='button msgBtn' />
                <span>{done && "Thanks for contacting me!!"}</span>
                <div className="c-blur c-blur2" style={{background: "var(--purple)"}}></div>
            </form>
        </div>

    </div>
  )
}

export default Contact