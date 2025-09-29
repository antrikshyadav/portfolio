import Experience from "./Experience";
import Projects from "./Projects";
import Services from "./Services";

const Content = () => {
  return (
    <div className="w-full md:w-2/3 lg:w-[60%] flex flex-col p-5 lg:p-10">
      <div className="py-10">
        <section
          id="about"
          className="flex flex-col items-center justify-start"
        >
          <div className="flex flex-col items-start justify-start gap-px mt-10">
          <p className="content pb-10">
  I’m Antriksh Yadav, a passionate Software Developer with a strong focus on 
  building scalable web applications and custom CRM solutions. With hands-on 
  experience in developing products across industries like healthcare, travel, 
  education, automobile, and fintech, I specialize in crafting solutions that 
  simplify workflows and deliver real business value.
</p>

<p className="content pb-10">
  My expertise lies in full-stack development using React, Next.js, Node.js, and 
  PostgreSQL, while also leveraging modern tools like Prisma ORM for robust 
  backends. I actively integrate payment systems, third-party APIs, and role-based 
  access controls to make applications secure and production-ready. Beyond 
  development, I’m also expanding my skills in DevOps—focusing on CI/CD pipelines, 
  containerization with Docker & Kubernetes, and cloud deployments to improve 
  scalability and performance.
</p>

<p className="content pb-10">
  At Digiflex, I’ve had the opportunity to work on a wide range of projects—from 
  complex CRMs to multi-dashboard platforms—where I thrive on turning ideas into 
  user-friendly, efficient, and reliable software. My approach balances clean code, 
  modern UI/UX practices, and an eye for solving real-world problems.
</p>

<p className="content pb-10">
  Outside of work, I enjoy exploring psychology, philosophy, and storytelling. 
  Whether it’s diving into books, films, or photography, I find inspiration in 
  narratives and human behavior. This perspective often influences how I design 
  digital experiences—with empathy and clarity at the core.
</p>

<p className="content pb-10">
  I’m driven to keep learning, experimenting, and contributing to projects that 
  make an impact. As technology evolves, so does my curiosity—and I’m always eager 
  to take on challenges that push me to grow as a developer and problem-solver.
</p>

          </div>
        </section>
        <ol className="">
          <Experience />
        </ol>
        <Projects/>
        <Services/>
      </div>
    </div>
  );
};

export default Content;
