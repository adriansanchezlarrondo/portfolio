import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Volver() {
    const location = useLocation();

    const isHome = location.pathname === "/";

    if (isHome) {
        return null;
    }

    const [hovered, setHovered] = useState(false);

    const handleHover = () => {
        setHovered(!hovered);
    };

    return (
        <div className="mx-5 md:mx-3 rounded-md overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out">
            <Link to="/" className="flex" onMouseEnter={handleHover} onMouseLeave={handleHover}>
                <img src={hovered ? "/volver2.svg" : "/volver.svg"} alt="icon-volver" className="w-5 mx-2" />
                <span className="uppercase font-bold text-xl">Home</span>
            </Link>
        </div>
    )
}
