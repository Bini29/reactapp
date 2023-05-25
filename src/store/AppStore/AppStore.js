import { makeAutoObservable } from "mobx";

const appStore = () => {
  return makeAutoObservable({
    auth: localStorage.getItem("auth") ? true : false,

    setAuth() {
      this.auth = !this.auth;
    },
  });
};

export default appStore;
