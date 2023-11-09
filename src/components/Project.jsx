import { DataProject } from "../Data/DataProject";
import CartProject from "./CartProject";

const Project = () => {
  return (
    <div
      className="mt-[160px] min-[420px]:mt-[200px]  w-[300px] sm:w-full m-auto  sm:mt-[200px] md:mt-[300px] lg:mt-[900px] xl:mt-[130px] "
      data-aos="fade-up"
      data-aos-delay="200"
      id="project"
    >
      <div className="text-center text-4xl font-bold 2xl:text-5xl ">
        <span className="border-b-4">Project</span>
      </div>
      <div className="grid sm:grid-cols-2 gap-4 mt-10">
        {DataProject.map((item) => {
          return <CartProject key={item.id} url={item.url} {...item} />;
        })}
      </div>
    </div>
  );
};

export default Project;
