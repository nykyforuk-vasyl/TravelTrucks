import Navigation from "../../HeaderComponents/Navigation";
import Logo from "../../HeaderComponents/Logo";

const HeaderSection = () => {
  return (
    <header className="sticky top-0 z-10 flex flex-col items-center justify-center gap-4 bg-darkWhite px-16 py-3 shadow-md md:flex-row md:gap-0 md:py-6">
      <Logo />
      <Navigation />
    </header>
  );
};

export default HeaderSection;
