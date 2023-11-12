import { Link } from "react-router-dom";
import { DataSingleBlogs } from "../Data/DataSingleBlogs";

const SingleBlogs = () => {
  return (
    <div className="mt-20 py-20">
      <div>
        <Link to="/blogs" className="btn btn-neutral">
          Back Home
        </Link>
      </div>
      <div>
        {DataSingleBlogs.map((item) => {
          const { id, image, title, date } = item;
          return (
            <div key={id}>
              <p>{date}</p>
              <h1>{title}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SingleBlogs;
