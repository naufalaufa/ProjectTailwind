import { DataProject } from "../DataProject";
import CartProject from "./CartProject";

const Project = () => {
  return (
    <div
      className="mt-[660px] min-[420px]:mt-[800px]  w-[300px] sm:w-full m-auto  sm:mt-[900px] md:mt-[900px] lg:mt-[900px] xl:mt-[530px] "
      data-aos="fade-up"
      data-aos-delay="300"
    >
      <div className="text-center text-4xl font-bold ">
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
