import React, { createContext, useState } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";
export const AppContext = createContext();
const AppContextProvider = ({ children }) => {
//  const navigate = useNavigate();
 const [loginBtnLoading, setloginBtnLoading] = useState(false);
 const [signupBtnLoading, setsignupBtnLoading] = useState(false);



 const handlesignup = async (signupdata) => {
   try {
     setsignupBtnLoading(true);
     let res = await axios.post(
       "http://localhost:8000/signup",
       signupdata
     );
     setsignupBtnLoading(false);
     return res.data;
   } catch (err) {
     console.log("error", err);
     setsignupBtnLoading(false);
     return err.response.data;
   }
 };


 const handlelogin = async (payload) => {
   try {
     setloginBtnLoading(true);
     let res = await axios.post(
       "http://localhost:8000/login",
       payload
     );
     setloginBtnLoading(false);
     // console.log(res.data)
     localStorage.setItem('user',JSON.stringify(res.data));
     return res.data;
   } catch (err) {
     console.log("error", err);
     setloginBtnLoading(false);
     return err.response.data;
   }
 };


 








 return (
   <AppContext.Provider
     value={{
       handlelogin,
     
       handlesignup,
       
       loginBtnLoading,
       signupBtnLoading,
       
       
      
     }}
   >
     {children}
   </AppContext.Provider>
 );
};


export default AppContextProvider;





