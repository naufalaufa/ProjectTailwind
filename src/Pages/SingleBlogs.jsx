import { Link, useParams } from "react-router-dom";
import {
  DataSingle1,
  DataSingle2,
  DataSingle3,
  DataSingle4,
} from "../Data/DataSingleBlogs";
import { CardSingleBlogs, Footer } from "../components";

const SingleBlogs = () => {
  const { id } = useParams();

  const data = () => {
    switch (id) {
      case "1":
        return DataSingle1;
      case "2":
        return DataSingle2;
      case "3":
        return DataSingle3;
      case "4":
        return DataSingle4;
      default:
        return null;
    }
  };

  return (
    <>
      <div>
        {data().map((item) => {
          return <CardSingleBlogs key={item.id} {...item} />;
        })}
        <div className="m-auto text-center">
          <Link to="/blogs" className="btn btn-neutral ">
            Back Home
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SingleBlogs;
