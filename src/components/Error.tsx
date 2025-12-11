import { useRouteError } from "react-router-dom";

interface RouteError {
  status?: number;
  statusText?: string;
}

const Error = () => {
  const err = useRouteError() as RouteError;
  console.log(err);
  return (
    <div>
      <h1>Oops!!! Something went wrong.</h1>
      <p>Please try again later.</p>
      <h2>
        {err.status}: {err.statusText}
      </h2>
    </div>
  );
};

export default Error;
