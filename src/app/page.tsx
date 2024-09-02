export default function Home() {
  return (
    <div className="h-screen min-h-[1000px] font-sans text-gray-200/80">
      <div className="py-10 mx-auto mt-[76px] max-w-3xl relative lg:pb-10 px-5 md:px-0 lg:px-0 xl:px-0">
        <div className="relative mx-auto px-3 space-y-10">
          <p className="prose text-gray-100 text-2xl font-bold">hey, I'm Emmanuel 👋</p>
          <p>I'm a fanatical frontend developer who loves working with Next.js, React,TypeScript and Tailwind.</p>

          <div className="space-y-2">
            <p>Currently working at <span className="bg-slate-500/20 p-1 rounded-md">Curare Technologies</span> as a frontend developer - (Remote).</p>
            <p>Creator of <span className="bg-slate-500/20 p-1 rounded-md">Perk React UI</span> <span className="bg-slate-500/20 p-1 rounded-md">Delvi Icons</span></p>
          </div>

          <div className="">
            <p>
              Transforming UI designs into fully functional code and bringing ideas to life is where my true passion lies.
              You can find my <a href="/projects" rel="noopener noreferrer" className="text-white font-medium underline">full projects list here.</a>
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
  );
}
