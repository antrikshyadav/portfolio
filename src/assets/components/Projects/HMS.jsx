const HMS = () => {
  return (
    <li className="mb-12">
      <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
        <div className="z-10 sm:order-2 sm:col-span-6">
          <h3>
            <span className="inline-flex items-baseline font-medium leading-tight text-slate-200 focus-visible:text-teal-300 text-base">
              Hospital Management System (HMS)
            </span>
          </h3>
          <p className="mt-2 text-sm leading-normal">
            A complete hospital management system designed to streamline operations for clinics and hospitals.
          </p>
          <ul className="mt-2 list-disc pl-5 text-sm leading-6 text-slate-300">
            <li>Patient management and appointment scheduling</li>
            <li>Doctor and staff management</li>
            <li>Billing and reporting modules</li>
            <li>Role-based access for secure handling of medical records</li>
          </ul>
        </div>
      </div>
    </li>
  );
}

export default HMS;


