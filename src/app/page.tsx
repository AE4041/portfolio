import Navbar from "./layout/Navbar";


export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="h-screen min-h-[1000px] font-sans text-gray-200/80">
        <div className="h-screen min-h-full w-full -z-10 absolute isolate overflow-hidden undefined">
          <svg className="absolute inset-0 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]" aria-hidden="true">
            <defs>
              <pattern id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
                <path d="M.5 200V.5H200" fill="none"></path>
              </pattern>
            </defs>
            <svg x="50%" y="-1" className="overflow-visible fill-gray-800/20">
              <path d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z" stroke-width="0"></path>
            </svg><rect width="100%" height="100%" stroke-width="0" fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"></rect></svg>
          <div
            className="absolute left-[calc(50%-4rem)] top-[calc(50%-40rem)] -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
            aria-hidden="true"
          >
            <svg className="w-full h-full" viewBox='0 0 64 64' xmlns='http://www.w3.org/2000/svg'>
              <path d='M8 16c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm0-2c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6zm33.414-6l5.95-5.95L45.95.636 40 6.586 34.05.636 32.636 2.05 38.586 8l-5.95 5.95 1.414 1.414L40 9.414l5.95 5.95 1.414-1.414L41.414 8zM40 48c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm0-2c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6zM9.414 40l5.95-5.95-1.414-1.414L8 38.586l-5.95-5.95L.636 34.05 6.586 40l-5.95 5.95 1.414 1.414L8 41.414l5.95 5.95 1.414-1.414L9.414 40z' fill='' fill-opacity='0.4' fill-rule='evenodd' />
            </svg>
          </div>
        </div>

        <div className="py-10 mx-auto mt-[76px] max-w-3xl relative lg:pb-10">
          <div className="relative mx-auto px-3 space-y-10">
            <p className="prose text-gray-100 text-2xl font-bold">hey, I'm Emmanuel 👋</p>
            <p>I'm a fanatical frontend developer who loves working with Next.js, React,TypeScript and Tailwind.</p>

            <div className="space-y-2">
              <p>Currently working at <span className="bg-slate-500/20 p-1 rounded-md">Curare Technologies</span> as a frontend developer - (Remote).</p>
              <p>Creator of <span className="bg-slate-500/20 p-1 rounded-md">Daxy-Ui</span> <span className="bg-slate-500/20 p-1 rounded-md">Delvi Icons</span></p>
            </div>

            <div className="">
              <p>
                Transforming UI designs into fully functional code and bringing ideas to life is where my true passion lies.
                You can find my <a href="http://" target="_blank" rel="noopener noreferrer" className="text-white font-medium underline">full projects list here.</a>
              </p>
            </div>

            <div>
              <p>Find me on:</p>
              <div className="flex space-x-5 mt-5">
                <a className="flex gap-x-1 items-center" href="" target="_blank">
                  <span className="flex justify-center items-center p-1text-gray-100 rounded-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                  </span>
                  <span>Github</span>
                </a>

                <a className="flex gap-x-1 items-center" href="" target="_blank">
                  <span className="flex justify-center items-center p-1 text-gray-100 rounded-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                  </span>
                  <span>Linkedin</span>
                </a>
              </div>
            </div>

            <p>
              If you find my work valuable and would like to collaborate on a project or discuss potential job opportunities, feel free to reach out at 
              <span className="mr-2 text-sm text-white font-medium"> easamoah@curare.care</span>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
