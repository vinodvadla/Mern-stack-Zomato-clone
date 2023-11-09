import Pagination from "../pagination/Pagination";
import Card from "./Card";

function FoodCards() {
  return (
    <div className="lg:w-[70%] md:w-[90%] w-[90%] flex flex-wrap">
      <Card />
      <Card />
      <Pagination />
    </div>
  );
}

export default FoodCards;
