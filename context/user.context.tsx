import { createUserDocumentFromAuth, onAuthStateChangedListener } from "@/utils/firebase.utils";
import { createContext, useEffect, useState } from "react";


export type User = {
  id: number;
  username: string;
  email: string;
};
 
type UserContextType = {
  currentUser: User | null;
  setCurrentUser: (user: any | null) => void;
};

export const UserContext = createContext<UserContextType>({
  currentUser: null,
  setCurrentUser: () => {},
});

export const UserProvider = ({ children }: any) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const value: UserContextType = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user: any) => {
      if(user){
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user)
    })

    return unsubscribe

  }, [])
  

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
