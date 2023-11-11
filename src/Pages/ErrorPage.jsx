import { Link, useRouteError } from "react-router-dom";
import { Error } from "../components";
const ErrorPage = () => {
  const error = useRouteError();
  if (error.status === 404) {
    return (
      <div className="w-full h-screen max-w-[90vw] m-auto grid place-items-center place-content-center gap-3">
        <Error />
        <p>{error.error.message}</p>
        <Link className="btn btn-primary shadow-md shadow-slate-800" to="/">
          Back Home
        </Link>
      </div>
    );
  }

  return (
    <div className="grid w-full h-screen place-content-center place-items-center font-bold">
      <h1 className="text-2xl">Someting went wrong.....</h1>
    </div>
  );
};

export default ErrorPage;
