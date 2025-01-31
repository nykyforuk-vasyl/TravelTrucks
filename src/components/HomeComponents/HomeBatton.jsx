import { Link } from "react-router-dom";

const HomeButton = () => {
  return (
    <div>
      <Link
        className="bg-red hover:bg-darkRed active:bg-darkRed rounded-full px-[48px] py-4 text-base text-white transition-colors"
        to="/catalog"
      >
        View Now
      </Link>
    </div>
  );
};

export default HomeButton;
