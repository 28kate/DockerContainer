import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {FaWhatsapp} from 'react-icons/fa'

function ContactMe() {
  return (
    <section id='contact'>
     <h5>Get In Touch</h5>
     <h2>Contact Me</h2>

     <div className='container contact__container'>
      <div className='contact__options'>
       <article className='contact__option'>
        <MdOutlineEmail className='contact__option-icon'/>
        <h4>Email</h4>
        <h5>test@gmail.com</h5>
        <a href='mailto:dummyegator@gmail.com.com' alt='blank' target='_blank'>Send a message</a>
       </article>
       <article className='contact__option'>
        <FaWhatsapp className='contact__option-icon'/>
        <h4>Whatsapp</h4>
        <h5>0760841814</h5>
       
       </article>
    
      </div>
      <form action=''> 
      <input type='text' name='name' placeholder='Your Full Name' required/>
      <input type='email' name='email' placeholder='Your Email' required/>
      <textarea name='message' id='' rows='10' required>Your Message</textarea>
      <button type='submit' className='btn btn-primary'>Send Message</button>
      </form>
     </div>
    </section>
  )
}

export default ContactMe