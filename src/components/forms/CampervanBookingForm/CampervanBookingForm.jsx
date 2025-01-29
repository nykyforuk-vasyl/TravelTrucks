import ReservationForm from "../ReservationForm/ReservationForm";

const CampervanBookingForm = () => {
  return (
    <div>
      <h2 className="mb-4 text-2xl font-bold">Book your campervan now</h2>
      <p className="mb-6 text-sm text-gray-500">
        Stay connected! We are always ready to help you.
      </p>
      <ReservationForm />
    </div>
  );
};

export default CampervanBookingForm;
