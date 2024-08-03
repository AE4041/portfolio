import { Button } from "@nextui-org/react"
import Image from "next/image"

type NavTypes = {
    title: string,
    route?: string
}

const NavItems: NavTypes[] = [
    {
        title: "About",
        route: "/about"
    },
    {
        title: "Projects",
        route: "/projects"
    },
    {
        title: "Experience",
        route: "/experience"
    }
]

const Navbar = () => {
    return (
        <div className="fixed top-0 z-30 mx-auto h-[60px] lg:h-[70px] w-full bg-[#060814f3] border-b border-white/10">
            <div className="relative mx-auto max-w-6xl h-full px-5 md:px-0 lg:px-0">
                <nav className="flex h-full flex-row items-center justify-between lg:justify-start">
                    <div className="flex lg:flex-1">
                        <a href="/" className="-m-1.5 flex items-center p-1.5">
                            <Image alt="avatar" src="/avatar.svg" width={35} height={35} />
                        </a>
                    </div>

                    {NavItems.map((item, index) => (
                        <div key={`nav-item-${index}`} className="flex">
                            <a href="" className="flex items-center gap-x-1 px-2 py-2 text-sm text-white hover:text-dark-300 transition-colors md:px-3 lg:px-4">
                                <span>{item.title}</span>
                            </a>
                        </div>
                    ))}

                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <button className="px-4 py-2 bg-zinc-700/20  border border-zinc-700/70 rounded-md text-sm text-gray-200">Resume</button>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar