// import React from "react"

function AboutMe(){
    return (
        <>
            <div id="about" className="container mx-auto text-center">
                <div className="about p-16">
                    <h2 className="uppercase font-extrabold text-5xl tracking-wider p-3">about me</h2>
                    <div className="container mx-auto text-center bg-violet-600 rounded w-7 h-1.5 m-4"></div>
                    <div className="text-center text-xl text-gray-700 mb-14">
                        <p>Here you will find more information about me, what I do, and my current skills mostly in terms</p>
                        <p>of programming and technology</p>
                    </div>
                </div>
                <div className="columns-2">
                    <div></div>
                    <div></div>
                </div>
            </div>
        </>
    )
}
  
export default AboutMe