export default function Skills() {

    return (
        <div className="container mx-auto ">
            <div className="flex justify-center items-center h-[500px]">
                <h1 className="text-4xl text-center px-52" style={{ fontFamily: "Platypi, serif" }}>
                    SKILLS REACT .....
                </h1>
            </div>
            <div className="flex flex-col space-y-10 md:justify-around items-center">
                <img src="./src/assets/HTML5.png" alt="logo-html" className="w-[150px] h-full"/>
                <img src="./src/assets/JavaScript.png" alt="logo-javascript" className="w-[150px] h-full"/>
                <img src="./src/assets/CSS3.png" alt="logo-css" className="w-[100px] h-full"/>
                <img src="./src/assets/React.webp" alt="logo-react" className="w-[120px] h-full"/>
                <img src="./src/assets/Node.png" alt="logo-nodejs" className="w-[120px] h-full"/>
            </div>
            <div className="flex flex-col md:justify-evenly items-center">
                <img src="./src/assets/api.png" alt="logo-api" className="w-[150px]"/>
                <img src="./src/assets/Bootstrap.png" alt="logo-bootstrap" className="w-[150px] h-full"/>
                <img src="./src/assets/Tailwind.png" alt="logo-tailwind" className="w-[180px] h-full"/>
                <img src="./src/assets/Wordpress.png" alt="logo-wordpress" className="w-[120px] h-full"/>
            </div>
            <img src="./src/assets/C++.png" alt="logo-c++" className="w-[120px] h-full"/>
            <img src="./src/assets/Java.png" alt="logo-java" className="w-[120px] h-full"/>
            <img src="./src/assets/django-python.png" alt="logo-python-django" className="w-[120px] h-full"/>
            <img src="./src/assets/PHP.png" alt="logo-php" className="w-[120px] h-full"/>
            <img src="./src/assets/mysql.png" alt="logo-mysql" className="w-[150px]"/>
            <img src="./src/assets/postgresql.png" alt="logo-postgre" className="w-[120px] h-full"/>
            <img src="./src/assets/supabase.png" alt="logo-supabase" className="w-[120px] h-full"/>
        </div>
    )
}