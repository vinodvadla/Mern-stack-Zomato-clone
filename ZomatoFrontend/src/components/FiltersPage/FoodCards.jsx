import { useState, useEffect } from "react";
import Pagination from "../pagination/Pagination";
import Card from "./Card";
import { Triangle } from "react-loader-spinner";
import { Link } from "react-router-dom";

function FoodCards({ restaurants }) {
  let [page, setPage] = useState(1);
  let [data, setData] = useState([]);
  let [pages, setPages] = useState([]);

  let incrementPage = () => {
    if (page < pages.length) {
      setPage(page + 1);
    }
  };
  
  let decrementPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  let customPage = (page) => {
    setPage(page);
  };


  useEffect(() => {
    let items = restaurants.slice((page - 1) * 2, page * 2);
    setData(items);
    let data = [];
    let all = Math.ceil(restaurants.length / 2);
    for (let i = 1; i <= all; i++) {
      data.push(i);
    }
    setPages(data);
  }, [restaurants, page]);

  return (
    <div className="lg:w-[70%] md:w-[90%] w-[90%] flex flex-wrap gap-3">
      {!data ? (
        <div className="w-full h-[85%] flex items-center justify-center">
          <Triangle
            height="100"
            width="100"
            color="#FF5733"
            ariaLabel="triangle-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        </div>
      ) : (
        <div className="w-full h-[85%] flex flex-col gap-2">
          {data.map((e, i) => {
            return (
              <Link key={i} to={`/details/${e._id}`}>
                <Card
                  image={e.image}
                  cuisine={e.cuisine}
                  title={e.name}
                  cost={e.min_price}
                  location={e.locality}
                  key={i}
                />
              </Link>
            );
          })}
        </div>
      )}

      {restaurants.length > 2 && (
        <Pagination
          pages={pages}
          page={page}
          increment={incrementPage}
          decrement={decrementPage}
          customIncr={customPage}
        />
      )}
    </div>
  );
}

export default FoodCards;
