const init = {
  isLoading: false,
  isError: false,
  currentType: "Shayari",
  contentTypes: ["Shayari", "Joke", "Story", "Quote"],
  context: "",
  result: "",
};

const reducer = (state = init, action: any) => {
  const { type, payload } = action;
  switch (type) {
    case "LOADING": {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case "ERROR": {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case "SUCCESS": {
      return {
        ...state,
        isLoading: false,
        result: payload,
      };
    }
    case "CHANGECONTENT": {
      return {
        ...state,
        contentType: payload,
      };
    }
    case "CHANGECONTEXT": {
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
