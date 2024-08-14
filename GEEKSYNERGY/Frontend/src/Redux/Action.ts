const LocalStorageKey = "GEEK_SYNERGY_LS";

// Set Data in localstorage
export const SetLsData = (objData: { [key: string]: any }) => {
  localStorage.setItem(LocalStorageKey, JSON.stringify(objData));
};

// Get Data from localstorage
export const GetLsData = () => {
  const storedData = localStorage.getItem(LocalStorageKey);
  return storedData ? JSON.parse(storedData) : {};
};
