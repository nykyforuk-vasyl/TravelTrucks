import FeaturesIcons from "./FeaturesIcons";

const CamperFeatures = () => {
  return (
    <div>
      <FeaturesIcons />

      <h2 className="">Vehicle details</h2>
      <div className="my-4 h-px w-full bg-gray-300"></div>

      <ul className="">
        <li className="flex justify-between">
          <span className="">Form:</span> <span>Panel truck</span>
        </li>
        <li className="flex justify-between">
          <span className="">Length:</span> <span>5.4 m</span>
        </li>
        <li className="flex justify-between">
          <span className="">Width:</span> <span>2.01 m</span>
        </li>
        <li className="flex justify-between">
          <span className="">Height:</span> <span>2.05 m</span>
        </li>
        <li className="flex justify-between">
          <span className="">Tank:</span> <span>132 l</span>
        </li>
        <li className="flex justify-between">
          <span className="">Consumption:</span> <span>12.4l/100km</span>
        </li>
      </ul>
    </div>
  );
};

export default CamperFeatures;
