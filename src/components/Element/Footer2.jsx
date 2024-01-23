const Footer2 = () => {
  return (
    <div className="bg-blue-900 p-10 rounded w-full lg:grid md:grid md:grid-cols-4 lg:grid-cols-4 lg:place-items-start gap-28 text-center sm:text-start min-h-[200px]">
      <div className="my-5">
        <h1 className="font-bold text-white text-2xl whitespace-nowrap ">
          Naufal Aufa
        </h1>
        <p className="text-xs sm:text-sm text-white whitespace-nowrap mt-5 ">
          Mochamad Naufal Aufa
        </p>
        <p className="text-white text-xs">Rifqi Portfolio</p>
      </div>
      <div className="my-5">
        <h1 className="font-bold text-2xl text-white">Pages</h1>
        <ul className="grid gap-2 mt-5 text-white">
          <li className="text-sm">About</li>
          <li className="text-sm">Blog</li>
        </ul>
      </div>
      <div>
        <h1 className="font-bold text-2xl text-white my-5 whitespace-nowrap">
          Social Media
        </h1>
        <ul className="grid gap-2 mt-5 text-white">
          <li className="text-sm">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/naufal-aufa-a7a415257/"
              rel="noreferrer"
            >
              Linkedin
            </a>
          </li>
          <li className="text-sm">
            <a
              target="_blank"
              href="https://www.instagram.com/_opal.jpg/?hl=id"
              rel="noreferrer"
            >
              Instagram
            </a>
          </li>
          <li className="text-sm">
            <a
              target="_blank"
              href="https://github.com/naufalaufa"
              rel="noreferrer"
            >
              Github
            </a>
          </li>
        </ul>
      </div>
      <div className="my-5">
        <h1 className="text-xl text-white font-bold ">Contact</h1>
        <ul className="text-white mt-5">
          <li className="text-xs whitespace-nowrap">+62-851-5680-2452</li>
          <li className="whitespace-nowrap text-xs">Jakarta - Indonesia</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer2;
