import { useState, useEffect } from "react";
import QuickSearchCard from "./QuickSearchCard";
import axios from "axios";

function QuickSearches() {
  let [foodTypes, setFoodTypes] = useState([]);
  let getFoodTypes = async () => {
    let res = await axios.get("http://localhost:5000/mealtypes/All");
    let mealTypes = res.data.mealtypes;
    setFoodTypes(mealTypes);
  };
  useEffect(() => {
    getFoodTypes();
  }, []);

  return (
    <div className="w-screen px-10 py-10">
      <h1 className="text-3xl font-bold">Quick Searches</h1>
      <div className="w-full h-full mt-6 flex flex-wrap items-center justify-between">
        {foodTypes.map((e, i) => {
          return (
            <QuickSearchCard
              mealtype={e.name}
              key={i}
              image={e.image}
              title={e.name}
              description={e.content}
            />
          );
        })}
      </div>
    </div>
  );
}

export default QuickSearches;
