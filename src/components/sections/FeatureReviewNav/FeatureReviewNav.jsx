import { NavLink } from "react-router-dom";
import clsx from "clsx";
import s from "./Navigation.module.css";

const FeatureReviewNav = () => {
  const linkClass = ({ isActive }) => clsx(s.link, isActive && s.activeLink);

  return (
    <>
      <nav className="relative mb-6 flex gap-[10px] text-custom">
        <NavLink to="features" className={linkClass}>
          Features
        </NavLink>
        <NavLink to="reviews" className={linkClass}>
          Reviews
        </NavLink>
      </nav>
      <hr className="mb-11 h-px w-full bg-gray-300"></hr>
    </>
  );
};

export default FeatureReviewNav;
