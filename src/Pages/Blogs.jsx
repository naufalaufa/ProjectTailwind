const Blogs = () => {
  return (
    <>
      <div className="w-[100$] max-w-[95vw] m-auto z-[99999999999999999999] ">
        <div className="mt-40">
          <h1 className="text-center text-2xl font-bold sm:text-4xl">
            <span className=" border-b-4">MY BLOG</span>
          </h1>
          <article className="text-center  mt-10 w-full max-w-[500px] p-2 m-auto sm:max-w-[900px]">
            Mungkin kalian bingung kenapa halaman ini bahasa indonesia sendiri
            ya ? wkwkwk memang aneh , ini adalah sebuah Blog Pribadi saya ,
            dimana disini kamu dapat menemukan hal hal random ,
            keresahan-keresahan , cerita unfaedah , serta hal-hal yang saat ini
            saya sukai , terdengar tidak menarik dan begitu membosankan tapi ya
            begitulah <br />
            <p className="bg-blue-300 max-w-[200px] m-auto  p-1 mt-2 rounded text-white ">
              Jangan lupa bahagia ya!
            </p>
          </article>
        </div>
      </div>
    </>
  );
};

export default Blogs;
