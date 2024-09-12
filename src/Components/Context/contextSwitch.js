import { createContext, useState, useContext, useEffect } from "react";
import { useRouter } from 'next/router';
import axios from "axios"
import { variables } from "../Utils/ConfigEnv";
export const DataSwitch = createContext(); 

export const useSwitch = () => useContext(DataSwitch);

export const SwitchProvider = ({children}) => {

    const router = useRouter();
    // const [company, setCompany] = useState(true)
    
    const company = true

    const AxiosInstance = async (url,params,method) => {
      const response = await axios[method]( company ?  `${variables.oceanica}/${url}` : `${variables.piramide}/${url}` ,params)
      return response

  }

  // useEffect(() => {
  //   if (router.route !== "/") {
  //     if(sessionStorage.getItem("switch") === "true"){
  //       setCompany(true)
  //     }
  //     if(sessionStorage.getItem("switch") === "false"){
  //       setCompany(false)
  //     }
  //   }}, [])

    return (
        <DataSwitch.Provider value={{company,AxiosInstance}}> 
            {children}
        </DataSwitch.Provider>
    )
}