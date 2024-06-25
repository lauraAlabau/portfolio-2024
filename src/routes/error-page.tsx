import { useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error: unknown = useRouteError();

  return (
    <section className="max-w-[1000px] mx-auto lg:my-0 text-slate-100  h-auto flex flex-col justify-center items-start min-h-screen p-0">
      <h1 className="text-4xl font-bold leading-tight text-red-400 lg:text-8xl">
        Oops!
      </h1>
      <h2 className="mt-1.5 text-slate-400 lg:text-7xl text-3xl font-bold">
        Sorry, an unexpected error has occurred.
      </h2>
      <p className="text-slate-100 max-w-[540px] mt-5">
        The page you were trying to access was{" "}
        <i>
          {(error as Error)?.message ||
            (error as { statusText?: string })?.statusText}
        </i>
      </p>
    </section>
  );
};
