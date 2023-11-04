import PropTypes from "prop-types";
import { BsFillHeartFill } from "react-icons/bs";
import { useSelector } from "react-redux";

const CartMusic = (props) => {
  const { isLove } = useSelector((state) => state.likeMusic);

  const { id, Band, Song, Audio, Image } = props;
  const handleClickLike = (idMusic) => {
    console.log(idMusic);
  };

  return (
    <div className="flex flex-col justify-center m-auto items-center bg-black/50  rounded w-full max-w-[300px] p-6 sm:max-w-[400px]">
      <div
        className=" bg-gray-950 p-2 rounded mx-4 flex 
    max-w-[280px] sm:max-w-[400px] w-[100%] justify-between items-center"
      >
        <img
          src={Image}
          alt={Image}
          className="w-full max-w-[300px] h-full max-h-[200px] m-auto object-contain  "
        />
      </div>
      <div>
        <div className="mt-3">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-white font-bold">{id}</span>
              <h1 className="text-xl sm:text-2xl font-bold text-white  ">
                {Band}
              </h1>
              <p className="text-white mb-5">{Song}</p>
            </div>
            <div>
              <BsFillHeartFill
                cursor="pointer"
                onClick={() => handleClickLike(id)}
                color={isLove ? "red" : "white"}
                size={30}
              />
            </div>
          </div>
          <audio style={{ width: "255px" }} controls src={Audio}>
            <source src={Audio} />
          </audio>
        </div>
      </div>
    </div>
  );
};

CartMusic.propTypes = {
  id: PropTypes.any,
  Band: PropTypes.string,
  Song: PropTypes.string,
  Audio: PropTypes.string,
  Image: PropTypes.string,
};

export default CartMusic;
