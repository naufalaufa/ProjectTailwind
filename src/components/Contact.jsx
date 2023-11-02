import { CardComponent } from "./index";
import { BsInstagram } from "react-icons/bs";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";
import PropTypes from "prop-types";
import "swiper/css";
const Contact = ({ toggleNavbar }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay="300"
      className="my-20 w-full min-w-[300px] m-auto"
    >
      <div className="text-xl sm:text-4xl text-center font-bold">
        <span className="border-b-4">Lets Connect And Say Hi</span>
      </div>
      <div className="flex flex-col justify-evenly p-10 sm:flex-row gap-5  ">
        <CardComponent
          toggleNavbar={toggleNavbar}
          url={"https://www.linkedin.com/in/naufal-aufa-a7a415257/"}
          logo={<BiLogoLinkedinSquare size={45} />}
          text="My profesional..."
          button="Follow Me"
          titleText="Linkedin"
        />
        <CardComponent
          toggleNavbar={toggleNavbar}
          url={"https://github.com/naufalaufa/"}
          logo={<AiFillGithub size={45} />}
          text="Open Source"
          button="Follow Me"
          titleText="Github"
        />
        <CardComponent
          toggleNavbar={toggleNavbar}
          url={"https://www.instagram.com/naufallrifqiii/?hl=id"}
          logo={<BsInstagram size={45} />}
          text="My Daily Life"
          button="Follow Me"
          titleText="Instagram"
        />
      </div>
    </div>
  );
};

Contact.propTypes = {
  toggleNavbar: PropTypes.func,
};

export default Contact;
