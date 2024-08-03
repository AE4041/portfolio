import Navbar from "./layout/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="min-h-[1000px]">
        <div className="h-screen lg:h-[500px] w-full -z-10 absolute isolate overflow-hidden undefined">
          <svg className="absolute inset-0 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]" aria-hidden="true"><defs><pattern id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse"><path d="M.5 200V.5H200" fill="none"></path></pattern></defs><svg x="50%" y="-1" className="overflow-visible fill-gray-800/20"><path d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z" stroke-width="0"></path></svg><rect width="100%" height="100%" stroke-width="0" fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"></rect></svg>
          <div
            className="absolute left-[calc(50%-4rem)] top-[calc(50%-40rem)] -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
            aria-hidden="true"
          >
            <svg className="w-full h-full" viewBox='0 0 64 64' xmlns='http://www.w3.org/2000/svg'>
              <path d='M8 16c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm0-2c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6zm33.414-6l5.95-5.95L45.95.636 40 6.586 34.05.636 32.636 2.05 38.586 8l-5.95 5.95 1.414 1.414L40 9.414l5.95 5.95 1.414-1.414L41.414 8zM40 48c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm0-2c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6zM9.414 40l5.95-5.95-1.414-1.414L8 38.586l-5.95-5.95L.636 34.05 6.586 40l-5.95 5.95 1.414 1.414L8 41.414l5.95 5.95 1.414-1.414L9.414 40z' fill='' fill-opacity='0.4' fill-rule='evenodd' />
            </svg>
          </div>
        </div>

        <div className="lg:mt-[76px] py-16 lg:py-24 mt-[154px] md:mt-[112px] relative text-center lg:pb-24">
          <div className="relative mx-auto px-8">
            <div className="flex flex-col items-start md:flex-row md:items-center md:justify-center">
              <h2 className="leading-1 inline-flex text-3xl sm:text-3xl font-light text-white lg:max-w-4xl lg:text-5xl">
                Using modern frontend tools to transform designs into code.
              </h2>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-8 mt-10">
          <div className="flex relative mx-auto max-w-6xl">
            <div className="grid grid-cols-2 gap-4 mb-4 sm:mb-8 sm:gap-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
              <div className="group relative flex h-full w-full flex-col overflow-hidden rounded-2xl bg-dark-800 shadow-sm hover:shadow-none ">
                <div className="aspect-h-9 aspect-w-16 overflow-hidden bg-dark-900 transition-opacity group-hover:opacity-75">
                  <Image alt="image" src="/ab.jpg" width={688} height={512} />
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
                  <Image alt="image" src="/ac.jpg" width={688} height={512} />
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
                  <Image alt="image" src="/ad.jpg" width={688} height={512} />
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
                  <Image alt="image" src="/ae.jpg" width={688} height={512} />
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

      </div>
    </main>
  );
}
