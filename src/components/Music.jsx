import CartMusic from "./CartMusic";
import { DataMusic } from "../DataMusic";

const Music = () => {
  return (
    <div
      data-aos-delay="300"
      data-aos="fade-up"
      className="bg-gradient-to-t w-full min-w-[300px] sm:w-full m-auto from-slate-300 to-blue-700 rounded py-4 mt-8 sm:mt-32 "
    >
      <h1 className="text-center text-xl sm:text-4xl font-bold p-5">
        Top 10 Favorite Music
      </h1>
      <div className="grid sm:grid-cols-2 gap-2 ">
        {DataMusic.map((item, idx) => {
          return <CartMusic {...item} key={idx} />;
        })}
      </div>
    </div>
  );
};

export default Music;
