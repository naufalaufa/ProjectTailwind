const CardBlogs = ({ image, title, date }) => {
  return (
    <div className="mt-10 m-auto">
      <div>
        <img
          src={image}
          className="w-64 h-64 rounded object-cover hover:opacity-80 cursor-pointer shadow-lg shadow-slate-700 "
          alt=""
        />
      </div>
      <div className="">
        <h1 className="text-center my-3 text-xl font-semibold ">{title}</h1>
        <p className="text-center font-light">{date}</p>
      </div>
    </div>
  );
};

export default CardBlogs;
