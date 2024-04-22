import { Link } from "react-router-dom";

export default function Works() {

    return (
        <div className="container mx-auto flex flex-col">
            <div className="my-10">
                <h1 className="text-center text-2xl font-bold md:text-3xl" style={{ fontFamily: "Platypi, serif" }}>
                    Hecha un vistazo a mis proyectos.
                </h1>
            </div>
            <div className="flex flex-col items-center md:items-stretch space-y-16 mt-10 md:mt-20">
                <div className="space-y-16 md:flex md:justify-around md:space-y-0">
                    <div className="rounded-full shadow-xl shadow-green-300 md:shadow-none hover:scale-105 transition-transform duration-300 ease-in-out">
                        <Link to="/project/1">
                            <div className="p-2 flex items-center w-[450px] md:flex md:flex-col md:items-center md:w-[300px] ">
                                <img src="./src/assets/incidencias.png" alt="proyecto" className="p-2 w-[180px] md:w-[250px] shadow-xl md:shadow-2xl rounded-full" />
                                <p className="text-center text-xl font-semibold w-full md:text-2xl md:mt-4">Gestión de incidencias</p>
                            </div>
                        </Link>
                    </div>
                    <div className="rounded-full shadow-xl shadow-green-300 md:shadow-none hover:scale-105 transition-transform duration-300 ease-in-out">
                        <Link to="/project/2">
                            <div className="p-2 flex items-center w-[450px] md:flex md:flex-col md:items-center md:w-[300px] ">
                                <img src="./src/assets/tetris.png" alt="proyecto" className="p-2 w-[180px] md:w-[250px] shadow-xl md:shadow-2xl rounded-full" />
                                <p className="text-center text-xl font-semibold w-full md:text-2xl md:mt-4">Tetris</p>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="md:flex md:justify-center">
                    <div className="rounded-full shadow-xl shadow-green-300 md:shadow-none hover:scale-105 transition-transform duration-300 ease-in-out">
                        <Link to="/project/3">
                            <div className="p-2 flex items-center w-[450px] md:flex md:flex-col md:items-center md:w-[300px] ">
                                <img src="./src/assets/tetris.png" alt="proyecto" className="p-2 w-[180px] md:w-[250px] shadow-xl md:shadow-2xl rounded-full" />
                                <p className="text-center text-xl font-semibold w-full md:text-2xl md:mt-4">Memory</p>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="space-y-16 md:flex md:justify-evenly md:space-y-0">
                    <div className="rounded-full shadow-xl shadow-green-300 md:shadow-none hover:scale-105 transition-transform duration-300 ease-in-out">
                        <Link to="/project/4">
                            <div className="p-2 flex items-center w-[450px] md:flex md:flex-col md:items-center md:w-[300px] ">
                                <img src="./src/assets/tetris.png" alt="proyecto" className="p-2 w-[180px] md:w-[250px] shadow-xl md:shadow-2xl rounded-full" />
                                <p className="text-center text-xl font-semibold w-full md:text-2xl md:mt-4">Sistema de reservas</p>
                            </div>
                        </Link>
                    </div>
                    <div className="rounded-full shadow-xl shadow-green-300 md:shadow-none hover:scale-105 transition-transform duration-300 ease-in-out">
                        <Link to="/project/5">
                            <div className="p-2 flex items-center w-[450px] md:flex md:flex-col md:items-center md:w-[300px] ">
                                <img src="./src/assets/tetris.png" alt="proyecto" className="p-2 w-[180px] md:w-[250px] shadow-xl md:shadow-2xl rounded-full" />
                                <p className="text-center text-xl font-semibold w-full md:text-2xl md:mt-4">Impresora PDF</p>
                            </div>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}