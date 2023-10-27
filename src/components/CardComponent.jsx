import PropTypes from "prop-types";

const CardComponent = ({ logo, text, button, titleText, url }) => {
  return (
    <div className="rounded p-4 border border-solid border-black ">
      <div className="w-48 h-24">
        <span className="block bg-gradient-to-r from-blue-100 to-blue-500  p-1 text-white rounded text-center">
          {text}
        </span>
        <div className=" inline-block p-1 rounded">{logo}</div>
      </div>
      <p className="font-bold mb-2 ">{titleText}</p>
      <button className="bg-gradient-to-r from-blue-300 to-blue-500 text-white font-bold p-2 rounded">
        <a href={url} target="_blank" rel="noreferrer">
          {button}
        </a>
      </button>
    </div>
  );
};

CardComponent.propTypes = {
  logo: PropTypes.any,
  text: PropTypes.string,
  button: PropTypes.string,
  titleText: PropTypes.string,
  url: PropTypes.string,
};

export default CardComponent;
