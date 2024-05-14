export default function Avatar() {

    return (
        <div className="border-8 border-double mx-5 md:mx-3 border-slate-800 rounded-full overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out">
            <a href="https://github.com/adriansanchezlarrondo" target={'_blank'} rel="noreferrer">
                <img src="/fotoCuadrada.png" alt="imagen-perfil" className="w-[50px] md:w-[65px] rounded-full " />
            </a>
        </div>
    )
}