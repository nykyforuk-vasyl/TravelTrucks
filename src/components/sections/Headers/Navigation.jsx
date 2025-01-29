import { NavLink } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { HiPhone } from "react-icons/hi";

const Navigation = () => {
  return (
    <nav className="">
      <NavLink className="" to="/">
        <IoMdHome />
        Home
      </NavLink>
      <NavLink className="" to="/contacts">
        <HiPhone />
        Contact
      </NavLink>
    </nav>
  );
};

export default Navigation;
