import { Link } from "react-router-dom";
import s from "../Home/HomeSection.module.css";

const HomeSection = () => {
  return (
    <main className={`${s.hero} flex flex-col justify-center gap-10 pl-16`}>
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl tracking-wider text-darkWhite md:text-5xl">
          Campers of your dreams
        </h1>
        <p className="text-base tracking-wide text-darkWhite md:text-xl">
          You can find everything you want in our catalog
        </p>
      </div>

      <div>
        <Link
          className="rounded-full bg-red px-8 py-4 text-sm text-white transition-colors hover:bg-darkRed active:bg-darkRed md:px-[48px] md:text-base"
          to="/catalog"
        >
          View Now
        </Link>
      </div>
    </main>
  );
};

export default HomeSection;
