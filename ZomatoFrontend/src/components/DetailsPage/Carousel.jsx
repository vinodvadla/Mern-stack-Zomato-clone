import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Corousel() {
  return (
    <div className="w-screen">
      <Carousel
        axis="horizontal"
        showArrows={true}
        infiniteLoop={true}
        dynamicHeight={true}
        showStatus={false}
        showIndicators={true}
        showThumbs={false}
        autoPlay={true}
        stopOnHover={true}
        swipeable={true}
      >
        <div>
          <img
            className="w-[90vh] h-[70vh]"
            src="https://images.pexels.com/photos/2872747/pexels-photo-2872747.jpeg?auto=compress&cs=tinysrgb&w=400"
          />
        </div>
        <div>
          <img
            className="w-[90vh] h-[70vh]"
            src="https://images.pexels.com/photos/5722999/pexels-photo-5722999.jpeg?auto=compress&cs=tinysrgb&w=400"
          />
        </div>
        <div>
          <img
            className="w-[90vh] h-[70vh]"
            src="https://images.pexels.com/photos/6149018/pexels-photo-6149018.jpeg?auto=compress&cs=tinysrgb&w=400"
          />
        </div>
        <div>
          <img
            className="w-[90vh] h-[70vh]"
            src="https://images.pexels.com/photos/5722999/pexels-photo-5722999.jpeg?auto=compress&cs=tinysrgb&w=400"
          />
        </div>
      </Carousel>
    </div>
  );
}

export default Corousel;
