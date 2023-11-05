// src/redux/actions.js
export const addNote = (note: any) => {
  return { type: "ADD_NOTE", payload: note };
};
// Add more action creators as needed
