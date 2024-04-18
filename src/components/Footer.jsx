export default function Footer() {

    return (
        <>
            <nav className="redes container mx-auto fixed bottom-0 left-0 right-0 pb-3">
                <ul className="flex justify-center space-x-4 text-3xl">
                    <li>
                        <a href="https://github.com/adriansanchezlarrondo" target={'_blank'} rel="noreferrer">
                            <i className="fa-brands fa-github duration-100 delay-100 ease-in-out hover:text-teal-400"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/adri%C3%A1n-s%C3%A1nchez-larrondo-20106a258/" target={'_blank'} rel="noreferrer">
                            <i className="fa-brands fa-linkedin-in duration-100 delay-100 ease-in-out hover:text-teal-400 "></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/adriisl__/" target={'_blank'} rel="noreferrer">
                            <i className="fa-brands fa-instagram duration-100 delay-100 ease-in-out hover:text-teal-400"></i>
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    )
}