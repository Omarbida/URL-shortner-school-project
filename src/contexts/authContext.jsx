import { createContext, useCallback, useContext, useState } from "react";

export const AuthContext = createContext({
  user: null,
  login: () => {},
  signup: () => {},
  logout: () => {},
});

export const AuthProvider = (props) => {
  const [user, setUser] = useState(null);

  const login = useCallback((email, password) => {
    setUser({
      name: "omar",
      lastName: "bida",
      email,
      password,
      profileimg: "avatar1.png",
    });
  }, []);
  const signup = useCallback((name, lastName, email, password) => {
    setUser({
      name,
      lastName,
      email,
      password,
      profileimg: "avatar1.png",
    });
  }, []);
  const logout = useCallback(() => {
    setUser(null);
  }, []);
  const guest = useCallback(() => {
    setUser({
      name: "Guest",
      lastName: Math.floor(Math.random() * 1000).toString(),
      email: "",
      password: "",
      profileimg: "avatar1.png",
    });
  });
  return (
    <AuthContext.Provider value={{ user, login, signup, logout, guest }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export const AuthConsumer = AuthContext.Consumer;
