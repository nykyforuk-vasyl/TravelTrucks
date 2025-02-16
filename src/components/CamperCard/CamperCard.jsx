import Icon from "../../ui/Icon";
import VehicleFeatures from "../VehicleFeatures/VehicleFeatures";
import CamperGallery from "../../components/CamperGallery/CamperGallery";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../../redux/favorites/slice";
import { selectFavorites } from "../../redux/favorites/selectors";

const CamperCard = ({ camper }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites) || [];

  const {
    id,
    name,
    gallery,
    price,
    rating,
    reviews,
    location,
    description,
    AC,
    gas,
    kitchen,
    TV,
    bathroom,
    water,
    radio,
    refrigerator,
    microwave,
  } = camper;

  const isFavorited = favorites.includes(id);

  const handleFavoriteToggle = () => {
    if (isFavorited) {
      dispatch(removeFavorite(id));
    } else {
      dispatch(addFavorite(id));
    }
  };

  return (
    <li
      key={id}
      className="flex flex-wrap gap-6 rounded-[20px] border border-lightGrey p-6 md:w-[900px] md:flex-nowrap"
    >
      <CamperGallery images={gallery} isPreview={true} />

      <div className="mb-2 w-full flex-wrap md:flex-nowrap">
        <div className="mb-4 flex flex-wrap items-start gap-3 md:mb-0 md:justify-between md:gap-0">
          <h3 className="text-xl text-black">{name}</h3>

          <div className="flex items-center gap-24 md:gap-3">
            <p className="text-xl text-black md:ml-4">
              &euro;{price.toFixed(2)}
            </p>
            <button type="button" onClick={handleFavoriteToggle}>
              <Icon
                id="heart"
                w={26}
                h={24}
                className={`transition-colors ${isFavorited ? "fill-red" : "fill-black"}`}
              />
            </button>
          </div>
        </div>

        <div className="mb-6 flex flex-wrap items-center">
          <Icon id="star" w={18} h={18} className="mr-1 fill-yellow" />
          <p className="mr-4 text-base font-normal underline">
            {rating}({reviews?.length || 0}Reviews)
          </p>
          <Icon id="map" w={16} h={15} className="mr-1 fill-black" />
          <p className="mr-4 text-base font-normal">{location}</p>
        </div>

        <p className="mb-6 w-[260px] truncate text-base font-normal text-darkGrey md:w-[525px]">
          {description}
        </p>
        <ul className="mb-12 md:mb-0">
          <VehicleFeatures
            features={[
              { text: "AC", icon: "wind", value: AC },
              { text: "Gas", icon: "hugeicons_gas-stove", value: gas },
              { text: "Kitchen", icon: "cup-hot", value: kitchen },
              { text: "TV", icon: "tv", value: TV },
              { text: "Bathroom", icon: "ph_shower", value: bathroom },
              { text: "Water", icon: "ion_water-outline", value: water },
              { text: "Radio", icon: "ui-radios", value: radio },
              {
                text: "Refrigerator",
                icon: "solar_fridge-outline",
                value: refrigerator,
              },
              { text: "Microwave", icon: "lucide_microwave", value: microwave },
            ]}
          />
        </ul>

        <Link
          to={`/catalog/${id}`}
          className="rounded-full bg-red px-8 py-3 text-sm text-white transition-colors hover:bg-darkRed active:bg-darkRed md:px-10 md:py-4 md:text-base"
        >
          Show more
        </Link>
      </div>
    </li>
  );
};

export default CamperCard;
