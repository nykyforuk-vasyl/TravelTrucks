import HeaderSection from "../components/sections/Headers/HeaderSection.jsx";
import Sidebar from "../components/sections/Sidebar/SidebarSection.jsx";
import Campers from "../components/sections/Campers/Campers.jsx";
import ScrollToTopButton from "../components/ScrollToTopButton/ScrollToTopButton.jsx";
import ClipLoader from "react-spinners/ClipLoader";
import ModalError from "../components/ModalError/ModalError.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchCampers } from "../redux/operations.js";
import { selectError, selectIsLoading } from "../redux/campers/selectors";

const CatalogPages = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const [errorText, setErrorText] = useState("");
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchCampers({ page: 1, limit: 4 })).finally(() =>
      setIsFirstLoad(false),
    );
  }, [dispatch]);

  useEffect(() => {
    setErrorText(error);
  }, [error]);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <>
      <HeaderSection />
      <main className="mt-12 flex flex-wrap justify-center px-8 md:flex-nowrap md:px-16">
        <div className="flex flex-col">
          <button
            onClick={toggleSidebar}
            className="toggle-btn mb-6 rounded-full bg-red px-6 py-2 text-white hover:bg-darkRed active:bg-darkRed md:absolute md:left-12"
          >
            {isSidebarOpen ? "Close Filters" : "Open Filters"}
          </button>

          <Sidebar
            isOpen={isSidebarOpen}
            onClose={() => setIsSidebarOpen(false)}
          />
        </div>

        {!isFirstLoad && isLoading && (
          <div className="flex h-screen items-center justify-center">
            <ClipLoader color="#e44848" size={70} />
          </div>
        )}
        {errorText ? (
          <ModalError text={errorText} onClose={() => setErrorText("")} />
        ) : (
          <Campers />
        )}
        <ScrollToTopButton />
      </main>
    </>
  );
};

export default CatalogPages;
