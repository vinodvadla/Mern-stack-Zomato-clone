import { CityContext } from "../context/cityContext";
import { useContext } from "react";

export const useCityContext = () => {
  let context = useContext(CityContext);
  return context;
};
