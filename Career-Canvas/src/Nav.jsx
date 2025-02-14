

function Nav() {

    return (
        <>
            <nav className="bg-gray-800 text-[#FDFCFC] p-4 flex justify-between items-center relative w-[1080px]-mx-auto shadow-sm">
                <div>
                    <a href="" className="">Career Canvas</a>
                </div>
                <div>
                    <ul className="">
                        <li className="inline-block cursor-pointer p-1 px-3 hover:underline"><a href="">Home</a></li>
                        <li className="inline-block cursor-pointer p-1 px-3 hover:underline"><a href="">About</a></li>
                        <li className="inline-block cursor-pointer p-1 px-3 hover:underline"><a href="">Carrer-Pathways </a></li>
                    </ul>
                </div>
                <div className="">
                    <ul>
                        <li className="inline-block cursor-pointer p-1 hover:underline"><a href="">Sign-in </a></li>/
                        <li className="inline-block cursor-pointer p-1 hover:underline"><a href=""> Log-in</a></li>
                        <li className="inline-block cursor-pointer p-1 hover:underline"><a href=""></a></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Nav;