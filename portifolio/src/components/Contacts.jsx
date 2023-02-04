import React,{useState} from "react";
import {useRef} from "react";
import emailjs from '@emailjs/browser';




function Contacts() {

const form = useRef();


const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm(
    'service_ns0pxll', 
    'template_ze7lssg',
     form.current, 'G29B7wvY3WA4P4i8B')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset();
};


    return (
        <>

<div id="contact">
<div class="container">
    <div class="row">
      <div class="contact-left">
      <h2 class="section-title">Contact Me</h2>
      <p><i class="fa fa-envelope" aria-hidden="true"></i>  jpguantai@gmail.com</p>
      <p><i class="fa-sharp fa-solid fa fa-phone" aria-hidden="true"></i> +254795070535</p>
      <div class="social-icons">

      <a href="https://github.com/Guantai001" target="_blank"><i class='fab fa-github'></i></a>
      <a href="https://www.linkedin.com/in/guantai-john-paul-a140311b1/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
        <a href="https://twitter.com/guantaijp/" target="_blank"><i class='fab fa-twitter'></i></a>
      </div>
      <a href="Guantai+John+PaulRe+_Android (1).pdf" download class="btn btn2"><i class='fas fa-download'></i> Download CV</a>
    </div>

    

      <div class="contact-right">

      <form 
      ref={form}
      onSubmit={sendEmail}
      name="submit-to-google-sheet"> 
           <input 
           type="text" 
           name="user_name" 
           placeholder="Your Name" 
           required/>

            <input 
            type="email" 
            name="user_email" 
            placeholder="Your Email" 
            required/>
           <textarea 
           name="message" 
           rows="4" 
           placeholder="Your Message"
           ></textarea>
       <button type="submit"
        class="btn btn2">
         Submit</button>

      </form>
      <span id="msg"> </span>

      
    </div>    
  </div>

</div>
<div class="copyright">
    <p>© Dev Guantel All rigths reserved</p>

</div>
</div>
        </>
    )
}

export default Contacts;