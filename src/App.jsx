import "./App.css";
import Text from "./components/sections/Home/WelcomeText.jsx";
// import Batton from "./components/sections/Home/WelcomeBatton.jsx";
import Forms from "./components/forms/CampervanBookingForm/CampervanBookingForm.jsx";
// import Image from "./components/sections/Home/WelcomePicture";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold text-[#911674] underline">
        hello world
      </h1>
      <Text />
      {/* <Batton /> */}
      <Forms />
      {/* <Image /> */}
    </>
  );
}

export default App;
