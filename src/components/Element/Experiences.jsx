import { FaLocationDot } from "react-icons/fa6";

const Experiences = () => {
  return (
    <div className="my-32">
      <h1 className="text-4xl font-bold text-center">Work Experiences</h1>
      <div>
        <div className="collapse collapse-plus bg-gradient-to-r from-blue-400 to-blue-700 shadow-sm shadow-slate-700 my-8">
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title text-xl text-white font-bold">
            Cretivox
          </div>
          <div className="collapse-content">
            <div className="flex items-center gap-10 mb-8">
              <p className="text-white font-bold">Front End Developer</p>
              <div className="text-white font-bold flex items-center gap-2">
                <span>
                  <FaLocationDot />
                </span>
                <p>Jakarta Timur</p>
              </div>
            </div>
            <div>
              <p className="text-white font-bold">Internship</p>
              <p className="text-white">Desember 2023 - Mei 2024</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
