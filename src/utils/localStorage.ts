const getLocalStorageItem = (key: string) => {
  let value;
  if (typeof window !== "undefined") {
    value = localStorage.getItem(key);
  }
  return value;
};

const setLocalStorageItem = (key: string, value: any) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(key, value);
  }
};
const removeLocalStorageItem = () => {
  if (typeof window !== "undefined") {
    localStorage.clear();
  }
};

export { setLocalStorageItem, getLocalStorageItem, removeLocalStorageItem };
