import React, { useContext, useReducer } from "react";
import reducer from "../Reducers/UserReducer";

const userContext = React.createContext();

const initialState = {
  user: false,
  id: null,
  name: null,
};

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <userContext.Provider value={{}}>{children}</userContext.Provider>;
};

export const useUserContext = () => {
  return useContext(userContext);
};
