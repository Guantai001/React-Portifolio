import React from "react";


function Contacts() {
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

      <a href="https://www.linkedin.com/in/guantai-john-paul-a140311b1/" target="_blank"><i class='fab fa-github'></i></a>
      <a href="https://www.linkedin.com/in/guantai-john-paul-a140311b1/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
        <a href="https://www.linkedin.com/in/guantai-john-paul-a140311b1/" target="_blank"><i class='fab fa-twitter'></i></a>
      </div>
      <a href="Guantai+John+PaulRe+_Android (1).pdf" download class="btn btn2"><i class='fas fa-download'></i> Download CV</a>
    </div>

    

      <div class="contact-right">

      <form name="submit-to-google-sheet"> 
           <input type="text" name="Name" placeholder="Your Name" required/>
            <input type="email" name="Email" placeholder="Your Email" required/>
           <textarea name="Message" rows="4" placeholder="Your Message"></textarea>
       <button htype="submit" class="btn btn2"><a href="mailto:jpguantai@gmail.com"  target="_blank"></a>Submit</button>

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