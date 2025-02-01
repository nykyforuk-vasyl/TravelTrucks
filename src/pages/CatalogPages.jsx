import HeaderSection from "../components/sections/Headers/HeaderSection.jsx";
import Sidebar from "../components/sections/Sidebar/SidebarSection.jsx";
import ModalLoader from "../components/ModalLoader/ModalLoader.jsx";

const CatalogPages = () => {
  return (
    <div>
      <HeaderSection />
      <div className="mt-12">
        <Sidebar />
        <ModalLoader />
      </div>
    </div>
  );
};

export default CatalogPages;
