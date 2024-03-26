// import React from "react"
import Redes from "./templates/Redes"

function Home(){
    return (
        <div id="home" className="bg-hexagon mt-12 pt-12 relative flex flex-col items-center justify-center">
            <div className="absolute left-0 flex items-center">
                <Redes />
            </div>
            <div className="container text-center">
                <h1 className="uppercase font-extrabold text-6xl">hey, i&apos;m Adrián Sánchez</h1>  {/* &apos; es igual a esto ', que me daba error*/}
                <div className="text-center text-xl text-gray-700 my-10 mb-14">
                    <p>A Result-Oriented Web Developer building and managing Websites and Web</p>
                    <p>Applications that leads to the success of the overall product</p>
                </div>
                <a href="#projects" className="bg-violet-600 py-4 px-20 rounded-md uppercase text-white font-bold text-xl shadow-xl">projects</a>
            </div>
            <div className="rounded-xl h-10 w-6 border-2 border-slate-700 mb-8 absolute bottom-0">
                <div style={{animation: 'moveUpDown 1.2s infinite'}} className="w-1.5 h-1.5 rounded-lg bg-slate-500 mx-auto"></div>
            </div>
        </div>
    )
}
  
export default Home