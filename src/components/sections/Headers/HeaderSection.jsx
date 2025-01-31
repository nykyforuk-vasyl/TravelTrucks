import Navigation from "../../HeaderComponents/Navigation";
import Logo from "../../HeaderComponents/Logo";

const HeaderSection = () => {
  return (
    <header className="bg-darkWhite relative flex items-center p-6">
      <Logo />
      <Navigation />
    </header>
  );
};

export default HeaderSection;
