import WelcomeText from "./WelcomeText";
// import WelcomeButtons from "./WelcomeBatton";

const AdvantagesPicture = () => {
  return (
    <div className="">
      <picture>
        <source
          srcSet="/public/images/Welcome/Picture.jpg 1x, /public/images/Welcome/Picture-2x.jpg 2x"
          media="(max-width: 767px)"
          type="image/avif"
        />
        <img
          src="/public/images/Welcome/Picture.jpg"
          alt="Welcome section"
          className="size-full"
        />
      </picture>
      <WelcomeText />
      {/* <WelcomeButtons /> */}
    </div>
  );
};

export default AdvantagesPicture;
