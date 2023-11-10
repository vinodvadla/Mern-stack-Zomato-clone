import Corousel from "./Carousel";
import TabsPage from "./TabsPage";
import HomeHeader from "./../homeComponents/HomeHeader";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
function Details() {
  let { id } = useParams();
  const [restaurant, setRestaurant] = useState({});
  let getRestaurant = async () => {
    let res = await axios.get(`http://localhost:5000/restaurants/id/${id}`);
    setRestaurant(res.data.restaurant);
    console.log(res.data.restaurant);
  };
  useEffect(() => {
    getRestaurant();
  }, [id]);
  return (
    <div className="w-screen h-screen">
      <HomeHeader />
      <Corousel />
      <div className="w-full h-[15vh] flex items-center justify-between px-10 gap-4">
        <h1 className="lg:text-3xl md:text-3xl sm:text-3xl text-md text-black font-semibold">
          {restaurant.name}
        </h1>
        <button className="lg:px-3 lg:py-2 md:py-1 md:px-2 p-2 text-sm bg-red-500 rounded font-bold text-white">
          Place order
        </button>
      </div>
      <TabsPage
        name={restaurant.name}
        address={restaurant.locality}
        mobile={restaurant.contact_number}
        city={restaurant.city}
      />
    </div>
  );
}

export default Details;
