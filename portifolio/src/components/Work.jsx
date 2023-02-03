import React from "react";
import photos from './photos/work-1.png';

import photo from './photos/work-2.png';

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
        />

 <div class="layer">
    <h3>Dice Roller</h3>
    <p>It's a simple Dice Roller android app.</p>
    <a href="https://github.com/Guantai001/DiceRoller" target="_blank"> <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
</div>
</div>


    <div class="work">
      <img
      src={photo}
        alt="work2"
      />
       <div class="layer">
        <h3>My Portifolio</h3>
        <p>The project is resume android app,I tried to convert my resume
                                to be an application.It was created with Jetpack Compose(Kotlin).</p>
        <a href="https://github.com/Guantai001/MyPortifolio" target="_blank"> <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
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