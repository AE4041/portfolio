import HeroBg from "@/component/Herobg"

const Projects = () => {
    return (
        <div className="h-screen min-h-[1000px] font-sans text-gray-200/80">
            <HeroBg />

            <div className="py-10 mx-auto mt-[76px] max-w-3xl relative lg:pb-10 px-5 lg:px-0 space-y-10">
                <div className="relative mx-auto px-3 space-y-8">
                    <p className="prose text-gray-100 text-2xl font-bold capitalize">my projects</p>
                    <p>Since 2021, I've designed and built several projects, including landing pages, e-commerce, and dashboards. Below are some key highlights from my projects.</p>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4 sm:mb-8 sm:gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                    <div className="group relative flex h-full w-full flex-col overflow-hidden rounded-2xl bg-dark-800 shadow-sm hover:shadow-none ">
                        <div className="aspect-h-9 aspect-w-16 overflow-hidden bg-dark-900 transition-opacity group-hover:opacity-75">
                            {/* <Image alt="image" src="/ab.jpg" width={688} height={512} /> */}
                        </div>
                        <div className="flex flex-col p-4 w-full bg-[#161b35f3]">
                            <div className="flex flex-1 items-center">
                                <h3 className="text-md line-clamp-2 font-normal leading-snug text-gray-50 transition-colors hover:text-indigo-400">Hello</h3>
                            </div>
                            <div className="w-full py-4">
                                <p className="text-gray-300 line-clamp-2">
                                    Lifetime access to 18 Tailwind templates in React, Vue, Nextjs and HTML.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="group relative flex h-full w-full flex-col overflow-hidden rounded-2xl bg-dark-800 shadow-sm hover:shadow-none ">
                        <div className="aspect-h-9 aspect-w-16 overflow-hidden bg-dark-900 transition-opacity group-hover:opacity-75">
                            {/* <Image alt="image" src="/ac.jpg" width={688} height={512} /> */}
                        </div>
                        <div className="flex flex-col p-4 w-full bg-[#161b35f3]">
                            <div className="flex flex-1 items-center">
                                <h3 className="text-md line-clamp-2 font-normal leading-snug text-gray-50 transition-colors hover:text-indigo-400">Hello</h3>
                            </div>
                            <div className="w-full py-4">
                                <p className="text-gray-300 line-clamp-2">
                                    Lifetime access to 18 Tailwind templates in React, Vue, Nextjs and HTML.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="group relative flex h-full w-full flex-col overflow-hidden rounded-2xl bg-dark-800 shadow-sm hover:shadow-none ">
                        <div className="aspect-h-9 aspect-w-16 overflow-hidden bg-dark-900 transition-opacity group-hover:opacity-75">
                            {/* <Image alt="image" src="/ad.jpg" width={688} height={512} /> */}
                        </div>
                        <div className="flex flex-col p-4 w-full bg-[#161b35f3]">
                            <div className="flex flex-1 items-center">
                                <h3 className="text-md line-clamp-2 font-normal leading-snug text-gray-50 transition-colors hover:text-indigo-400">Hello</h3>
                            </div>
                            <div className="w-full py-4">
                                <p className="text-gray-300 line-clamp-2">
                                    Lifetime access to 18 Tailwind templates in React, Vue, Nextjs and HTML.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="group relative flex h-full w-full flex-col overflow-hidden rounded-2xl bg-dark-800 shadow-sm hover:shadow-none ">
                        <div className="aspect-h-9 aspect-w-16 overflow-hidden bg-dark-900 transition-opacity group-hover:opacity-75">
                            {/* <Image alt="image" src="/ae.jpg" width={688} height={512} /> */}
                        </div>
                        <div className="flex flex-col p-4 w-full bg-[#161b35f3]">
                            <div className="flex flex-1 items-center">
                                <h3 className="text-md line-clamp-2 font-normal leading-snug text-gray-50 transition-colors hover:text-indigo-400">Hello</h3>
                            </div>
                            <div className="w-full py-4">
                                <p className="text-gray-300 line-clamp-2">
                                    Lifetime access to 18 Tailwind templates in React, Vue, Nextjs and HTML.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects