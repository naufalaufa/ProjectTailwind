import PropTypes from "prop-types";

const CartMusicSpotify = ({ id, src }) => {
  return (
    <div key={id} className="w-full max-w-[300px] m-auto ">
      <iframe
        src={src}
        height="352"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
};

CartMusicSpotify.propTypes = {
  id: PropTypes.number,
  src: PropTypes.string,
};

export default CartMusicSpotify;
