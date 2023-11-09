function Allfilters() {
  return (
    <div className="lg:w-[20%] lg:h-full lg:flex-col md:w-[90%] sm:w-[90%] lg:h-full xs:h-full xs:flex-wrap flex justify-between w-[85%] md:flex rounded shadow-black shadow-sm p-4 md:justify-between">
      <div className=" lg:w-full py-2 gap-2 md:w-[25%]">
        <p className="text-md">Select your Location</p>
        <select className="w-full  px-2 py-1 mt-2 rounded border-2 border-gray-300">
          <option value="Hyderabad">Hyderabad</option>
          <option value="Delhi">Delhi</option>
        </select>
      </div>
      <div className="py-2 gap-2 xs:w-[30%]">
        <p className="text-md font-semibold">Cuisines</p>
        <div className="w-full flex gap-2 items-center">
          <input
            type="checkbox"
            id="ni"
            name="North Indian"
            value="North Indian"
          />
          <label htmlFor="ni">North Indian</label>
        </div>
        <div className="w-full flex gap-2 items-center">
          <input type="checkbox" id="si" name="South Indian" />
          <label htmlFor="ni">South Indian</label>
        </div>
        <div className="w-full flex gap-2 items-center">
          <input type="checkbox" id="chinese" name="Chinese" />
          <label htmlFor="chinese">Chinese</label>
        </div>
        <div className="w-full flex gap-2 items-center">
          <input type="checkbox" id="ff" name="fast food" />
          <label htmlFor="ff">Fast food</label>
        </div>
        <div className="w-full flex gap-2 items-center">
          <input type="checkbox" id="sf" name="Street Food" />
          <label htmlFor="ni">Street Food</label>
        </div>
      </div>
      <div className="py-2 gap-2 xs:w-[30%]">
        <p className="text-md font-semibold">Cost for Two</p>
        <div className="w-full flex gap-2 items-center">
          <input type="radio" name="price" id="l-500" />
          <label htmlFor="l-500">Less than ₹500</label>
        </div>
        <div className="w-full flex gap-2 items-center">
          <input type="radio" name="price" id="f-t" />
          <label htmlFor="f-t">₹500 - ₹1000 </label>
        </div>
        <div className="w-full flex gap-2 items-center">
          <input type="radio" name="price" id="t-tf" />
          <label htmlFor="t-tf">₹1000 - ₹1500</label>
        </div>
        <div className="w-full flex gap-2 items-center">
          <input type="radio" name="price" id="tf-two" />
          <label htmlFor="tf-two">₹1500 - ₹2000</label>
        </div>
        <div className="w-full flex gap-2 items-center">
          <input type="radio" name="price" id="two+" />
          <label htmlFor="two+">₹2000+</label>
        </div>
      </div>
      <div className="py-2 gap-2 xs:w-[30%]">
        <p className="text-md font-semibold">Sort</p>
        <div className="w-full flex gap-2 items-center">
          <input type="radio" name="sort" id="l-h" />
          <label htmlFor="l-h">Low to High</label>
        </div>
        <div className="w-full flex gap-2 items-center">
          <input type="radio" name="sort" id="h-l" />
          <label htmlFor="h-l">High to Low</label>
        </div>
      </div>
    </div>
  );
}

export default Allfilters;
