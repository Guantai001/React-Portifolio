import React from "react";
import photos from './photos/denco.png';

import photo from './photos/epic.png';

import phot from './photos/farm.png';


function Work() {
    return (
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
                                <h3>Farm App</h3>
                                <p>The Farm is an web app that enables a farmer to track Dairy And Tea track produce.

                                </p>
                                <a href="https://farmfrontend.vercel.app/" target="_blank"> <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
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
