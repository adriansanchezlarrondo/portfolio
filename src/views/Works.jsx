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
                        <div className="p-2 flex items-center w-[450px] md:flex md:flex-col md:items-center md:w-[300px] ">
                            <a href="https://gesti-n-de-incidencias.onrender.com/" target="_blank" rel="noopener noreferrer">
                                <img src="/incidencias.png" alt="proyecto-incidencias" className="p-2 w-[180px] md:w-[250px] shadow-xl md:shadow-2xl rounded-full" />
                            </a>
                            <a href="https://github.com/adriansanchezlarrondo/Gesti-n-de-incidencias" target="_blank" rel="noopener noreferrer">
                                <p className="text-center text-xl font-semibold w-full md:text-2xl md:mt-4">Gestión de incidencias</p>
                            </a>
                        </div>
                    </div>
                    <div className="rounded-full shadow-xl shadow-green-300 md:shadow-none hover:scale-105 transition-transform duration-300 ease-in-out">
                        <div className="p-2 flex items-center w-[450px] md:flex md:flex-col md:items-center md:w-[300px] ">
                            <a href="https://memory-0dxa.onrender.com" target="_blank" rel="noopener noreferrer">
                                <img src="/memory.png" alt="proyecto-memory" className="p-2 w-[180px] h-[172px] md:w-[250px] md:h-[240px] shadow-xl md:shadow-2xl rounded-full" />
                            </a>
                            <a href="https://github.com/adriansanchezlarrondo/Memory" target="_blank" rel="noopener noreferrer">
                                <p className="text-center text-xl font-semibold w-full md:text-2xl md:mt-4">Memory</p>
                            </a>
                        </div>
                    </div>
                    <div className="rounded-full shadow-xl shadow-green-300 md:shadow-none hover:scale-105 transition-transform duration-300 ease-in-out">
                        <div className="p-2 flex items-center w-[450px] md:flex md:flex-col md:items-center md:w-[300px] ">
                            <a href="https://sred-pi.vercel.app/" target="_blank" rel="noopener noreferrer">
                                <img src="/sred.png" alt="proyecto-sred" className="p-2 w-[180px] h-[172px] md:w-[250px] md:h-[240px] shadow-xl md:shadow-2xl rounded-full" />
                            </a>
                            <a href="https://github.com/aaronvidanalora/SRED" target="_blank" rel="noopener noreferrer">
                                <p className="text-center text-xl font-semibold w-full md:text-2xl md:mt-4">Sistema de reservas</p>
                            </a>
                        </div>
                    </div>
                    <div className="rounded-full shadow-xl shadow-green-300 md:shadow-none hover:scale-105 transition-transform duration-300 ease-in-out">
                        <div className="p-2 flex items-center w-[450px] md:flex md:flex-col md:items-center md:w-[300px] ">
                            <a href="https://tetris-eqvv.onrender.com/" target="_blank" rel="noopener noreferrer">
                                <img src="/tetris.png" alt="proyecto-tetris" className="p-2 w-[180px] md:w-[250px] shadow-xl md:shadow-2xl rounded-full" />
                            </a>
                            <a href="https://github.com/adriansanchezlarrondo/tetris_v1" target="_blank" rel="noopener noreferrer">
                                <p className="text-center text-xl font-semibold w-full md:text-2xl md:mt-4">Tetris</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}