import { DataBlogStory } from "../Data/DataBlogStory";
import { CardBlogs, Footer } from "../components";

const Blogs = () => {
  return (
    <>
      <div className="w-[100$] max-w-[95vw] m-auto z-[99999999999999999999]   ">
        <h1 className="text-4xl mt-32 text-center mb-5">
          <span className="border-b-4 font-bold">BLOG</span>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-5 xl:grid-cols-4 mb-60 ">
          {DataBlogStory.map((item) => {
            return <CardBlogs key={item.id} {...item} />;
          })}
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Blogs;
