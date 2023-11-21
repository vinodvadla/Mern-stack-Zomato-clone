import React, { useState, useEffect, useCallback, useReducer } from "react";
import Allfilters from "./Allfilters";
import FoodCards from "./FoodCards";
import HomeHeader from "./../homeComponents/HomeHeader";
import { useParams } from "react-router-dom";
import axios from "axios";
function Filters() {
  let { city } = useParams();
  let [rests, setRests] = useState([]);
  let [chinese, setChinese] = useState(false);
  let [south, setSouth] = useState(true);
  let [north, setNorth] = useState(false);
  let [fast, setFast] = useState(false);
  let [street, setStreet] = useState(false);
  let [locations, setLocations] = useState([]);
  let [cost, setCost] = useState(500);
  let [loc, setLoc] = useState(null);
  let [sort, setSort] = useState(0);

  const changeCost = () => {
    setCost(500);
  };
  const changeT = () => {
    setCost(1000);
  };
  const changeTF = () => {
    setCost(1500);
  };
  const changetwo = () => {
    setCost(2000);
  };
  const changetwoplus = () => {
    setCost(2500);
  };
  const getLocations = async () => {
    let res = await axios.get("http://localhost:5000/locations/All");

    let filter = res.data.locations.filter((e) => {
      return e.city == city;
    });
    setLocations(filter);
  };

  let getdata = useCallback(async () => {
    let res = await axios.get("http://localhost:5000/restaurants/All");
    let restaurants = res.data.restaurants;
    let temp = restaurants.filter((e) => {
      if (e.city == city) {
        return e;
      }
    });
    restaurants = temp;
    if (loc && loc != "Select") {
      let temp = restaurants.filter((e) => {
        if (e.locality.toLowerCase() == loc.toLowerCase()) {
          return e;
        }
      });
      restaurants = temp;
    }
    let fil = restaurants.filter((e) => {
      let temp = e.cuisine.filter((e) => {
        if (chinese && e.name.toLowerCase() == "Chinese".toLowerCase()) {
          return e;
        }
        if (north && e.name.toLowerCase() == "North Indian".toLowerCase()) {
          return e;
        }
        if (south && e.name.toLowerCase() == "South Indian".toLowerCase()) {
          return e;
        }
        if (street && e.name.toLowerCase() == "Street Food".toLowerCase()) {
          return e;
        }
        if (fast && e.name.toLowerCase() == "Fast Food".toLowerCase()) {
          return e;
        }
      });
      if (temp.length > 0) {
        return e;
      }
    });
    let filtered = fil.filter((e) => {
      if (e.min_price > cost - 500 && e.min_price <= cost) {
        return e;
      }
    });

    if (sort == 1) {
      filtered = filtered.sort((a, b) => {
        return a.min_price - b.min_price;
      });
    }

    if (sort == -1) {
      filtered = filtered.sort((a, b) => {
        return b.min_price - a.min_price;
      });
    }
    setRests(filtered);
  }, [chinese, south, north, fast, street, cost, loc, sort]);

  useEffect(() => {
    getLocations();
    getdata();
  }, [cost, chinese, south, north, fast, street, loc, cost, sort]);

  let changeSouth = () => {
    setSouth((prev) => !prev);
  };
  let changeNorth = () => {
    setNorth((prev) => !prev);
  };
  let changeChinese = () => {
    setChinese((prev) => !prev);
  };
  let changeFast = () => {
    setFast((prev) => !prev);
  };
  let changeStreet = () => {
    setStreet((prev) => !prev);
  };
  let changeLocation = (e) => {
    setLoc(e.target.value);
  };

  let lowtohigh = () => {
    setSort(1);
  };
  let hightolow = () => {
    setSort(-1);
  };
  return (
    <div>
      <HomeHeader />
      <div className="px-10 py-4">
        <h1 className="text-2xl font-bold py-3">Breakfast placees in Mumbai</h1>
        <div className="w-screen h-full flex lg:flex-row md:w-screen gap-10 flex-col">
          <Allfilters
            changeChinese={changeChinese}
            changeFast={changeFast}
            changeNorth={changeNorth}
            changeSouth={changeSouth}
            changeStreet={changeStreet}
            changeCost={changeCost}
            locations={locations}
            setLocation={changeLocation}
            changeT={changeT}
            changeTF={changeTF}
            changeTwo={changetwo}
            changeTwoplus={changetwoplus}
            sortHigh={hightolow}
            sortLow={lowtohigh}
          />
          <FoodCards restaurants={rests} />
        </div>
      </div>
    </div>
  );
}

export default Filters;
