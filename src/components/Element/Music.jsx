import { DataMusicSpotify } from "../../Data/DataMusicSpotify";
import CartMusicSpotify from "../Card/Cart/CartMusicSpotify";

const Music = () => {
  return (
    <div
      className="w-full min-w-[300px] sm:w-full m-auto rounded py-4 mt-32 sm:mt-32  "
      id="playlist"
    >
      <div className="text-center text-4xl mb-20 2xl:mb-10 2xl:text-5xl">
        <span
          data-aos="zoom-in"
          data-aos-delay="200"
          className="mb-5  border-solid border-b-4 font-bold"
        >
          PlayList
        </span>
      </div>
      <div
        data-aos-delay="200"
        data-aos="fade-up"
        className=" bg-gradient-to-r from-green-950 to-slate-600 text-white py-5 rounded"
      >
        <h1 className="text-center text-xl sm:text-4xl font-bold p-5">
          Top 10 Favorite Music
        </h1>
        <div className="grid sm:grid-cols-2 gap-4 ">
          {DataMusicSpotify.map((item, idx) => {
            return <CartMusicSpotify {...item} key={idx} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Music;
