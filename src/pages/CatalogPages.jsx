import HeaderSection from "../components/sections/Headers/HeaderSection.jsx";
import Sidebar from "../components/sections/Sidebar/SidebarSection.jsx";
import Campers from "../components/sections/Campers/Campers.jsx";
import ModalLoader from "../components/ModalLoader/ModalLoader.jsx";
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

  useEffect(() => {
    dispatch(fetchCampers({ page: 1, limit: 4 })).finally(() =>
      setIsFirstLoad(false),
    );
  }, [dispatch]);

  useEffect(() => {
    setErrorText(error);
  }, [error]);

  return (
    <>
      <HeaderSection />
      <div className="mt-12 flex flex-wrap justify-center md:flex-nowrap">
        <Sidebar />
        {!isFirstLoad && isLoading && (
          <ModalLoader text={"Loading list of campers"} />
        )}
        {errorText ? (
          <ModalError text={errorText} onClose={() => setErrorText("")} />
        ) : (
          <Campers />
        )}
      </div>
    </>
  );
};

export default CatalogPages;
