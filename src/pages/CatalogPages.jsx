import HeaderSection from "../components/sections/Headers/HeaderSection.jsx";
import Sidebar from "../components/sections/Sidebar/SidebarSection.jsx";
// import ModalLoader from "../components/ModalLoader/ModalLoader.jsx";
import CardsCampers from "../components/sections/Campers/CardsCampers.jsx";
import CatalogBatton from "../components/CatalogBatton/CatalogBatton.jsx";

const CatalogPages = () => {
  return (
    <div>
      <HeaderSection />
      <div className="mt-12 flex">
        <Sidebar />
        <CardsCampers />
        <CatalogBatton />
        {/* <ModalLoader text={"Thhff"} /> */}
      </div>
    </div>
  );
};

export default CatalogPages;
