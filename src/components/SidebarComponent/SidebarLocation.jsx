import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectLocation } from "../../redux/filters/selectors";
import { selectError } from "../../redux/campers/selectors.js";
import { setFilters } from "../../redux/filters/slice";

import citiesLocations from "../../data/citiesLocations.json";
import Icon from "../../ui/Icon";

const SidebarLocation = ({ tempFilters, setTempFilters }) => {
  const dispatch = useDispatch();
  const reduxLocation = useSelector(selectLocation);
  const error = useSelector(selectError);

  const [inputValue, setInputValue] = useState(
    tempFilters.location || reduxLocation || "",
  );
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    if (error) {
      setInputValue("");
      dispatch(setFilters({ location: "" }));
    }
  }, [error, dispatch]);

  const filterCities = (query) => {
    if (!query.trim()) {
      setSuggestions([]);
      return;
    }
    const filteredCities = citiesLocations.filter((city) =>
      city.toLowerCase().startsWith(query.toLowerCase()),
    );
    setSuggestions(filteredCities);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setTempFilters((prev) => ({ ...prev, location: e.target.value }));
    filterCities(e.target.value);
  };

  const handleSelectSuggestion = (city) => {
    setInputValue(city);
    setSuggestions([]);
    setTempFilters((prev) => ({ ...prev, location: city }));
  };

  const handleFocus = () => {
    filterCities(inputValue);
  };

  const handleBlur = () => {
    setTimeout(() => setSuggestions([]), 200);
  };

  return (
    <>
      <label htmlFor="location" className="mb-2 block text-darkGrey">
        Location
      </label>

      <div className="relative mb-10 mr-6">
        <input
          id="location"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder="Kyiv, Ukraine"
          className="relative w-full rounded-[12px] border border-silver bg-darkWhite px-6 py-3 text-base text-black placeholder:text-grey focus:outline-none md:px-12 md:py-[18px]"
        />
        {suggestions.length > 0 && (
          <ul className="border-1 absolute left-0 top-[100%] z-10 flex w-full flex-col items-center justify-center gap-3 overflow-y-auto rounded-xl border bg-white">
            {suggestions.map((city, index) => (
              <li
                key={index}
                className="cursor-pointer px-5 py-3 text-base text-black transition-all active:text-lg"
                onClick={() => handleSelectSuggestion(city)}
              >
                {city}
              </li>
            ))}
          </ul>
        )}
        <span className="absolute left-[20px] top-[19px] hidden opacity-100 md:block">
          <Icon id="map" w={20} h={20} className="fill-black" />
        </span>
      </div>
    </>
  );
};

export default SidebarLocation;
