// import React from "react"

import Redes from "./Redes"

function Home(){
    return (
        <div>
            <div id="home" className="mt-12 pt-12 relative">
                <div className="absolute top-1/4 left-0 flex items-center">
                    <Redes />
                </div>
                <div className="absolute top-1/4 container text-center ml-40">
                    <h1 className="uppercase font-extrabold text-6xl">hey, i&apos;m Adrián Sánchez</h1>  {/* &apos; es igual a esto ', que me daba error*/}
                    <div className="text-center text-xl text-gray-700 my-10 mb-14">
                        <p>A Result-Oriented Web Developer building and managing Websites and Web</p>
                        <p>Applications that leads to the success of the overall product</p>
                    </div>
                    <a href="#projects" className="bg-violet-600 py-4 px-20 rounded-md uppercase text-white font-bold text-xl shadow-xl">projects</a>
                </div>
            </div>
            <div className="rounded-xl h-10 w-6 border-2 border-slate-700 absolute bottom-0 right-1/2 mb-8">
                <div style={{animation: 'moveUpDown 1.2s infinite'}} className="w-1.5 h-1.5 rounded-lg bg-slate-500 mx-auto"></div>
            </div>
        </div>
    )
}
  
export default Home