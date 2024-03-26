// import React from "react"

function Project(){
    const proyectos = [
        {
            title: 'tetris',
            body: 'Una página web interactiva que permite jugar al clásico juego de Tetris, con controles intuitivos y un diseño minimalista para una experiencia de juego envolvente.',
            img: './src/assets/tetris.png',
        },
        {
            title: 'gestión de incidencias',
            body: 'Una plataforma web de gestión de incidencias diseñada para equipos, que permite registrar, asignar y dar seguimiento a problemas o solicitudes.',
            img: './src/assets/incidencias.png',
        },
        {
            title: 'memory',
            body: 'Una página web del juego de memoria que desafía la concentración y la memoria del jugador al emparejar cartas idénticas dentro de un conjunto disperso, con una interfaz amigable y diversas temáticas para elegir.',
            img: './src/assets/memory.png',
        },
    ]

    return (
        <>
            {proyectos.map((proyecto, index) => (
                <div key={index} className="my-5">
                    <div className="grid grid-cols-2">
                        <div className="img-project mx-auto p-2">
                            <img className="h-96" src={proyecto.img} alt="" />
                        </div>
                        <div className="content-project text-start w-3/4 flex flex-col justify-center pl-2">
                            <h3 className="capitalize font-extrabold text-3xl mb-4">{proyecto.title}</h3>
                            <p className="text-xl text-gray-700 mb-8">{proyecto.body}</p>
                            <a href={`#${proyecto.title}`} className="bg-violet-600 py-4 px-12 rounded-md uppercase text-white font-bold text-base shadow-xl tracking-wider w-48">case study</a>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}
  
export default Project