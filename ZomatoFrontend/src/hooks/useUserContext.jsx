import { UserContext } from "../context/UserContext";
import { useContext } from "react";

export const useUserContext = () => {
  let context = useContext(UserContext);
  return context;
};
