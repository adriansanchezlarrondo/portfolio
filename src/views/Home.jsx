import { Link } from "react-router-dom";

export default function Home() {

    return (
        <>
            <nav className="flex flex-col justify-center items-center space-y-8 font-semibold text-4xl my-36" style={{ fontFamily: "Platypi, serif" }}>
                <Link to="/skills" className="rounded-md p-2 py-3 shadow-md shadow-green-300 duration-100 delay-100 ease-in-out hover:bg-lime-100 hover:shadow-lg hover:shadow-lime-300 hover:border-lime-500">SKILLS</Link>

                <Link to="/projects" className="rounded-md p-2 py-3 shadow-md shadow-green-300 duration-100 delay-100 ease-in-out hover:bg-lime-100 hover:shadow-lg hover:shadow-lime-300 hover:border-lime-500">WORKS</Link>

                <Link to="/contact" className="rounded-md p-2 py-3 shadow-md shadow-green-300 duration-100 delay-100 ease-in-out hover:bg-lime-100 hover:shadow-lg hover:shadow-lime-300 hover:border-lime-500">CONTACT</Link>
            </nav>
        </>
    )
}