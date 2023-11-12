import { Link } from "react-router-dom";

const SingleBlogs = () => {
  return (
    <div className="mt-20 py-20 grid place-content-center place-items-center h-screen">
      <div>
        <p className="mb-10">Coming Soon </p>
      </div>
      <div>
        <Link to="/blogs" className="btn btn-neutral">
          Back Home
        </Link>
      </div>
      <div></div>
    </div>
  );
};

export default SingleBlogs;
