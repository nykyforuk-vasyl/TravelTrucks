import { NavLink } from "react-router-dom";
import clsx from "clsx";
import s from "./Navigation.module.css";

const Navigation = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.activeLink);
  };
  return (
    <nav className="absolute left-1/2 flex -translate-x-1/2 gap-6">
      <NavLink className={buildLinkClass} to="/">
        Home
      </NavLink>
      <NavLink className={buildLinkClass} to="/catalog">
        Catalog
      </NavLink>
    </nav>
  );
};

export default Navigation;
