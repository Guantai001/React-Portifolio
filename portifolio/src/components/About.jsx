import React from "react"

function About(){
    const activeTab = (tab) => {
        const tabLinks = document.querySelectorAll(".tab-links");
        const tabContents = document.querySelectorAll(".tab-contents");

        tabLinks.forEach((link) => {
            link.classList.remove("active-link");
        });

        tabContents.forEach((content) => {
            content.classList.remove("active-tab");
        });

        document.querySelector(`#${tab}`).classList.add("active-tab");
        document.querySelector(`#${tab}-link`).classList.add("active-link");
    };



 
    return(
    
        
     <div id="about">

          <div class="container bd-grid">
                    <div class="row">

    
                           <div class="about-col-1">
                              
                           <div class="tab-titles">
                                    <p class="tab-links active-link" 
                                    id="skills-link"
                                    onClick={() => activeTab("skills")}
                                    >Skills</p>
                                    <p class="tab-links" 
                                    id="experience-link"
                                    onClick={() => activeTab("experience")}
                                    >Experience</p>
                                    <p class="tab-links" 
                                    id="education-link"
                                    onClick={() => activeTab("education")}
                                    >Education</p>
                                  </div>

                                  <div class="tab-contents active-tab" id="skills">
                                   <ul>
                                        <li> -> HTML5</li>
                                        <li> -> CSS3</li>
                                        <li> -> JavaScript</li>
                                        <li> -> React Js</li>
                                       
                                   </ul>

                                    </div>
                                    
                                    <div class="tab-contents" id="experience">
                                    <ul>
                                        <li>
                                        <h5>Freelancer</h5>
                                            <p>
                                              Fronted Developer
                                            </p>
                                        </li>
                                        <li>
                                            <h5>Msafiri Company</h5>
                                            <p>Android Developer</p>
                                        </li>
                                       
                                        </ul>
                                    </div>

                                    <div class="tab-contents" id="education">
                                    <ul>
                                        <li>
                                        <h5>Moringa School</h5>
                                            <p> Sofware Engeneering</p>
                                            </li>
                                        <li>
                                           <h5> Multimedia Uviversity Of Kenya</h5>
                                            <p> Bachelor of Science in Mathematis and Computer Science</p>
                                            </li>

                                        </ul>
                                    </div>



                            </div>
                                          <div class="about-col-2">
                                        
                                          <h2 class="section-title">About Me</h2>
                                           <p class="aboutme">
                                           As a developer in coding websites and mobile applications, I am enthusiastic and passionate about learning and creating things with code. Although I am still early in my journey, I have gained some basic knowledge and experience and am eager to continue expanding my skills, particularly in the areas of HTML, CSS, JavaScript, and Kotlin for Android development.

                                             </p>
            
                                        </div>

                                    </div>
                               </div>
                     </div>
        
    )
}

export default About