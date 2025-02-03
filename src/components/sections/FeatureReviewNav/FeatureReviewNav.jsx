import { NavLink } from "react-router-dom";

const FeatureReviewNav = () => {
  return (
    <section className="mb-11">
      <div className="flex gap-[10px] text-custom">
        <NavLink
          to="features"
          className={({ isActive }) =>
            isActive ? "text-red-500 border-red-500 border-b-2" : ""
          }
        >
          Features
        </NavLink>
        <NavLink
          to="reviews"
          className={({ isActive }) =>
            isActive ? "text-red-500 border-red-500 border-b-2" : ""
          }
        >
          Reviews
        </NavLink>
      </div>
      <div className="my-4 h-px w-full bg-gray-300"></div>
    </section>
  );
};

export default FeatureReviewNav;
