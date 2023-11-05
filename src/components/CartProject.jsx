import PropTypes from "prop-types";
import { AiFillGithub } from "react-icons/ai";

const CartProject = ({ img, url, text, article, github }) => {
  return (
    <div className="flex justify-center">
      <div className="w-[300px]  sm:w-[600px] bg-gradient-to-r from-slate-50 to-blue-400 p-10 rounded-xl gap-5 shadow-md shadow-slate-800 ">
        <div>
          <p className="font-bold text-xl sm:text-2xl mb-3">{text}</p>
          <img src={img} alt={text} />
        </div>
        <article>
          <p className="mt-4">{article}</p>
        </article>
        <div className="mt-5 flex gap-5 justify-between">
          <button className="bg-blue-500 p-2 text-sm text-white rounded-xl cursor-pointer hover:bg-slate-500 font-bold whitespace-nowrap duration-100 shadow-sm shadow-slate-800">
            <a href={url} target="_blank" rel="noreferrer">
              Visit Link
            </a>
          </button>
          <button className="bg-blue-500 p-2 text-sm text-white rounded-xl cursor-pointer hover:bg-slate-500 font-bold whitespace-nowrap flex justify-between gap-2 items-center shadow-sm shadow-slate-800 ">
            <span>
              <a href={github} target="_blank" rel="noreferrer">
                Source Code
              </a>
            </span>
            <span>
              <AiFillGithub size={25} />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

CartProject.propTypes = {
  img: PropTypes.string,
  url: PropTypes.string,
  text: PropTypes.string,
  article: PropTypes.string,
  github: PropTypes.string,
};

export default CartProject;
