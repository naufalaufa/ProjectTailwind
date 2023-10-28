import { DataProject } from "../DataProject";
import CartProject from "./CartProject";

const Project = () => {
  return (
    <div
      className="mt-[450px] sm:mt-[550px] "
      data-aos="fade-up"
      data-aos-delay="300"
    >
      <div className="text-center text-4xl font-bold ">
        <span className="border-b-4 ">Project</span>
      </div>
      <div className="grid sm:grid-cols-2 gap-4 mt-10">
        {DataProject.map((item) => {
          return <CartProject key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
};

export default Project;
