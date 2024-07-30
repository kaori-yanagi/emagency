import { createContext, useEffect } from "react";
import { useState } from 'react';
import { authRepository } from "./repositories/auth";

// import { setCurrentUser } from './currentUserUtils';

const SessionContext = createContext();
const SessionProvider = (props) => {
const [currentUser, setCurrentUser] = useState();
const [isLoading, setIsloading] = useState(true);

 useEffect(() => {

 setSesson();
 }, []);


 const setSesson = async () => {
    const currentUser = await authRepository.getCurrentUser();
    setCurrentUser(currentUser);
    setIsloading(false);
 }; 



 if(isLoading) return <div />;
   return(
     <SessionContext.Provider value={{ currentUser, setCurrentUser}}>
      {props.children}
      </SessionContext.Provider>
         );
      };

export { SessionContext,SessionProvider };
