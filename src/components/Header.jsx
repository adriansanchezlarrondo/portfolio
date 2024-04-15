import Avatar from "./Avatar";

export default function Header(){

    return(
        <header className="bg-gradient-to-b from-emerald-200 to-lime-100 py-5 shadow-lg mb-10">
            <div className="container mx-auto flex items-center justify-between w-full">
                <div className="">
                    <Avatar />
                </div>
                <nav className=" " style={{fontFamily: "Platypi, serif"}}>
                    <ul className="flex space-x-4 text-slate-800 font-semibold">
                        <li>
                            <a href="#home" className="rounded-md p-2 px-3 shadow-md shadow-green-400 duration-100 delay-100 ease-in-out hover:bg-lime-100 hover:shadow-lg hover:shadow-lime-300 hover:border-lime-500">Home</a>
                        </li>
                        <li>
                            <a href="#contact" className="rounded-md p-2 px-3 shadow-md shadow-green-400 duration-100 delay-100 ease-in-out hover:bg-lime-100 hover:shadow-lg hover:shadow-lime-300 hover:border-lime-500">Contacto</a>
                        </li>
                    </ul>
                </nav>
                <nav className=""> 
                    <ul className="flex space-x-4 text-2xl text-slate-700">
                        <li>
                            <a href="https://github.com/adriansanchezlarrondo" target={'_blank'} rel="noreferrer">
                                <i className="fa-brands fa-github"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/adri%C3%A1n-s%C3%A1nchez-larrondo-20106a258/" target={'_blank'} rel="noreferrer">
                                <i className="fa-brands fa-linkedin-in"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/adriisl__/" target={'_blank'} rel="noreferrer">
                                <i className="fa-brands fa-instagram"></i>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}