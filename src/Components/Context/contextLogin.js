import React, { useState, useMemo } from "react"
import { setToken, setProfile } from "../Utils/Utils"
import Axios from "axios"
import { useSwitch } from "@/Components/Context/contextSwitch";
import { variables } from "../Utils/ConfigEnv";

const UserContext = React.createContext()

export function UserProvider(props) {
  const [user, setUser] = useState(0)
  const [homeUser, sethomeUser] = useState()
  const [profilePictureUser, setProfilePictureUser] = useState()
  const {company} = useSwitch()

  async function login(params,url) {
    // alert(company)
    try {
      const { data } = await Axios.post(`${url}/asg-api/login` , params)
      setUser(data.user["P_PORTAL_USER_ID"])
      sethomeUser(data.user["HOME"])
      setToken(data.token)
      setProfile(data.user)
      await new Promise((resolve) => setTimeout(resolve, 1700))
      return data
    } catch (error) {
      return Promise.reject(error)
    }
  }

  function setHome(home) {
    sethomeUser(home)
  }

  function handleProfilePictureUser(image64) {
    setProfilePictureUser(image64)
  }

  const value = useMemo(() => {
    return {
      user,
      homeUser,
      login,
      setHome,
      profilePictureUser,
      handleProfilePictureUser,
    }
  }, [user, homeUser, profilePictureUser])

  return <UserContext.Provider value={value} {...props} />
}

export function useUser() {
  const context = React.useContext(UserContext)
  /*if(!context) {
        throw new Error('contexto malo');
    }*/
  return context
}
