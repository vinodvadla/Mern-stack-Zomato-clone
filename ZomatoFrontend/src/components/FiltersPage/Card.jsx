import "../styles/Filters.css";
import { Link } from "react-router-dom";
function Card() {
  return (
    <Link to={"/details"} className="w-[100%] h-[230px] rounded">
      <div className="card w-[100%] h-[230px] rounded p-2 shadow-md">
        <div className="w-full h-[65%] rounded flex items-center justify-between px-2">
          <div
            className={`w-[25%] h-[90%] rounded bg-[url(https://images.pexels.com/photos/7966075/pexels-photo-7966075.jpeg?auto=compress&cs=tinysrgb&w=400)] bg-cover`}
          ></div>
          <div className="w-[74%] h-[90%] rounded flex justify-center gap-1 flex-col p-2">
            <h1 className="text-xl font-bold tracking-wide">
              The Big Chill Cakery
            </h1>
            <h2 className="text-sm font-medium">FORT</h2>
            <p className="text-xs">Shop 1 kphb hyderabad ,1st lane</p>
          </div>
        </div>
        <div className="w-full h-[34%] rounded p-3">
          <div className="flex w-[150px] justify-between">
            <h1 className="font-medium text-sm">Cuisines</h1>
            <h1 className="font-medium text-sm">Bakery</h1>
          </div>
          <div className="flex w-[150px] justify-between">
            <h1 className="font-medium text-sm">Cost for two</h1>
            <h1 className="font-medium text-sm">₹700</h1>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card;
