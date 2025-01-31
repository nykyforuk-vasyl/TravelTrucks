import HomeText from "../../HomeComponents/HomeText";
import HomeButton from "../../HomeComponents/HomeBatton";
import s from "./HomeSection.module.css";

const HomeSection = () => {
  return (
    <section className={`${s.hero} flex flex-col justify-center gap-10 pl-16`}>
      <HomeText />
      <HomeButton />
    </section>
  );
};

export default HomeSection;
