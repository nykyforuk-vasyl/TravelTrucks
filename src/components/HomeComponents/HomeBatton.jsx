import { Link } from "react-router-dom";

const HomeButton = () => {
  return (
    <div>
      <Link
        className="rounded-full bg-red px-8 py-4 text-sm text-white transition-colors hover:bg-darkRed active:bg-darkRed md:px-[48px] md:text-base"
        to="/catalog"
      >
        View Now
      </Link>
    </div>
  );
};

export default HomeButton;
