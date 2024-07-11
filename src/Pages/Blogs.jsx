import { CardBlogs } from "../components";
import Hujan from "../assets/hujan.jpg";
import Surken from "../assets/dirikuSurken.jpg";
import masaSMK from "../assets/masaSMK.jpg";
import deadpool from "../assets/deadpool.jpg";
import Senja from "../assets/senja.jpg";
import insomnia from "../assets/insomnia.jpg";
import Bule from "../assets/buleeee.png";
import MasaKecil from "../assets/masaKecil.jpg";
import Cretivox from "../assets/cretivox.png";
import { Link } from "react-router-dom";
import Footer2 from "../components/Element/Footer2";

const Blogs = () => {
  return (
    <>
      <div className="w-[100%] max-w-[95vw] m-auto z-[99999999999999999999] ">
        <h1 className="text-4xl mt-32 text-center mb-5">
          <span className="border-b-4 font-bold">BLOG</span>
        </h1>
        <div className="flex justify-center mb-10">
          <Link to="/blog" className="btn btn-neutral ">
            Back Home
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-5 xl:grid-cols-4 mb-60 text-sm  ">
          <CardBlogs
            id={1}
            image={Hujan}
            title="Hujan Dan Kenangan"
            date="11 November 2023"
          />
          <CardBlogs
            id={2}
            image={Surken}
            title="Tersesat Di Surya Kencana"
            date="11 November 2023"
          />
          <CardBlogs
            id={3}
            image={masaSMK}
            title="Masa SMK"
            date="11 November 2023"
          />
          <CardBlogs
            id={4}
            image={deadpool}
            title="Deadpool"
            date="12 November 2023"
          />
          <CardBlogs
            id={5}
            image={Senja}
            title="Senja Dan Jingga"
            date="14 November 2023"
          />
          <CardBlogs
            id={6}
            image={insomnia}
            title="Susah Tidur"
            date="14 November 2023"
          />
          <CardBlogs
            id={7}
            image={Bule}
            title="Diinterview Bule"
            date="14 November 2023"
          />
          <CardBlogs
            id={8}
            image={MasaKecil}
            title="Beranjak Dewasa"
            date="14 November 2023"
          />
          <CardBlogs
            id={9}
            image={Cretivox}
            title="Cretivox"
            date="07 July 2024"
          />
        </div>
        <Footer2 />
      </div>
    </>
  );
};

export default Blogs;
