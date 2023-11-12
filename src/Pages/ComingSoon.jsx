import { Link } from "react-router-dom";

const ComingSoon = () => {
  return (
    <div className="h-screen font-bold w-full mt-20  text-center grid place-content-center place-items-center">
      <h1>ComingSoon</h1>
      <Link to="/blogs" className="btn mt-5">
        Back Home
      </Link>
    </div>
  );
};

export default ComingSoon;
