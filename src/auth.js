import api from "./services/api";

export const isAuthenticated = () => {
  const token = localStorage.getItem('token');

  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`;

    return true;
  } else {
    return false;
  }
}
