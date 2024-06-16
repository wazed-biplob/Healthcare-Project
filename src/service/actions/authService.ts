import { authKey } from "@/constants/constants";
import { decodedToken } from "@/utils/jwt";
import {
  getFromLocalStorage,
  removeUserFromLocalStorage,
  setToLocalStorage,
} from "@/utils/localStorage";

export const storeUserInfo = ({ accessToken }: { accessToken: string }) => {
  setToLocalStorage(authKey, accessToken);
};

export const getUserInfo = () => {
  const authToken = getFromLocalStorage(authKey);
  if (authToken) {
    const decodedData: any = decodedToken(authToken);
    return { ...decodedData, role: decodedData?.role?.toLowerCase() };
  }
};

export const userIsLoggedIn = () => {
  const authToken = getFromLocalStorage(authKey);
  if (authToken) {
    return !!authToken;
  }
};

export const removeUser = () => {
  return removeUserFromLocalStorage(authKey);
};
