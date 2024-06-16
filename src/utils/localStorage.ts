export const setToLocalStorage = (key: string, token: string) => {
  if (!key || window === undefined) {
    return "";
  } else {
    return localStorage.setItem(key, token);
  }
};

export const getFromLocalStorage = (key: string) => {
  if (!key || window === undefined) {
    return "";
  }
  return localStorage.getItem(key);
};

export const removeUserFromLocalStorage = (key: string) => {
  if (!key || window === undefined) {
    return "";
  }
  return localStorage.removeItem(key);
};
