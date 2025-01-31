import HeaderSection from "../components/sections/Headers/HeaderSection.jsx";
import Sidebar from "../components/sections/Sidebar/SidebarSection.jsx";

const CatalogPages = () => {
  return (
    <div>
      <HeaderSection />
      <div className="mt-12">
        <Sidebar />
      </div>
    </div>
  );
};

export default CatalogPages;
