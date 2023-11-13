import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CardBlogs = ({ image, title, date, id }) => {
  return (
    <div className="mt-10 m-auto">
      <Link to={`/blogs/${id}`}>
        <img
          src={image}
          className="w-64 h-64 rounded object-cover hover:opacity-80 cursor-pointer shadow-lg shadow-slate-700"
          alt="error"
        />
      </Link>
      <div>
        <h1 className="text-center my-3 text-xl font-semibold ">{title}</h1>
        <p className="text-center font-light">{date}</p>
      </div>
    </div>
  );
};

CardBlogs.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
  id: PropTypes.number,
};

export default CardBlogs;
