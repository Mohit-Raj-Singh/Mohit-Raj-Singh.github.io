import React, { useRef, useState } from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsFillTelephoneFill} from 'react-icons/bs';
import emailjs from '@emailjs/browser';
import { useClipboard, useToast } from '@chakra-ui/react';

const Contact = () => {



  const { hasCopied, onCopy } = useClipboard('mohit94e@gmail.com');
    const toast = useToast()

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [message,setMessage] = useState("");

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_cttwct8', 'template_fbhj1bi', form.current, 'WWNKds33SpcnjkE0Y')
        .then((result) => {
            console.log(result.text);
            console.log("message sent")
            toast({
              title: 'E-mail',
              description: "E-mail sent successfully..",
              status: 'success',
              position: "top-right",
              duration: 4000,
              isClosable: true,
             
            })
            setName("")
            setEmail("")
            setMessage("")
            

        }, (error) => {
            console.log(error.text);
            toast({

              title: `Please enter correct detail`,
              status: error,
              position: "top-right",
              duration:4000,
              isClosable: true,
            })
        });
        
    };





  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>mohit94e@gmail.com</h5>
            <a href="mailto:mohit94e@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className='contact__option'>
            <BsFillTelephoneFill  className='contact__option-icon'/>
            <h4>Contact</h4>
            <h5>+91-9458526164</h5>
            <a href="https://wa.me/919458526164" target="_blank">Send a message</a>
          </article>
        </div>

        <form action="" ref={form} onSubmit={sendEmail}>
          <input type="text" value={name} onChange={(e)=> setName(e.target.value)} name='name' placeholder='Your Full Name' required />
          <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} name='email' placeholder='Your Email' required />
          <textarea name="message" value={message} onChange={(e)=> setMessage(e.target.value)} rows="7" placeholder='Your message' required></textarea>
          <button type='submit' value="Send Message" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact