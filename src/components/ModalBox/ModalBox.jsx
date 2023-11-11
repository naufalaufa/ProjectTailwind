import { useDispatch, useSelector } from "react-redux";
import { CloseBox } from "../../features/showbox";

const ModalBox = () => {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state) => state.show);
  return (
    <div
      className="fixed top-0 left-0 bottom-0 right-0 bg-black/60 w-full h-full flex flex-col justify-center items-center z-20"
      data-aos="zoom-in"
    >
      <div className="bg-gradient-to-t from-slate-200 to-blue-800 w-full max-w-[300px] shadow-lg shadow-slate-400 p-10 rounded">
        <h1 className="text-sm sm:text-2xl text-white font-bold text-center">
          View Resume ?{" "}
        </h1>
        <div className="flex justify-between mt-20">
          <button className="bg-white p-2 rounded font-bold px-4 text-sm ">
            <a target="_blank" rel="noreferrer" className="text-black">
              YES
            </a>
          </button>
          <button
            className="bg-black text-white p-2 rounded font-bold text-sm"
            onClick={() => dispatch(CloseBox(!isOpen))}
          >
            CANCEL
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalBox;
