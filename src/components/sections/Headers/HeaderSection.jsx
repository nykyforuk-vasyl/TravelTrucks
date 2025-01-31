import Navigation from "../../HeaderComponents/Navigation";
import Logo from "../../HeaderComponents/Logo";

const HeaderSection = () => {
  return (
    <header className="sticky top-0 z-50 flex items-center bg-darkWhite p-6 shadow-md">
      <Logo />
      <Navigation />
    </header>
  );
};

export default HeaderSection;
