import "../styles/wallpaper.css";

function QuickSearchCard({ image, title, description }) {
  return (
    <div className="card lg:w-[32%] h-[240px] md:w-[45%] w-[70%] mb-5 rounded-xl overflow-hidden hover:scale-105 duration-200 transition-all ease-in-out flex-grow-0 flex-shrink-0">
      <div
        className={`w-full h-[65%] bg-[url(${image})] bg-cover bg-no-repeat`}
      ></div>
      <div className="w-full h-[35%] p-4">
        <h1 className="text-xl tracking-wide font-medium">{title}</h1>
        <p className="text-sm tracking-wide">{description}</p>
      </div>
    </div>
  );
}

export default QuickSearchCard;
