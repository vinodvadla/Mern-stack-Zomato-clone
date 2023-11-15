import { createContext, useReducer, useEffect } from "react";
export let UserContext = createContext();

let reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("user", JSON.stringify(action.payload));
      return action.payload;
    case "LOGOUT":
      localStorage.removeItem("user");
      return null;
    default:
      return state;
  }
};

export const UserContextProvider = ({ children }) => {
  let [user, UserDispatch] = useReducer(reducer, null);
  console.log(user);

  useEffect(() => {
    let user = localStorage.getItem("user");
    if (user) {
      UserDispatch({ type: "LOGIN", payload: JSON.parse(user) });
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, UserDispatch }}>
      {children}
    </UserContext.Provider>
  );
};
