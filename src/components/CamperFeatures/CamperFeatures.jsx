const CamperFeatures = ({ cardIdCamper }) => {
  const { form, length, width, height, tank, consumption } = cardIdCamper;

  return (
    <div>
      <h2 className="text-custom">Vehicle details</h2>
      <div className="my-4 h-px w-full bg-gray-300"></div>

      <ul className="flex flex-col gap-4 font-semibold">
        <li className="flex justify-between">
          <span className="">Form:</span> <span>{form}</span>
        </li>
        <li className="flex justify-between">
          <span className="">Length:</span> <span>{length}</span>
        </li>
        <li className="flex justify-between">
          <span className="">Width:</span> <span>{width}</span>
        </li>
        <li className="flex justify-between">
          <span className="">Height:</span> <span>{height}</span>
        </li>
        <li className="flex justify-between">
          <span className="">Tank:</span> <span>{tank}</span>
        </li>
        <li className="flex justify-between">
          <span className="">Consumption:</span> <span>{consumption}</span>
        </li>
      </ul>
    </div>
  );
};

export default CamperFeatures;
