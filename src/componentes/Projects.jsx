// import React from "react"

function Projects(){
    return (
        <>
            <div id="projects" className="container mx-auto text-center p-16">
                <div className="projects">
                    <h2 className="uppercase font-extrabold text-5xl tracking-wider p-3">about me</h2>
                    <div className="container mx-auto text-center bg-violet-600 rounded w-7 h-1.5 m-4"></div>
                    <div className="text-center text-xl text-gray-700 mb-14">
                        <p>Here you will find more information about me, what I do, and my current skills mostly in terms</p>
                        <p>of programming and technology</p>
                    </div>
                </div>
                <div className="columns-2 flex justify-center">
                    <div className="text-start w-full">
                        <h3 className="text-3xl font-extrabold">Get to know me!</h3>
                        <div className="py-10 mr-56 text-gray-600 text-lg">
                            <p>I&apos;m a <strong>Frontend Focused Web Developer</strong> building and managing the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the <strong>Projects</strong> section.</p>

                            <p className="py-3">I also like sharing content related to the stuff that I have learned over the years in <strong>Web Development</strong> so it can help other people of the Dev Community. Feel free to Connect or Follow me on my <a href="#" className="text-purple-600 decoration-purple-700 underline "><strong>Linkedin</strong></a> and <a href="#" className="text-purple-600 decoration-purple-700 underline "><strong>Instagram</strong></a> where I post useful content related to Web Development and Programming</p>
                            
                            <p>I&apos;m open to <strong>Job</strong> opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don&apos;t hesitate to <strong>contact</strong> me.</p>
                        </div>
                        <a href="#contact" className="bg-violet-600 py-3 px-10 rounded-md uppercase text-white font-bold text-base shadow-xl tracking-wider">contact</a>
                    </div>
                    <div className="text-start w-full">
                        <h3 className="text-3xl font-extrabold">My Skills</h3>
                        <div className="flex flex-wrap gap-4 mt-8 pr-64">
                            <div className="bg-zinc-200 p-3 px-4 rounded text-gray-500 text-center font-bold">HTML</div>
                            <div className="bg-zinc-200 p-3 px-4 rounded text-gray-500 text-center font-bold">CSS</div>
                            <div className="bg-zinc-200 p-3 px-4 rounded text-gray-500 text-center font-bold">JavaScript</div>
                            <div className="bg-zinc-200 p-3 px-4 rounded text-gray-500 text-center font-bold">React</div>
                            <div className="bg-zinc-200 p-3 px-4 rounded text-gray-500 text-center font-bold">Wordpress</div>
                            <div className="bg-zinc-200 p-3 px-4 rounded text-gray-500 text-center font-bold">PHP</div>
                            <div className="bg-zinc-200 p-3 px-4 rounded text-gray-500 text-center font-bold">SASS</div>
                            <div className="bg-zinc-200 p-3 px-4 rounded text-gray-500 text-center font-bold">GIT</div>
                            <div className="bg-zinc-200 p-3 px-4 rounded text-gray-500 text-center font-bold">Github</div>
                            <div className="bg-zinc-200 p-3 px-4 rounded text-gray-500 text-center font-bold">Responsive Design</div>
                            <div className="bg-zinc-200 p-3 px-4 rounded text-gray-500 text-center font-bold">SEO</div>
                            <div className="bg-zinc-200 p-3 px-4 rounded text-gray-500 text-center font-bold">Terminal</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
  
export default Projects