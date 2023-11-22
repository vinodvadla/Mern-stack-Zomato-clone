import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Corousel({ images }) {
  return (
    <div className="w-screen">
      <Carousel
        axis="horizontal"
        showArrows={true}
        infiniteLoop={true}
        dynamicHeight={true}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        autoPlay={true}
        stopOnHover={true}
        swipeable={true}
      >
        {images &&
          images.map((e, i) => {
            return (
              <div key={i}>
                <img className="w-[90vh] h-[70vh]" src={e} />
              </div>
            );
          })}
      </Carousel>
    </div>
  );
}

export default Corousel;
