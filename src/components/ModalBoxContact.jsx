import { useDispatch, useSelector } from "react-redux";
import { closeBoxContact } from "../features/showBoxContact";

const ModalBoxContact = () => {
  const { isOpenContact } = useSelector((state) => state.showContact);
  const dispatch = useDispatch();
  return (
    <div
      className="fixed top-0 left-0 bottom-0 right-0 bg-black/60 w-full h-full flex flex-col justify-center items-center z-20"
      data-aos="zoom-in"
    >
      <div className="bg-gradient-to-t from-slate-200 to-blue-800 w-full max-w-[300px] p-10 rounded font-bold">
        <h1 className="text-white">
          <span className="bg-white text-black p-1 rounded text-xl ">
            interested in me ?
          </span>
          <br />
          Or do you want to invite me for coffee?🍵 ? <br />
          please leave a message
        </h1>
        <div className="mt-20 flex justify-between">
          <button className="bg-white p-2 rounded font-bold">
            <a
              href="mailto:muhammadnaufalaufarifqi@gmail.com"
              target="_blank"
              rel="norefferer noreferrer"
              className="text-black"
            >
              SEND MESSAGE
            </a>
          </button>
          <button
            className="bg-black text-white p-2 rounded hover:bg-white hover:text-black"
            onClick={() => dispatch(closeBoxContact(!isOpenContact))}
          >
            CANCEL
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalBoxContact;
