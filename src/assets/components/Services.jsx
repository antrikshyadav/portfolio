const Services = () => {
  return (
    <section id="services" className="mb-16 mt-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Services</h2>
      </div>

      <div className="space-y-10">
        <div>
          <h3 className="text-lg font-semibold text-slate-200">Software Development Services</h3>
          <ul className="mt-3 list-disc pl-5 text-sm leading-6 text-slate-300">
            <li>Custom web applications using Next.js, React, and Node.js</li>
            <li>Scalable backend solutions with PostgreSQL and Prisma</li>
            <li>CRM development across domains (healthcare, education, travel, automobile, fitness, etc.)</li>
            <li>Secure payment gateway and third-party API integrations</li>
            <li>Responsive UI/UX with modern animations</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-slate-200">DevOps & Cloud Services</h3>
          <ul className="mt-3 list-disc pl-5 text-sm leading-6 text-slate-300">
            <li>CI/CD pipeline setup for automated deployments</li>
            <li>Docker & Kubernetes containerization</li>
            <li>Cloud hosting and scaling (AWS, GCP, Azure)</li>
            <li>Monitoring, logging, and server health management</li>
            <li>Infrastructure as Code (Terraform, Ansible)</li>
            <li>Secure authentication and role-based access control</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;


