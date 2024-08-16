import { Button } from "@nextui-org/react"
import Image from "next/image"

type NavTypes = {
    title: string,
    route?: string
}

const NavItems: NavTypes[] = [
    {
        title: "Home",
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
        <div className="fixed top-0 z-30 mx-auto h-[60px] lg:h-[70px] w-full bg-[#060814fa] border-b border-white/5">
            <div className="relative mx-auto max-w-3xl h-full px-5 md:px-0 lg:px-0">
                <nav className="flex h-full flex-row items-center justify-start">
                    {NavItems.map((item, index) => (
                        <div key={`nav-item-${index}`} className="flex">
                            <a href="" className="flex items-center gap-x-1 px-2 py-2 text-sm text-gray-200/80 hover:text-white transition-colors md:px-3 lg:px-4">
                                <span>{item.title}</span>
                            </a>
                        </div>
                    ))}
                </nav>
            </div>
        </div>
    )
}

export default Navbar