import { createContext, useReducer } from "react";

export let CityContext = createContext();
let reduser = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return action.payload;
    default:
      return state;
  }
};

export const CityContextProvider = ({ children }) => {
  let [city, cityDispatch] = useReducer(reduser, null);
  console.log(city);

  return (
    <CityContext.Provider value={{ city, cityDispatch }}>
      {children}
    </CityContext.Provider>
  );
};
