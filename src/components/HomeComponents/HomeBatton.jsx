import { Link } from "react-router-dom";

const HomeButton = () => {
  return (
    <div>
      <Link
        className="rounded-full bg-red px-[48px] py-4 text-base text-white transition-colors hover:bg-darkRed active:bg-darkRed"
        to="/catalog"
      >
        View Now
      </Link>
    </div>
  );
};

export default HomeButton;
