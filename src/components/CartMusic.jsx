import PropTypes from "prop-types";

const CartMusic = (props) => {
  const { id, Band, Song, Audio } = props;
  return (
    <div
      className="bg-white border border-black p-2  rounded mx-4 flex 
    max-w-[280px]  sm:max-w-[400px] w-[100%] justify-between items-center "
    >
      <div className=" ">
        <span className="text-black font-bold ">{id}</span>
        <h1 className="text-xl sm:text-2xl font-bold text-black ">{Band}</h1>
        <p className="text-black">{Song}</p>
        <audio style={{ width: "255px" }} controls src={Audio}>
          <source src={Audio} />
        </audio>
      </div>
    </div>
  );
};

CartMusic.propTypes = {
  id: PropTypes.any,
  Band: PropTypes.string,
  Song: PropTypes.string,
  Audio: PropTypes.string,
};

export default CartMusic;
