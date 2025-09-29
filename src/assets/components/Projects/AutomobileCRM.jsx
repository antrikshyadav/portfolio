const AutomobileCRM = () => {
  return (
    <li className="mb-12">
      <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
        <div className="z-10 sm:order-2 sm:col-span-6">
          <h3>
            <span className="inline-flex items-baseline font-medium leading-tight text-slate-200 text-base">Automobile CRM – Showroom & Workshop Solution</span>
          </h3>
          <p className="mt-2 text-sm leading-normal">A CRM designed for automobile showrooms and workshops.</p>
          <div className="mt-4 grid grid-cols-2 gap-3">
            {(() => { const base = import.meta.env.BASE_URL; return (
              <>
                <img src={`${base}automobile1.jpeg`} alt="Automobile CRM 1" className="h-28 w-full object-cover rounded-md border border-slate-700" />
                <img src={`${base}automobile2.png`} alt="Automobile CRM 2" className="h-28 w-full object-cover rounded-md border border-slate-700" />
              </>
            ); })()}
          </div>
          <ul className="mt-2 list-disc pl-5 text-sm leading-6 text-slate-300">
            <li>Ledger system for transactions</li>
            <li>Job card creation and assignment for mechanics</li>
            <li>Multi-user access with roles</li>
            <li>Attendance tracking for workers</li>
            <li>Master settings for complete customization</li>
          </ul>
          <div className="mt-3">
            <a href="https://garage.questdigiflex.com" target="_blank" rel="noreferrer" className="inline-flex items-center text-teal-300 hover:text-teal-200">
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

export default AutomobileCRM;


