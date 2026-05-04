import { createContext, useContext, useState } from "react";

// Create context
const UsernameContext = createContext();

// Provider
export const UsernameProvider = ({ children }) => {
  const [username, setUsername] = useState("");

  return (
    <UsernameContext.Provider
      value={{
        username,
        setUsername,
      }}
    >
      {children}
    </UsernameContext.Provider>
  );
};

// Custom hook
export const useUsername = () => {
  const context = useContext(UsernameContext);

  if (!context) {
    throw new Error("useUsername must be used inside UsernameProvider");
  }

  return context;
};

