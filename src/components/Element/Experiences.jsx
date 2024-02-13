import { HiOfficeBuilding } from "react-icons/hi";
import { FaLocationDot } from "react-icons/fa6";

const Experiences = () => {
  return (
    <div className="my-32">
      <h1 className="text-4xl font-bold text-center">Work Experiences</h1>
      <div className="justify-evenly mt-32 bg-gradient-to-r from-blue-100 to-blue-600 p-5 rounded shadow-md shadow-slate-800">
        <div>
          <h1 className="font-bold">Front End Developer</h1>
          <div className="flex whitespace-nowrap gap-5" data-aos-delay="200">
            <p>
              <HiOfficeBuilding size={25} className="inline-block" /> Cretivox
            </p>
            <p>
              <FaLocationDot size={25} className="inline-block" /> Jakarta Timur
            </p>
          </div>
        </div>
        <div className="my-2">
          <span className="font-bold">Internship</span>
          <span>
            <p>Desember 2023 - Mei 2024</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
