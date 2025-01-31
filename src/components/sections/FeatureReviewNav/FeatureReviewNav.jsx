import { NavLink } from "react-router-dom";
// import clsx from "clsx";

const FeatureReviewNav = () => {
  return (
    <header className="">
      <NavLink className="first-line:" to="/features">
        Features
      </NavLink>
      <NavLink className="" to="/reviews">
        Reviews
      </NavLink>
      <div className="my-4 h-px w-full bg-gray-300"></div>
    </header>
  );
};

export default FeatureReviewNav;
