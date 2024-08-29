import { createContext, useEffect, useState } from "react";
import { UserDTO } from "../Dto/UserDTO";
import { ContextProvider } from "./WeaponsContext";
import Cookies from "universal-cookie";
import { getUser } from "../services/AuthService";

const cookies = new Cookies();

export const AuthContext = createContext<{
  user: UserDTO | null;
  setUser: React.Dispatch<React.SetStateAction<UserDTO | null>>;
  fetchUser: (token: string) => void;
} | null>(null);

export const AuthProvider = ({ children }: ContextProvider) => {
  const [user, setUser] = useState<UserDTO | null>(null);

  const loggedUserToken = cookies.get("auth-token");

  function fetchUser(token: string) {
    if (!token) return;

    getUser(token)
      .then((res) => {
        if (res.data.id) {
          setUser(res.data);
        } else {
          setUser(null);
        }
      })
      .catch((error) => console.error(error));
  }

  useEffect(() => {
    if (loggedUserToken) {
      fetchUser(loggedUserToken);
    }
  }, [loggedUserToken]);

  return (
    <AuthContext.Provider value={{ user, setUser, fetchUser }}>
      {children}
    </AuthContext.Provider>
  );
};
