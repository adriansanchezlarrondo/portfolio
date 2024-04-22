import Formulario from "../components/Form";

export default function Contact() {

    return (
        <div className="container mx-auto ">
            <div className="flex flex-col items-center h-[500px]">
                <h1 className="text-4xl text-center px-52" style={{ fontFamily: "Platypi, serif" }}>
                    CONTACTO.
                </h1>
                <div className="my-10 max-w-md mx-auto">
                    <Formulario />
                </div>
            </div>
        </div>
    )
}