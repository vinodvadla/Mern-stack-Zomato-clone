import { GrLocation } from "react-icons/gr";
import { LuSearch } from "react-icons/lu";
import { useState, useEffect } from "react";
import axios from "axios";
import SearchbarCard from "./SearchbarCard";
import { Link } from "react-router-dom";

function SearchBar() {
  const [locations, setLocations] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [city, setCity] = useState("");
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [viewCards, setViewCards] = useState(false);
  const data2 = [
    {
      _id: "6523b19eb1557c93c7727e6f",
      name: "KFC",
      city: "Pune",
      location_id: 1,
      city_id: 1,
      locality: "Puniri",
      thumb: [
        "Assets/breakfast.jpg",
        "Assets/dinner.png",
        "Assets/drinks.png",
        "Assets/dinner.png",
      ],
      aggregate_rating: 4.5,
      rating_text: "Excellent",
      min_price: 333,
      contact_number: 919453524651,
      cuisine: [
        {
          id: 2,
          name: "South Indian",
        },
        {
          id: 4,
          name: "Fast Food",
        },
      ],
      image: "Assets/breakfast.jpg",
      mealtype_id: 1,
    },
    {
      _id: "6523b19eb1557c93c7727e70",
      name: "Burger King",
      city: "Pune",
      location_id: 1,
      city_id: 1,
      locality: "Shalimar Bagh",
      thumb: [
        "Assets/breakfast.jpg",
        "Assets/dinner.png",
        "Assets/drinks.png",
        "Assets/dinner.png",
      ],
      aggregate_rating: 4.5,
      rating_text: "Excellent",
      min_price: 133,
      contact_number: 919453524651,
      cuisine: [
        {
          id: 2,
          name: "South Indian",
        },
        {
          id: 4,
          name: "Fast Food",
        },
      ],
      image: "Assets/breakfast.jpg",
      mealtype_id: 1,
    },
    {
      _id: "6523b19eb1557c93c7727e71",
      name: "Dhaba Pune",
      city: "Pune",
      location_id: 5,
      city_id: 1,
      locality: "Pune Central",
      thumb: [
        "Assets/breakfast.jpg",
        "Assets/dinner.png",
        "Assets/drinks.png",
        "Assets/dinner.png",
      ],
      aggregate_rating: 3.5,
      rating_text: "Excellent",
      min_price: 599,
      contact_number: 919453524651,
      cuisine: [
        {
          id: 2,
          name: "South Indian",
        },
        {
          id: 4,
          name: "Fast Food",
        },
      ],
      image: "Assets/breakfast.jpg",
      mealtype_id: 2,
    },
  ];

  // Gettind locations function
  const getLocations = async () => {
    let res = await axios.get("http://localhost:5000/locations/All");
    let cit = [];
    res.data.locations.forEach((e) => {
      cit.push(e.city);
    });
    let cities = Array.from(new Set(cit));
    setLocations(cities);
  };

  // Getting restaurants function
  let getRestaurants = async () => {
    let res = await axios.get(`http://localhost:5000/restaurants/All`);
    let data = [...res.data.restaurants, ...data2];
    let filtered = data.filter((e) => {
      return e.city.toLowerCase() == city.toLowerCase();
    });
    setRestaurants(filtered);
    setData(filtered);
  };

  // ONkeyup search event
  const keyUpHandler = () => {
    if (search === "") {
      setViewCards(false);
    }
    if (search !== "") {
      setViewCards(true);
      let filter = restaurants.filter((e) => {
        return e.name.toLowerCase().includes(search.toLowerCase());
      });
      setData(filter);
    }
  };

  // Input change handler
  const changeHandler = (e) => {
    setSearch(e.target.value);
  };
  // Effect taking place
  useEffect(() => {
    getLocations();
    getRestaurants();
  }, [city]);
  return (
    <>
      <div className="sm:w-[90%] lg:w-[68%] md:w-[90%] w-[90%] h-14 bg-white rounded-lg flex">
        <div className="w-[250px] h-full flex items-center justify-center px-4">
          <GrLocation size={25} />
          <select
            className="w-full px-8 outline-none border-r-2 border-gray-300"
            onChange={(e) => {
              setCity(e.target.value);
            }}
          >
            <option>Select</option>
            {locations.map((e, i) => {
              return (
                <option key={i} value={e}>
                  {e}
                </option>
              );
            })}
          </select>
        </div>
        <div className="md:w-[70%] lg:w-[70%] sm:[50%] flex items-center judtify-center ">
          <LuSearch size={25} className="text-gray-400" />
          <input
            type="text"
            className="w-full outline-none text-base px-4 py-2 placeholder:text-base"
            placeholder="Search for a restaurant,cuisine or a dish"
            value={search}
            onChange={changeHandler}
            onKeyUp={keyUpHandler}
          />
        </div>
      </div>
      <div
        className={`${
          viewCards === true ? "flex " : "hidden"
        } w-[300px] h-[70px] duration-300 ease-in-out bg-white rounded mt-[-15px] gap-1 overflow-y-scroll scrollbar-none overflow-x-hidden p-2 flex flex-wrap items-center justify-center border-1 shadow-md shadow-black border-black`}
        onClick={() => {
          setViewCards(true);
        }}
      >
        {search !== ""
          ? data.map((e, i) => {
              return (
                <Link className="w-full h-full" to="/details">
                  <SearchbarCard
                    key={i}
                    name={e.name}
                    address={e.locality}
                    image={e.image}
                  />
                </Link>
              );
            })
          : restaurants.map((e, i) => {
              return (
                <Link className="w-full h-full" to="/details">
                  <SearchbarCard
                    key={i}
                    name={e.name}
                    address={e.locality}
                    image={e.image}
                  />
                </Link>
              );
            })}
      </div>
    </>
  );
}

export default SearchBar;
