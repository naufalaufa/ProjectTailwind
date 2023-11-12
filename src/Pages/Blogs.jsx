import { CardBlogs, Footer } from "../components";
import Hujan from "../assets/hujan.jpg";
import Surken from "../assets/dirikuSurken.jpg";
import masaSMK from "../assets/masaSMK.jpg";
import Bule from "../assets/buleInterview.jpg";

const Blogs = () => {
  return (
    <>
      <div className="w-[100$] max-w-[95vw] m-auto z-[99999999999999999999]   ">
        <h1 className="text-4xl mt-32 text-center mb-5">
          <span className="border-b-4 font-bold">BLOG</span>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-5 xl:grid-cols-4 mb-60 ">
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
            image={Bule}
            title="Diinterview Bule"
            date="12 November 2023"
          />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Blogs;
