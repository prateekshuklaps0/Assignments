import { ISLOADING, ISERROR, SUCCESS, INPCHANGE } from "./ActionTypes";

const init = {
  isLoading: false,
  isError: false,
  msg: "",
  userNameInp: "",
  emailInp: "",
  passInp: "",
};

export const Reducer = (state = init, { type, payload, name }) => {
  switch (type) {
    case ISLOADING:
      return {
        ...state,
      };
    case ISERROR:
      return {
        ...state,
      };
    case SUCCESS:
      return {
        ...state,
      };
    case INPCHANGE:
      return {
        ...state,
        [name]: payload,
      };

    default:
      return state;
  }
};
