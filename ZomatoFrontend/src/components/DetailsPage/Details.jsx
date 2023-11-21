import Corousel from "./Carousel";
import TabsPage from "./TabsPage";
import HomeHeader from "./../homeComponents/HomeHeader";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Modal from "react-modal";
import { MdClose, MdCurrencyRupee } from "react-icons/md";
function Details() {
  let { id } = useParams();
  const [restaurant, setRestaurant] = useState({});
  let [isOpen, setIsopen] = useState(false);
  let [subtotal, setSubtotal] = useState(null);
  let [menu, setMenu] = useState([]);
  let [cart, setCart] = useState([]);

  let openMenu = () => {
    setIsopen(true);
  };
  let closeMenu = () => {
    setIsopen(false);
  };

  let getRestaurant = async () => {
    let res = await axios.get(`http://localhost:5000/restaurants/id/${id}`);
    setMenu(res.data.menu.menu);
    setRestaurant(res.data.restaurant);
  };

  useEffect(() => {
    if (cart.length !== 0) {
      let total = 0;
      for (let i = 0; i < cart.length; i++) {
        let price = cart[i].price;
        total += price;
      }
      setSubtotal(total);
    }
  }, [cart]);
  useEffect(() => {
    getRestaurant();
  }, [id]);
  return (
    <>
      <div className="w-screen h-screen">
        <HomeHeader />
        <Corousel />
        <div className="w-full h-[15vh] flex items-center justify-between px-10 gap-4">
          <h1 className="lg:text-3xl md:text-3xl sm:text-3xl text-md text-black font-semibold">
            {restaurant.name}
          </h1>
          <button
            onClick={openMenu}
            className="lg:px-3 lg:py-2 md:py-1 md:px-2 p-2 text-sm bg-red-500 rounded font-bold text-white"
          >
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
      <Modal
        isOpen={isOpen}
        onRequestClose={closeMenu}
        className={
          "z-50 lg:w-[60%] w-[80%] h-[100vh] m-auto bg-white relative rounded overflow-hidden"
        }
      >
        <div className="w-full h-full bg-white absolute z-10 flex items-center justify-center flex-col">
          <MdClose
            size={25}
            className="absolute top-4 right-4 cursor-pointer"
            onClick={closeMenu}
          />
          <div className="w-full h-[20vh] p-4">
            <h1 className="text-2xl font-bold">Menu</h1>
            <h1 className="text-2xl font-semibold">{restaurant.name}</h1>
          </div>
          <div className="w-full h-[70vh] flex items-center justify-center overflow-scroll flex-wrap gap-4 scrollbar-none p-4">
            {menu.map((e, i) => {
              return (
                <div className="w-full h-[20vh] flex justify-between">
                  <div className="w-[70%] h-full">
                    <h1
                      className={
                        "text-sm font-semibold" + e.food_type == "Veg"
                          ? "text-green-500"
                          : "text-red-500"
                      }
                    >
                      {e.food_type}
                    </h1>
                    <h1 className="font-semibold">{e.name}</h1>
                    <h1 className="font-semibold">₹{e.price}</h1>
                    <p className="text-xs font-semibold">{e.description}</p>
                  </div>
                  <div className="w-[30%] h-full flex items-center justify-center">
                    {cart.length !== 0 && cart.includes(e) ? (
                      <button className="lg:px-3 lg:py-2 md:py-1 md:px-2 p-2 text-sm bg-red-500 rounded font-bold text-white">
                        Remove
                      </button>
                    ) : (
                      <button
                        onClick={() => {
                          setCart([...cart, e]);
                        }}
                        className="lg:px-3 lg:py-2 md:py-1 md:px-2 p-2 text-sm bg-green-700 rounded font-bold text-white"
                      >
                        Add
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="w-full h-[20vh] flex justify-between items-center p-4 border-t-2 border-slate-500">
            <div className="flex items-center justify-center gap-2">
              <h1 className="text-xl font-bold">Subtotal</h1>
              <MdCurrencyRupee size={20} />
              <h1 className="text-xl font-bold">{subtotal ? subtotal : 0}</h1>
            </div>

            <button className="lg:px-3 lg:py-2 md:py-1 md:px-2 p-2 text-sm bg-red-500 rounded font-bold text-white">
              Pay Now
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default Details;
