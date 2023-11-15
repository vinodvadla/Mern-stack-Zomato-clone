import "../styles/wallpaper.css";
import { useNavigate } from "react-router-dom";

function QuickSearchCard({ image, title, description, mealtype }) {
  let navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate(`/filters`);
      }}
      className="card lg:w-[32%] h-[280px] sm:w-[80%] md:w-[48%] w-[95%] mb-5 rounded-xl overflow-hidden hover:scale-105 duration-200 transition-all ease-in-out shadow-sm hover:shadow-black  flex-grow-0 flex-shrink-0"
    >
      <div
        className={`w-full h-[68%] bg-cover bg-no-repeat`}
        style={{ backgroundImage: `url(${image})` }}
      ></div>
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
