import {
  LOADING,
  ERROR,
  SUCCESS,
  CHANGECURRENTTYPE,
  CHANGECONTEXT,
} from "./actionTypes";

export const init = {
  isLoading: false,
  isError: false,
  currentType: "Shayari",
  contentTypes: ["Shayari", "Joke", "Story", "Quote"],
  context: "",
  result: "",
};

const reducer = (state = init, { type, payload }: any) => {
  switch (type) {
    case LOADING: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case SUCCESS: {
      return {
        ...state,
        isLoading: false,
        result: payload,
      };
    }
    case CHANGECURRENTTYPE: {
      return {
        ...state,
        currentType: payload,
      };
    }
    case CHANGECONTEXT: {
      return {
        ...state,
        context: payload,
      };
    }
    default: {
      return init;
    }
  }
};

export default reducer;
