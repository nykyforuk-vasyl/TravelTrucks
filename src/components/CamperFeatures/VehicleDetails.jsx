const VehicleDetails = ({ cardIdCamper }) => {
  const { form, length, width, height, tank, consumption, transmission } =
    cardIdCamper || {};

  const vehicleDetails = [
    { label: "Transmission", value: transmission },
    { label: "Form", value: form },
    { label: "Length", value: length },
    { label: "Width", value: width },
    { label: "Height", value: height },
    { label: "Tank", value: tank },
    { label: "Consumption", value: consumption },
  ];

  return (
    <>
      <h2 className="text-custom">Vehicle details</h2>
      <div className="my-4 h-px w-full bg-gray-300"></div>

      <ul className="flex flex-col gap-4 font-semibold">
        {vehicleDetails.map(({ label, value }, index) => (
          <li key={index} className="flex justify-between">
            <span>{label}:</span> <span>{value}</span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default VehicleDetails;
