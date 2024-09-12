import React from 'react'
import styles from "./Login.module.scss"
import logo from "../../assets/image/PIRAMIDE_BANNER.png"
import Image from 'next/image'
import RootLayout from '@/layout/Layout'
import { LoginCard } from '@/Components/Login/LoginCard'
import { useSwitch } from "@/Components/Context/contextSwitch";

const Login = () => {
  const {company,} = useSwitch()

  return (
   
    <div className={ company ? styles.container_modal_login_oceanica : styles.container_modal_login_piramide}>
      <LoginCard />
    </div>

  )
}

export default Login