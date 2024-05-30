import { createContext, useEffect, useState, useContext } from "react";
import { getCurrentUsers } from "../lib/appwrite";

const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

const GlobalProvider = ({ children }) => {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // this is an async function so we can do .then on it
    getCurrentUsers()
      .then((res) => {
        if (res) {
          setisLoggedIn(true);
          setUser(res);
        } else {
          setisLoggedIn(false);
          setUser(null);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
    //finally means if it fails or succeed, no matter what happen do this.
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        isLoggedIn,
        setUser,
        setisLoggedIn,
        user,
        isLoading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
export default GlobalProvider;
