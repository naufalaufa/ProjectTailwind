import { Link, useParams } from "react-router-dom";
import {
  DataSingle1,
  DataSingle2,
  DataSingle3,
  DataSingle4,
  DataSingle5,
  DataSingle6,
  DataSingle7,
  DataSingle8,
  DataSingle9,
} from "../Data/DataSingleBlogs";
import { CardSingleBlogs, Footer } from "../components";
import Footer2 from "../components/Element/Footer2";

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
      case "5":
        return DataSingle5;
      case "6":
        return DataSingle6;
      case "7":
        return DataSingle7;
      case "8":
        return DataSingle8;
      case "9":
        return DataSingle9;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="w-[95vw] m-auto">
        {data().map((item) => {
          return <CardSingleBlogs key={item.id} {...item} />;
        })}
        <div className="m-auto text-center">
          <Link to="/blogs" className="btn btn-neutral ">
            Back Home
          </Link>
        </div>
        <Footer2 />
      </div>
    </>
  );
};

export default SingleBlogs;
