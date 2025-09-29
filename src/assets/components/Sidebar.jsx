import { FaGithub, FaUnsplash, FaLinkedin } from "react-icons/fa";
import SideNav from "./SideNav";

const Sidebar = () => {
  return (
    <div className="w-full md:w-1/3 lg:w-[40%] flex flex-col lg:sticky top-0 lg:h-screen p-5 lg:p-10">
      {/* Name & Title */}
      <div className="mt-10 lg:mt-20">
        <header>
          <a href="#" className="w-max">
            <h1 className="text-4xl lg:text-7xl heading my-3">Antriksh yadav</h1>
          </a>
          <p className="text-xs lg:font-semibold">
            Software Developer and DevOps Engineer
          </p>
        </header>
      </div>

      {/* Navigation */}
      <div className="mt-30 lg:mt-20">
        <SideNav />
      </div>

      {/* Social Links */}
      <div className="mt-30 lg:mt-auto flex flex-row justify-center gap-5 items-center">
        <a
          href="https://github.com/antrikshyadav"
          className="color"
          aria-label="GitHub Profile"
        >
          <FaGithub className="text-4xl" />
        </a>
        <a
          href="https://unsplash.com/@mayaaank_g"
          className="color"
          aria-label="Unsplash Profile"
        >
          <FaUnsplash className="text-4xl" />
        </a>
        <a
          href="https://in.linkedin.com/in/antriksh-yadav-00218528a?trk=people-guest_people_search-card"
          className="color"
          aria-label="LinkedIn Profile"
        >
          <FaLinkedin className="text-4xl" />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
