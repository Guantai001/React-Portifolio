import React from "react";
import photos from './photos/work-1.png';

function Services() {
    return(
        <>
                       <div id="services">
                <div class="container">
                <h2 class="section-title">My Services</h2>
                  
                    <div class="services-list">
                    <div>
                      <i class="fa-solid fa-code"></i>
                            <h2>Web Development</h2>
                            <p> I create the layout and design of a website. I use design programs to create visual elements. I design a site that is intuitive and easy for visitors to navigate.</p>
                         
                    </div>
                    <div>
                      <i class="fa-solid fa-crop-simple"></i>
                            <h2>UI/UX Design</h2>
                            <p> I create user-friendly interfaces that enable users to understand how to use complex technical products. </p>
                         
                    </div>
                    <div>
                        <i class="fa-brands fa-app-store-ios"></i>
                         <h2>Android development</h2>
                         <p>I do design and develop android apps, where I use Jetpack compose libraly that uses kotlin language. </p>                       
                        </div>
                      </div>
                    </div>
                   </div>
                   


        </>
    )
}

export default Services;