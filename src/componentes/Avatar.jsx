function Avatar(){
    return(
    <div>
        <a className="flex ml-4" href="https://github.com/adriansanchezlarrondo" target="_blank" rel="noopener noreferrer">
            <div className="w-14 h-14 rounded-full overflow-hidden">
                <img src="./src/assets/wily.jfif" alt="Avatar" className="object-cover w-full h-full" />
            </div>
            <h1 className="mt-2 ml-4 text-base text-gray-700 font-bold pt-1.5 hover:text-purple-600 transition duration-500">ADRIÁN SÁNCHEZ</h1>
        </a>
    </div>
    )
}

export default Avatar