import PropTypes, { string } from "prop-types";

const CardSingleBlogs = ({ id, date, name, image, text }) => {
  return (
    <>
      <div key={id} className="mt-40 sm:mt-20 md:mt-28 lg:mt-32 ">
        <div>
          <p className="text-center mb-2">{date}</p>
          <p className="text-2xl font-bold mb-5  text-center">{name}</p>
        </div>
        <img
          src={image}
          className="w-[300px] h-[300px]  rounded-md object-cover  m-auto"
          alt={image}
        />
        <div className="max-w-xl m-auto lg:max-w-2xl text-sm">
          <p className="max-w-2xl m-auto p-5 sm:max-w-4xl leading-7">
            {text[0]}
          </p>
          <p className="max-w-2xl m-auto p-5 sm:max-w-4xl leading-7">
            {text[1]}
          </p>
          <p className="max-w-2xl m-auto p-5 sm:max-w-4xl leading-7">
            {text[2]}
          </p>
          <p className="max-w-2xl m-auto p-5 sm:max-w-4xl leading-7">
            {text[3]}
          </p>
          <p className="max-w-2xl m-auto p-5 sm:max-w-4xl leading-7">
            {text[4]}
          </p>
        </div>
      </div>
    </>
  );
};

CardSingleBlogs.propTypes = {
  id: PropTypes.number,
  date: PropTypes.string,
  name: PropTypes.string,
  image: PropTypes.string,
  text: PropTypes.arrayOf(string),
};

export default CardSingleBlogs;
