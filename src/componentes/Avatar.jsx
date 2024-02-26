function Avatar(){
    return(
    <div className="flex ml-4 mt-4">
        <div className="w-10 h-10 rounded-full overflow-hidden">
            <img src="./src/assets/react.svg" alt="Avatar" className="object-cover w-full h-full" />
        </div>
        <h1 className="mt-2 ml-4 text-lg font-bold  hover:text-purple-700 transition duration-500">Adrián Sánchez</h1>
    </div>
    )
}

export default Avatar