import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const CamperGallery = ({ images, isPreview = false }) => {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) {
    return null;
  }

  const slides = images.map((img) => ({
    src: img.original,
    thumbnail: img.thumb,
  }));

  return (
    <>
      {isPreview ? (
        <img
          src={slides[0]?.thumbnail || "/default-image.jpg"}
          alt="Camper preview"
          className="h-[320px] w-[292px] rounded-[10px] object-cover transition-transform duration-300 hover:scale-105 active:transition-all md:w-[292px]"
          onClick={() => {
            setCurrentIndex();
            setOpen(true);
          }}
        />
      ) : (
        <div className="mb-7 flex w-[100%] flex-wrap justify-center gap-12 rounded-[10px] object-cover md:justify-start">
          {slides.map((slide, index) => (
            <img
              key={index}
              src={slide.thumbnail}
              alt={`Camper image ${index + 1}`}
              className="h-[312px] w-[292px] cursor-pointer rounded-[10px] object-cover transition-transform duration-300 hover:scale-105 active:transition-all"
              onClick={() => {
                setCurrentIndex(index);
                setOpen(true);
              }}
            />
          ))}
        </div>
      )}

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={currentIndex}
        slides={slides}
      />
    </>
  );
};

export default CamperGallery;
