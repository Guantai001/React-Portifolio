import React from "react"

function About(){
    return(
        <>
            <section class="about section " id="about">
                <h2 class="section-title">About</h2>


                <div class="about__container bd-grid">
                   
                    <div class="tab-titles">
                                    <p class="tab-links active-link" onclick ="opentab('skills')">Skills</p>
                                    <p class="tab-links" onclick="opentab('experience')">Experience</p>
                                    <p class="tab-links" onclick="opentab('education')">Education</p>
                                    

                                  </div>

                    
                    
                    <div>
                        <h2 class="about__subtitle">I'am Guantai </h2>
                        {/* <p class="about__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate cum expedita quo culpa tempora, assumenda, quis fugiat ut voluptates soluta, aut earum nemo recusandae cumque perferendis! Recusandae alias accusamus atque.</p> */}
                        <p>I'm a Front-End Developer based in Nairobi, Kenya .
                                         I like to code things from scratch, and enjoy 
                                         bringing ideas to life in the browser.
                                         Let's make something special.
                                         <br/> Check out my skills:
                                         <br/>  React Js
                                         <br/>  HTML
                                         <br/>  CSS 
                                         <br/>  JAVASCRIPT
                                         <br/>  KOTLIN
                            </p>

                    </div>                                   
                </div>
            </section>
        </>
    )
}

export default About