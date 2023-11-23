import { useEffect, useState } from "react";
import { CiSquarePlus, CiSquareMinus } from "react-icons/ci";
import Corousel from "./Carousel";
import TabsPage from "./TabsPage";
import HomeHeader from "./../homeComponents/HomeHeader";
import { useParams } from "react-router-dom";
import axios from "axios";
import Modal from "react-modal";
import { MdClose, MdCurrencyRupee } from "react-icons/md";
import { useUserContext } from "../../hooks/useUserContext";
import { loadStripe } from "@stripe/stripe-js";
function Details() {
  let { id } = useParams();
  let { user } = useUserContext();
  const [restaurant, setRestaurant] = useState({});
  let [isOpen, setIsopen] = useState(false);
  let [subtotal, setSubtotal] = useState(0);
  let [menu, setMenu] = useState([]);
  let [cart, setCart] = useState([]);

  const makePayment = async () => {
    try {
      let stripe = await loadStripe(
        "pk_test_51OEnaDSEZxjLyGkwMUfe05eM5QdEML4FQA7Gjhxtin3Jr6DboHQIBeqdBrmOMij5j6LzY1N3QMXgILCpiD2jjliu00MjdWMpZj"
      );
      let res = await axios.post("http://localhost:5000/payment", cart, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      const session = res.data;
      let result = stripe.redirectToCheckout({
        sessionId: session.id,
      });
      console.log(result);
      setCart([]);
      alert("Your Order Successfull");
    } catch (error) {
      console.log(error.message);
    }
  };

  const addToCart = async () => {
    if (user.token) {
      let res = await axios.post(
        "http://localhost:5000/cart",
        { cart: cart },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
    }
  };

  let getCart = async () => {
    let res = await axios.get("http://localhost:5000/cart", {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    setCart(res.data.cart.cart);
  };

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
    getRestaurant();
  }, [id]);

  useEffect(() => {
    getCart();
  }, []);

  useEffect(() => {
    if (cart.length !== 0) {
      let total = 0;
      for (let i = 0; i < cart.length; i++) {
        let price = cart[i].price * cart[i].qty;
        total += price;
      }
      setSubtotal(total);
    }
    addToCart();
  }, [cart]);

  return (
    <>
      <div className="w-screen h-screen">
        <HomeHeader />
        <Corousel images={restaurant.thumb} />
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
          cuisines={restaurant.cuisine}
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
                <div key={i} className="w-full h-[20vh] flex justify-between">
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
                    {cart.length !== 0 &&
                    cart.filter((item) => item.name == e.name).length > 0 ? (
                      <>
                        <div className="flex items-center justify-center gap-2 mr-3">
                          <CiSquareMinus
                            size={25}
                            onClick={() => {
                              let i = document.getElementById(e.name);
                              let val = +i.value;
                              if (val > 1) i.value = val - 1;
                              if (val > 1) {
                                let index = cart.findIndex((item) => {
                                  return item.name === e.name;
                                });
                                let req = [...cart];
                                let item = req[index];
                                let item2 = {
                                  ...item,
                                  qty: val - 1,
                                };
                                req[index] = item2;
                                setCart(req);
                              }
                            }}
                          />
                          <input
                            type="text"
                            id={e.name}
                            disabled={true}
                            defaultValue={1}
                            className="w-[30px] text-center h-[25px] border-2 border-black outline-none rounded"
                          />
                          <CiSquarePlus
                            size={25}
                            onClick={() => {
                              let i = document.getElementById(e.name);
                              let val = +i.value;
                              i.value = val + 1;
                              let index = cart.findIndex((item) => {
                                return item.name === e.name;
                              });

                              if (val >= 1) {
                                let req = [...cart];
                                let item = req[index];
                                let item2 = {
                                  ...item,
                                  qty: val + 1,
                                };

                                req[index] = item2;
                                setCart(req);
                              }
                            }}
                          />
                        </div>
                        <button
                          onClick={() => {
                            let filter = cart.filter((ele) => {
                              return ele.name !== e.name;
                            });
                            setCart(filter);
                          }}
                          className="lg:px-3 lg:py-2 md:py-1 md:px-2 p-2 text-sm bg-red-500 rounded font-bold text-white"
                        >
                          Remove
                        </button>
                      </>
                    ) : (
                      <button
                        onClick={() => {
                          setCart([...cart, { ...e, qty: 1 }]);
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
            <button
              onClick={() => {
                if (cart.length !== 0) {
                  makePayment();
                }
              }}
              className="lg:px-3 lg:py-2 md:py-1 md:px-2 active:bg-red-700 p-2 text-sm bg-red-500 rounded font-bold text-white"
            >
              Pay Now
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default Details;
