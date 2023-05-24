import { createContext, useContext } from "react";
import appStore from "./AppStore/AppStore";

const store = {
  appStore: appStore(),
};

export const StoreContext = createContext(store);

export const useStore = () => {
  return useContext(StoreContext);
};

export default store;
