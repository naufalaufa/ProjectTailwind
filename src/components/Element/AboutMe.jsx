import LogoImage from "../../assets/logo-image.png";
import Me from "../../assets/me.jpg";
import Meee from "../../assets/meee.jpg";
import cibereum from "../../assets/cibereum.jpg";
import akoh from "../../assets/akoh.jpg";
import { useDispatch, useSelector } from "react-redux";
import { IconBox } from "../../Data/DataBoxTechStack";
import { showBoxContact } from "../../features/showBoxContact";
import AvatarGroup from "./AvatarGroup";
import { QRCode, Space } from "antd";
import { FaWhatsappSquare } from "react-icons/fa";
import { useState } from "react";

const AboutMe = () => {
  const dispatch = useDispatch();
  const { isOpenContact } = useSelector((state) => state.showContact);
  const [valueBarcode, setValueBarcode] = useState(
    "https://wa.me/6285156802452"
  );

  return (
    <div
      data-aos="fade-up"
      data-aos-delay="300"
      id="aboutme"
      className="text-center w-full min-w-[300px] m-auto sm:w-full  max-h-[500px]  mt-[200px]  "
    >
      <span className="text-center text-4xl mb-10 font-bold my-40 border-b-4 2xl:text-6xl">
        About Me
      </span>
      <div className="flex justify-center mt-10">
        <div className="grid  xl:grid-cols-2 items-center">
          <div className="relative ">
            <img
              src={LogoImage}
              alt={LogoImage}
              className="w-[100%] max-w-[600px] bg-gradient-to-r from-blue-100 to-blue-500 shadow-lg shadow-slate-800 rounded-md mb-5 m-auto "
            />

            <button
              className="absolute top-0 bg-blue-500 p-2 shadow-md shadow-slate-600 text-white font-bold rounded-sm px-4 hover:bg-slate-400"
              onClick={() => dispatch(showBoxContact(!isOpenContact))}
            >
              Contact Me
            </button>
          </div>
          <div className="relative">
            <h1 className="text-2xl sm:text-4xl mb-5 2xl:text-5xl">
              Hi iam <span className="text-blue-500 font-bold ">Naufal </span>
            </h1>

            <p className="text-sm mb-10 sm:text-sm max-w-xl m-auto lg:max-w-md 2xl:text-xl ">
              Iam Front End Developer , focus in user interfaces and user
              experience , familiar with using technologies such as react js ,
              tailwind css, javascript, html, css. Live in Jakarta Indonesia.
            </p>
            <div className="avatar-group -space-x-5 flex justify-center mb-10">
              <AvatarGroup
                Me={Me}
                Meee={Meee}
                cibereum={cibereum}
                akoh={akoh}
              />
            </div>
            <h1 className="text-2xl p-2 rounded font-bold 2xl:text-4xl  ">
              Tech Stack <span className="text-blue-500">Overview</span>
            </h1>
            <div className="flex justify-center mt-5 flex-wrap gap-4 ">
              {IconBox.map((item) => {
                const { id, style, icon } = item;
                return (
                  <span className={style} key={id}>
                    {icon}
                  </span>
                );
              })}
            </div>
            <Space className="mt-20 grid place-content-center">
              <div className="bg-white p-8 rounded-lg shadow-sm shadow-slate-700">
                <QRCode
                  value={valueBarcode || "-"}
                  size={150}
                  className="m-auto"
                />
                <div className="flex items-center justify-center">
                  <FaWhatsappSquare size={30} className="mt-4 text-green-600" />
                  <p className="mt-3 text-black">Link whatsaap number</p>
                </div>
              </div>
            </Space>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
