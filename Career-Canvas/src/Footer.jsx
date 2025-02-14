

function Footer() {

    return (
        <>

            <footer class="bg-white shadow-sm  dark:bg-gray-800 min-h-[50px]">
                <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                    <span class="text-sm sm:text-center text-[#FDFCFC]">© 2025 <a href="" class="hover:underline">Career-Canvas&trade;</a>. All Rights Reserved.
                    </span>
                    <ul class="flex flex-wrap items-center mt-3 text-sm text-[#FDFCFC] sm:mt-0">
                        {/* <li>
                            <a href="#" class="hover:underline me-4 md:me-6">About</a>
                        </li> */}
                        <li>
                            <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
                        </li>
                        <li>
                            <a href="#" class="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
            </footer>

        </>
    )
}

export default Footer;