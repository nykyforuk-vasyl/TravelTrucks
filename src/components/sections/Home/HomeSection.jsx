import HomeText from "../../HomeComponents/HomeText";
import HomeButton from "../../HomeComponents/HomeBatton";
import s from "./HomeSection.module.css";

const HomeSection = () => {
  return (
    <main className={`${s.hero} flex flex-col justify-center gap-10 pl-16`}>
      <HomeText />
      <HomeButton />
    </main>
  );
};

export default HomeSection;
