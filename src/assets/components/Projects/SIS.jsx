const SIS = () => {
  return (
    <li className="mb-12">
      <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
        <div className="z-10 sm:order-2 sm:col-span-6">
          <h3>
            <span className="inline-flex items-baseline font-medium leading-tight text-slate-200 text-base">SIS (Study India System)</span>
          </h3>
          <p className="mt-2 text-sm leading-normal">A multi-dashboard CRM for education and international admissions.</p>
          <div className="mt-4 grid grid-cols-2 gap-3">
            {(() => { const base = import.meta.env.BASE_URL; return (
              <>
                <img src={`${base}sis.png`} alt="SIS 1" className="h-28 w-full object-cover rounded-md border border-slate-700" />
                <img src={`${base}sis2.png`} alt="SIS 2" className="h-28 w-full object-cover rounded-md border border-slate-700" />
              </>
            ); })()}
          </div>
          <ul className="mt-2 list-disc pl-5 text-sm leading-6 text-slate-300">
            <li>Dashboards for students, institutes, admins, and super admins</li>
            <li>Students can apply to universities across the world</li>
            <li>Institutes can review and onboard applicants</li>
            <li>Role-based access for each level of the system</li>
            <li>Super admin controls for global management</li>
          </ul>
          <div className="mt-3">
            <a href="https://sis.questdigiflex.in" target="_blank" rel="noreferrer" className="inline-flex items-center text-teal-300 hover:text-teal-200">
              Visit live site
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="ml-1 h-4 w-4">
                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </li>
  );
}

export default SIS;


