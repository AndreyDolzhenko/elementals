import React, { createContext, useContext, useState } from "react";
import { User } from "../types";

type AuthProviderType = {
  children: React.ReactNode;
};

type AuthContextType = {
  loginStatus: boolean;
  setLoginStatus: React.Dispatch<React.SetStateAction<boolean>>;
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
};

const AuthContext = createContext<AuthContextType>({
  loginStatus: false,
  setLoginStatus: () => {},
  user: {
    id: 1,
    login: "",
    fio: "",
    mail: "",
  },
  setUser: () => {},
});

export const AuthProvider: React.FC<AuthProviderType> = ({ children }) => {
  const [loginStatus, setLoginStatus] = useState(false);
  const [user, setUser] = useState<User>(
    {
      id: 1,
      login: "",
      fio: "",
      mail: "",
    }
  );

  return (
    <AuthContext.Provider value={{ loginStatus, setLoginStatus, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = (): AuthContextType => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }

  return context;
};
