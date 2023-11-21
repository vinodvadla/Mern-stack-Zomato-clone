import "../styles/Filters.css";
import { Link } from "react-router-dom";
function Card({ title, location, cuisine, image, cost }) {
  return (
    <div className="card w-[100%] h-[230px] rounded p-2 shadow-md">
      <div className="w-full h-[65%] rounded flex items-center justify-between px-2">
        <div className={`w-[25%] h-[90%] rounded overflow-hidden`}>
          <img src={image} alt="restaurant" className="w-full h-full" />
        </div>
        <div className="w-[74%] h-[90%] rounded flex justify-center gap-1 flex-col p-2">
          <h1 className="text-xl font-bold tracking-wide">{title}</h1>
          <h2 className="text-sm font-medium"></h2>
          <p className="text-xs">{location}</p>
        </div>
      </div>
      <div className="w-full h-[34%] rounded p-3">
        <div className="flex w-[150px] justify-between">
          <h1 className="font-medium text-sm">Cuisines</h1>
          <div className="font-medium text-sm flex items-center justify-center">
            {cuisine.map((e) => {
              return e.name;
            })}
          </div>
        </div>
        <div className="flex w-[150px] justify-between">
          <h1 className="font-medium text-sm">Cost for two</h1>
          <h1 className="font-medium text-sm">₹{cost}</h1>
        </div>
      </div>
    </div>
  );
}

export default Card;
