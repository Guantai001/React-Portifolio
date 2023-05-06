import React from "react";
import photos from './photos/denco.png';

import photo from './photos/epic.png';

import phot from './photos/work-3.png';

function Work() {
    return(
        <>
                                           <div id="portfolio">

<div class="container" id="work"> 
<h2 class="section-title">My Work</h2>
<div class="work-list">
  <div class="work">
     <img 
      
        src={photos}
        alt="work1"
        style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
        }
        }
        />

 <div class="layer">
    <h3>Denco Movers</h3>
    <p>It's a Web App that enables users to
         book moving services.</p>
    <a href="https://denco-mover.vercel.app/" target="_blank"> <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
</div>
</div>


    <div class="work">
      <img
      src={photo}
        alt="work2"
        style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
        }
        }
      />
       <div class="layer">
        <h3>Epic Tours</h3>
        <>The project is a web app that enables users to book tours.It has various features like
            user authentication, seaching tours, booking tours, and many more.</>
        <a href="https://epictours-frontend.vercel.app/" target="_blank"> <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
        </div>

    </div>

    <div class="work">
         <img 
         src={phot}
         alt="work3" />
        <div class="layer">
        <h3>Tip Time</h3>
        <p>Are you in business and you alway in your calculator trying yo figure how much discount
                        you will give to your customer? This app will help you to calculate the tip and the total amount to pay.</p>
        <a href="hhttps://github.com/Guantai001/TipTime" target="_blank"> <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
    </div>

</div>
</div>
<a href="https://github.com/Guantai001" target="_blank" class="btn">See more</a>
</div>
</div>
        </>
    )
}

export default Work;