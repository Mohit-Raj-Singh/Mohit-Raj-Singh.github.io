import React, { useRef, useState } from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsFillTelephoneFill} from 'react-icons/bs';
import emailjs from '@emailjs/browser';
import { useClipboard, useToast } from '@chakra-ui/react';

const Contact = () => {

  "isRequired"

  const toast = useToast()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [msg, setMsg] = useState("")

  const form = useRef();
  const handleSubmit = (e) => {
    e.preventDefault()
    
    console.log("clicked")

    if(name && email && msg )
    {
      emailjs.sendForm(
      "service_8ghe5bk",
      "template_lvymka9",  //template id
      form.current,
      "nnd_Lvg7ZwnBahm8L"   //user id- api
    )
    // .then(
    //   (result) => {
    //     alert("Message sent successfully");
    //     console.log(result.text);
    //   })
      // .catch(error) => {
      //   alert("Failed to send the msg");
      //   console.log(error.text);
      // }  
    }

    {
      name && email && msg ?
        toast({
          title: 'Message Delievered',
          description: "Thankyou for Contacting..",
          status: 'success',
          duration: 9000,
          isClosable: true,
        })


        :
        toast({
          title: 'Please Fill the details',
          description: "",
          status: 'error',
          duration: 9000,
          isClosable: true,
        })
    }
    setName("")
    setEmail("")
    setMsg("")
  }



  // const { hasCopied, onCopy } = useClipboard('mohit94e@gmail.com');
  //   const toast = useToast()

  //   const [name,setName] = useState("");
  //   const [email,setEmail] = useState("");
  //   const [message,setMessage] = useState("");

  //   const form = useRef();

  //   const sendEmail = (e) => {
  //     e.preventDefault();

  //     alert("CLicked")
  
  //     // emailjs.sendForm('service_8ghe5bk', 'template_lvymka9', form.current, 'WWNKds33SpcnjkE0Y')
  //     emailjs.sendForm('service_8ghe5bk', 'template_lvymka9', "#myform")
  //       .then((result) => {
  //           console.log(result.text);
  //           console.log("message sent")
  //           toast({
  //             title: 'E-mail',
  //             description: "E-mail sent successfully..",
  //             status: 'success',
  //             position: "top-right",
  //             duration: 4000,
  //             isClosable: true,
             
  //           })
  //           setName("")
  //           setEmail("")
  //           setMessage("")
            

  //       }, (error) => {
  //           console.log(error.text);
  //           toast({

  //             title: `Please enter correct detail`,
  //             status: error,
  //             position: "top-right",
  //             duration:4000,
  //             isClosable: true,
  //           })
  //       });
        
  //   };





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

        {/* <form action="" ref={form} onSubmit={sendEmail}> */}
        <form action="" onSubmit={handleSubmit} ref={form}>
          <input type="text" value={name} name='user_name' onChange={(e) => setName(e.target.value)} placeholder='Your Full Name' required />
          <input type="email" value={email} name='user_email' onChange={(e) => setEmail(e.target.value)} placeholder='Your Email' required />
          {/* <textarea value={message} name='message' onChange={() => setMsg(true)}rows="7" placeholder='Your message' required></textarea> */}
          <textarea value={msg} name='message' onChange={(e) => setMsg(e.target.value)}rows="7" placeholder='Your message' required></textarea>
          <button type='submit' value="Send Message" className='btn btn-primary' >Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact;