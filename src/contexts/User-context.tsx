"use client";
import { UserI } from "@/interfaces/user";
import { createContext, useContext } from "react";

interface UsersContextType {
  grantedPrivileges: string[];
  user?: UserI | null;
}

const UsersContext = createContext<UsersContextType | undefined>(undefined);

export const useUsers = () => {
  const context = useContext(UsersContext);
  if (!context) {
    throw new Error("useUsers must be used within a UsersProvider");
  }
  return context;
};

interface UsersProviderProps {
  grantedPrivileges: string[];
  user?: UserI | null;
  children: React.ReactNode;
}

export const UsersProvider: React.FC<UsersProviderProps> = ({
  grantedPrivileges,
  user,
  children,
}) => {
  return (
    <UsersContext.Provider value={{ grantedPrivileges, user }}>
      {children}
    </UsersContext.Provider>
  );
};
