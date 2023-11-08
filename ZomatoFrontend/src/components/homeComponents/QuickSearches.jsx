import QuickSearchCard from "./QuickSearchCard";

function QuickSearches() {
  return (
    <div className="w-screen px-10 py-10">
      <h1 className="text-3xl font-bold">Quick Searches</h1>
      <div className="w-full h-full mt-6 flex flex-wrap items-center justify-between">
        <QuickSearchCard
          image={
            "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          title={"Order online"}
          description={"Stay home and order to your doorstep"}
        />
        <QuickSearchCard
          image={
            "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          title={"Order online"}
          description={"Stay home and order to your doorstep"}
        />
        <QuickSearchCard
          image={
            "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          title={"Order online"}
          description={"Stay home and order to your doorstep"}
        />
      </div>
    </div>
  );
}

export default QuickSearches;
