import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import HomePage from "./pages/HomePage.jsx";
import ModalLoader from "./components/ModalLoader/ModalLoader.jsx";

// import Navigation from "./components/sections/Headers/Navigation.jsx";
const NotFoundPage = lazy(() => import("./pages/NotFoundPage.jsx"));
const CatalogPages = lazy(() => import("./pages/CatalogPages.jsx"));
const CatalogDetailsPage = lazy(() => import("./pages/CatalogDetailsPage.jsx"));
const FeatureSection = lazy(
  () => import("./components/sections/Feature/FeatureSection.jsx"),
);
const ReviewsSection = lazy(
  () => import("./components/sections/Reviews/ReviewsSection.jsx"),
);

function App() {
  return (
    <div>
      <Suspense fallback={<ModalLoader text={"TravelTrucks..."} />}>
        {/* <Navigation /> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPages />} />
          <Route path="/catalog/:id" element={<CatalogDetailsPage />}>
            <Route path="features" element={<FeatureSection />} />
            <Route path="reviews" element={<ReviewsSection />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
