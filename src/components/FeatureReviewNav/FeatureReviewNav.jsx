import { NavLink } from "react-router-dom";
import clsx from "clsx";
import s from "./Navigation.module.css";

const Navigation = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.activeLink);
  };

  return (
    <header className={s.header}>
      <NavLink className={buildLinkClass} to="/features">
        Features
      </NavLink>
      <NavLink className={buildLinkClass} to="/reviews">
        Reviews
      </NavLink>
      <div className="my-4 h-px w-full bg-gray-300"></div>
    </header>
  );
};

export default Navigation;
