import { AiOutlineClose } from "react-icons/ai";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import PropTypes from "prop-types";
import CardInfo from "../Card/Cart/CardInfo";

const Info = ({ toggleInfo, setToggleInfo }) => {
  if (toggleInfo) {
    return (
      <div className="fixed bottom-2 z-[9999999] rounded  left-2 ">
        <div className="flex flex-col justify-center gap-3 p-1 ">
          <CardInfo />
          <button
            className="grid place-items-center btn-secondary btn "
            onClick={() => setToggleInfo(!toggleInfo)}
          >
            <AiOutlineClose size={20} />
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <button
        className="fixed btn btn-secondary z-[9999999999999999] left-3 bottom-2 shadow-md shadow-slate-800"
        onClick={() => setToggleInfo(!toggleInfo)}
      >
        <BsFillArrowUpCircleFill size={20} />
      </button>
    );
  }
};

Info.propTypes = {
  toggleInfo: PropTypes.func,
  setToggleInfo: PropTypes.func,
};

export default Info;
