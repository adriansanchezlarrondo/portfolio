// import React from "react"

import Project from "./templates/Project"

function Projects(){
    return (
        <div id="projects" className="">
            <div className="container mx-auto text-center p-20">
                <div className="projects ">
                    <h2 className="uppercase font-extrabold text-5xl tracking-wider p-3">projects</h2>
                    <div className="container mx-auto text-center bg-violet-600 rounded w-7 h-1.5 m-4"></div>
                    <div className="text-center text-xl text-gray-700 mb-14">
                        <p>Here you will find some of the personal and clients projects that I created with each project</p>
                        <p>containing its own case study</p>
                    </div>
                </div>
                <div className="p-3">
                    <Project />
                </div>
            </div>
        </div>
    )
}
  
export default Projects