import ReservationForm from "../ReservationForm/ReservationForm";

const CampervanForm = () => {
  return (
    <div className="m-w-108 flex-1 rounded-[10px] border p-5 pt-11 md:p-[57px]">
      <h2 className="mb-4 text-custom font-bold text-black">
        Book your campervan now
      </h2>
      <p className="mb-6 text-base font-normal text-grey">
        Stay connected! We are always ready to help you.
      </p>
      <ReservationForm />
    </div>
  );
};

export default CampervanForm;
