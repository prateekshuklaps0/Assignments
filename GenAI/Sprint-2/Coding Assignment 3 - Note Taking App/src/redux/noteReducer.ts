// src/redux/notesReducer.js
const initialState = {
  notes: [],
};

const notesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "ADD_NOTE":
      return {
        ...state,
        notes: [...state.notes, action.payload],
      };
    // Add more cases as needed for other actions
    default:
      return state;
  }
};

export default notesReducer;
