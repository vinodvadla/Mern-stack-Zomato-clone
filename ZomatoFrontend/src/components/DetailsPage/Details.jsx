import Corousel from "./Carousel";
import TabsPage from "./TabsPage";
import HomeHeader from "./../homeComponents/HomeHeader";
function Details() {
  return (
    <div className="w-screen h-screen">
      <HomeHeader />
      <Corousel />
      <div className="w-full h-[15vh] flex items-center justify-between px-10 gap-4">
        <h1 className="lg:text-3xl md:text-3xl sm:text-3xl text-md text-black font-semibold">
          The Big Chill Cakery
        </h1>
        <button className="lg:px-3 lg:py-2 md:py-1 md:px-2 p-2 text-sm bg-red-500 rounded font-bold text-white">
          Place order
        </button>
      </div>
      <TabsPage />
    </div>
  );
}

export default Details;
