export default function Project() {
    // logica para cargar x projecto y boton volver a vista works
    return (
        <>
            <nav className="redes mt-14 mb-5">
                <ul className="flex justify-center space-x-4 text-3xl">
                    <li>
                        <a href="https://github.com/adriansanchezlarrondo" target={'_blank'} rel="noreferrer">
                            <i className="fa-brands fa-github duration-200 delay-100 ease-in-out hover:scale-105 transition-transform  hover:text-teal-400"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/adriisl__/" target={'_blank'} rel="noreferrer">
                            <i className="fa-brands fa-instagram duration-200 delay-100 ease-in-out hover:scale-105 transition-transform  hover:text-teal-400"></i>
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    )
}