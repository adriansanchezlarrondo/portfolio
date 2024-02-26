// import React from "react"
import Avatar from "./Avatar"

function Header(){
    return (
        <div className="text-2xl flex">
            <Avatar />
            <div className="flex justify-end w-3/4 mt-6 space-x-12">
                <a href="#" className="text-lg font-bold hover:text-purple-700 transition duration-500">HOME</a>
                <a href="#" className="text-lg font-bold hover:text-purple-700 transition duration-500">ABOUT</a>
                <a href="#" className="text-lg font-bold hover:text-purple-700 transition duration-500">PROJECTS</a>
                <a href="#" className="text-lg font-bold hover:text-purple-700 transition duration-500">CONTACT</a>
            </div>
        </div>
    )
}
  
export default Header