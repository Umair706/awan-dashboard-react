const TOKEN_KEY = 'jwtToken';

const login = (token) => {
  localStorage.setItem(TOKEN_KEY, token);
};

const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};

const isLoggedIn = () => {
  const token = localStorage.getItem(TOKEN_KEY);
  return token !== null;
};

export { login, logout, isLoggedIn };
