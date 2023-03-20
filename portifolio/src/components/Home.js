import React,{useEffect, useRef} from 'react';
import photos from './photos/mee-removebg-preview.png';
import Typed from "typed.js"
import NavBar from './NavBAr';

function Home(){

    const el = useRef(null);

    useEffect(() => {
      const typed = new Typed(el.current, {
        strings: ["Android Developer", "Full-Stack Developer"], // Strings to display
        // Speed settings, try diffrent values untill you get good results
        startDelay: 300,
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 100
      });
  
      // Destropying
      return () => {
        typed.destroy();
      };
    }, []);
  




    return(
      <>
    
       
            <section class="home bd-grid" id="home">
                <div class="home__data">
                    <div class = "homedata">
<h1 class= "home__title">
    Hi, 
    <br/>
    I'm <span class="home__title-color">

        
        Guantai JohnPaul
    </span>
    <br/>

  <div class="text-3"><span ref={el}></span></div>
</h1>

 </div>
<a href="#contact" class="button">Contact</a>
</div>
              

             <div class="home__social">
                    <a href="https://www.linkedin.com/in/guantai-john-paul-a140311b1/" class="home__social-icon"><i class='bx bxl-linkedin'></i></a>
                    <a href="https://twitter.com/guantaijp/" class="home__social-icon"><i class='bx bxl-twitter' ></i></a>
                    <a href="https://github.com/Guantai001" class="home__social-icon"><i class='bx bxl-github' ></i></a>
                </div>

                <div class="home__img">
                    <svg class="home__blob" 
                    viewBox="0 0 479 467"
                     xmlns="http://www.w3.org/2000/svg"
                      >
                        <mask id="mask0" mask-type="alpha">
                            <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z"/>
                        </mask>
                        <g mask="url(#mask0)">
                            <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z"/>
                            <image 
                           
                            x="20" y="50"
                             href={photos}
                             />
                        </g>
                    </svg>
                    
                </div>
            </section>
      
        </>
    )
}

export default Home