// import React from "react"
import Avatar from "./Avatar"

function Header(){
    return (
        <div className="fixed top-0 w-full bg-white shadow-lg z-10">
            <div className="flex justify-around py-4">
                <Avatar />
                <div className="flex justify-end w-3/4 mt-3 space-x-12">
                    <a href="#home" className="text-base text-gray-700 font-bold hover:text-purple-600 transition duration-500">HOME</a>
                    <a href="#about" className="text-base text-gray-700 font-bold hover:text-purple-600 transition duration-500">ABOUT</a>
                    <a href="#projects" className="text-base text-gray-700 font-bold hover:text-purple-600 transition duration-500">PROJECTS</a>
                    <a href="#contact" className="text-base text-gray-700 font-bold hover:text-purple-600 transition duration-500">CONTACT</a>
                </div>
            </div>
        </div>
    )
}
  
export default Header