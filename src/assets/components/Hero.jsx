export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-dark text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Hi, I’m <span className="text-primary">Your Name</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Full‑stack developer crafting modern, accessible web apps with React and Tailwind.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a href="#projects" className="rounded-md bg-primary px-5 py-3 text-sm font-semibold text-white shadow hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-primary/60">View Projects</a>
            <a href="#contact" className="text-sm font-semibold leading-6 text-white/90 hover:text-white">Contact Me →</a>
          </div>
        </div>
      </div>
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-primary/10 to-transparent" />
    </section>
  );
}



