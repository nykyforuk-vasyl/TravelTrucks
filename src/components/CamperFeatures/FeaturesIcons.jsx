import Icon from "../../ui/Icon";

const FeaturesIcons = () => {
  return (
    <div>
      <span className="">
        <Icon id="diagram" w={20} h={20} className="fill-black" />
        Automatic
      </span>
      <span className="">
        <Icon id="wind" w={20} h={20} className="fill-black" />
        AC
      </span>
      <span className="">
        <Icon id="fuel-pump" w={20} h={20} className="fill-black" />
        Petrol
      </span>
      <span className="">
        <Icon id="cup-hot" w={20} h={20} className="fill-black" />
        Kitchen
      </span>
      <span className="">
        <Icon id="ui-radios" w={20} h={20} className="fill-black" />
        Radio
      </span>
    </div>
  );
};

export default FeaturesIcons;
