import { Link } from "react-router-dom";
import { BlogHome, Footer } from "../components";
import Footer2 from "../components/Element/Footer2";

const HomeBlog = () => {
  return (
    <>
      <div className="max-w-[95vw] w-full h-screen m-auto grid place-content-center place-items-center">
        <div className="grid grid-cols-1  sm:grid-cols-2 place-content-center place-items-center mt-20">
          <div>
            <BlogHome />
          </div>
          <div>
            <article className="max-w-[500px] ">
              <p className="font-light  text-center text-sm p-3 sm:text-base">
                Hallo selamat datang di halaman blog pribadi saya , sudah jelas
                kan , <span className="font-bold">-Naufal Aufa</span> , blog ini
                berisi informasi tentang{" "}
                <span className="font-bold">Naufal</span>. tulisan-tulisannya
                tentang apapun , keresahan , cerita unfaedah dan lain lain ,
                absurd dikit gapapa ya
              </p>
              <div className="flex justify-center ">
                <Link to="/blogs" className="btn  btn-sm sm:btn-md  ">
                  Masuk Ke Blog
                </Link>
              </div>
            </article>
          </div>
        </div>
      </div>

      <Footer2 />
    </>
  );
};

export default HomeBlog;
