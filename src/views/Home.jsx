import { Link } from "react-router-dom";

export default function Home() {

    return (
        <>
            <div className="container mx-auto text-center md:w-[950px] px-12 mt-10">
                <span className="text-lg">Buenas, soy Adrián Sánchez, un chaval de 21 años que entró en el mundo del desarrollo web en 2021. Durante ese tiempo he adquirido habilidades en diversos lenguajes de programación y diferentes entornos de desarrollo. Con esos conocimientos he creado varios proyectos, como una página web de reservas de recintos, el &quot;Memory&quot; (el juego de cartas de las parejas)... los cuales podrás ver más en <Link to="/works" className="italic font-bold">Works</Link>.</span>
            </div>
            <nav className="flex flex-col justify-center items-center space-y-8 font-semibold text-4xl mb-36 mt-20" style={{ fontFamily: "Platypi, serif" }}>
                <Link to="/skills" className="rounded-md p-2 py-3 shadow-md shadow-green-300 duration-300 delay-100 ease-in-out hover:bg-lime-100 hover:shadow-lg hover:shadow-lime-300 hover:border-lime-500">SKILLS</Link>

                <Link to="/works" className="rounded-md p-2 py-3 shadow-md shadow-green-300 duration-300 delay-100 ease-in-out hover:bg-lime-100 hover:shadow-lg hover:shadow-lime-300 hover:border-lime-500">WORKS</Link>

                <Link to="/contact" className="rounded-md p-2 py-3 shadow-md shadow-green-300 duration-300 delay-100 ease-in-out hover:bg-lime-100 hover:shadow-lg hover:shadow-lime-300 hover:border-lime-500">CONTACT</Link>
            </nav>
        </>
    )
}