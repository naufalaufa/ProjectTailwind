import DirikuWkwk from "../assets/kacamatawkwk.jpg";

const AboutPages = () => {
  return (
    <div>
      <div className="mt-40">
        <h1 className="text-center font-bold text-2xl sm:text-4xl">
          EXTRA ABOUT ME
        </h1>
      </div>
      <div className="w-full h-full grid grid-cols-2 p-10 bg-white/25">
        <div className="mb-2">
          <img
            className="w-full h-full max-w-[400px] rounded-xl shadow-md shadow-slate-800 object-cover"
            src={DirikuWkwk}
            alt="err"
          />
          <div></div>
        </div>
        <article>
          <p>Hello haha its me Naufal you can call Opal</p>
          <p></p>
        </article>
      </div>
    </div>
  );
};

export default AboutPages;
