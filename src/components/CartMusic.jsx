import PropTypes from "prop-types";

const CartMusic = (props) => {
  const { id, Band, Song, Audio } = props;
  return (
    <div className="bg-white border border-black p-2 rounded mx-4 flex justify-between items-center">
      <div className=" ">
        <span className="text-black font-bold ">{id}</span>
        <h1 className="text-xl sm:text-2xl font-bold text-black ">{Band}</h1>
        <p className="text-black">{Song}</p>
        <audio className="" controls src={Audio} />
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
