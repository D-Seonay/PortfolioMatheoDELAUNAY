import Link from "next/link";
import BurgerMenu from "./BurgerMenu";

const Navbar = () => {
    return (
        <nav className="flex-center top-0 z-50 w-full bg-white bg-opacity-10 shadow border-black-200 py-7 text-white fixed">
            <div className="align-middle flex-between mx-auto w-full max-w-screen-2xl px-6 xs:px-8 sm:px-16">
                <Link
                    href="/"
                    className="text-sky-700 text-2xl font-extrabold">SEONAY.
                </Link>

                <div className="md:hidden">
                    <BurgerMenu />
                </div>
                <div className="hidden md:inline-flex">
                    <div className="justify-center items-center ">
                        <Link
                            href="/"
                            className="text-white text-xl font-normal mx-2">HOME
                        </Link>
                        <span className="text-zinc-900 text-xl font-normal mx-2">/</span>
                        <Link
                            href="#about-page"
                            className="text-white text-xl font-normal mx-2">ABOUT ME
                        </Link>
                        <span className="text-zinc-900 text-xl font-normal mx-2">/</span>
                        <Link
                            href="#projects-page"
                            className="text-white text-xl font-normal mx-2">PROJECTS
                        </Link>
                    </div>
                    
                </div>
                <div className="py-2.5 rounded-[50px] border-2 border-black justify-center items-center gap-[30px] hidden md:inline-flex">
                        <Link
                            href="#contact-page"
                            className="text-sky-700 text-xl font-extrabold px-4 py-1">CONTACT ME
                        </Link>
                    </div>
            </div>
        </nav>
    );
}

export default Navbar;
