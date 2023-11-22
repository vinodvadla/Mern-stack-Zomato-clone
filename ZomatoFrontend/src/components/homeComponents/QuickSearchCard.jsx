import "../styles/wallpaper.css";
import { useNavigate } from "react-router-dom";
import { useCityContext } from "./../../hooks/useCityContext";

function QuickSearchCard({ image, title, description, mealtype }) {
  let navigate = useNavigate();
  let { city } = useCityContext();
  return (
    <div
      onClick={() => {
        if (!city) {
          return alert("Please Select City to Continue");
        } else navigate(`/filters/${city}`);
      }}
      className="card lg:w-[32%] h-[280px] sm:w-[80%] md:w-[48%] w-[95%] mb-5 rounded-xl overflow-hidden hover:scale-105 duration-200 transition-all ease-in-out shadow-sm hover:shadow-black  flex-grow-0 flex-shrink-0"
    >
      <div className={`w-full h-[68%] bg-cover bg-no-repeat`}>
        <img src={image} alt="image" className="w-full h-full" />
      </div>
      <div className="w-full h-[32%] p-4">
        <h1 className="lg:text-xl md:text-xl tracking-wide font-medium text-md">
          {title}
        </h1>
        <p className="md:text-sm lg:text-sm text-xs">{description}</p>
      </div>
    </div>
  );
}

export default QuickSearchCard;
