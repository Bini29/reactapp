import { makeAutoObservable } from "mobx";

const appStore = () => {
  return makeAutoObservable({
    auth: false,

    setAuth() {
      this.auth = !this.auth;
    },
  });
};

export default appStore;
