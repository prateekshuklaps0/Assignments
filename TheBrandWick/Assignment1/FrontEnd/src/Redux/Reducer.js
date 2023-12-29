import {
  ISLOADING,
  ISERROR,
  SUCCESS,
  INPCHANGE,
  RESETINP,
  TOGGLELOGINCOMPONENT,
} from "./ActionTypes";

const init = {
  isLoading: false,
  isError: false,
  showLogin: false,
  userName: "",
  email: "",
  password: "",
  phone: "",
  emailOrPhone: "",
};

export const Reducer = (state = init, { type, payload, name }) => {
  switch (type) {
    case ISLOADING:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case ISERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case SUCCESS:
      return {
        ...state,
        isLoading: false,
        userName: "",
        email: "",
        password: "",
        phone: "",
        emailOrPhone: "",
        showLogin: !state.showLogin,
      };
    case INPCHANGE:
      return {
        ...state,
        [name]: payload,
      };
    case TOGGLELOGINCOMPONENT:
      return {
        ...state,
        showLogin: !state.showLogin,
      };
    case RESETINP:
      return {
        ...state,
        userName: "",
        email: "",
        password: "",
        phone: "",
        emailOrPhone: "",
      };

    default:
      return state;
  }
};
