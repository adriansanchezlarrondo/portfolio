import { Link } from "react-router-dom";
import Avatar from "./Avatar";
import Volver from "./Volver";

export default function Header() {

    return (
        <header className="py-5">
            <div className="container mx-auto flex items-center justify-between w-full">
                <div className="">
                    <Avatar />
                </div>
                <div>
                    <Volver />
                </div>
            </div>
        </header>
    )
}