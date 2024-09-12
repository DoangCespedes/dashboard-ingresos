import Paper from '@/Components/Paper/Paper'
import RootLayout from '@/layout/Layout'
import React, { useEffect } from 'react'
import styles from "./Cliente.module.scss"
import Customers from '@/Components/ClientSearch/Customer'
import SimpleBackdrop from '@/Components/Backdrop/Backdrop'
import { useRouter } from 'next/router';
import New from '@/Components/New/New'

const Cliente = () => {
  // const router = useRouter();

  // const handleTokenLayour = () => {
  //   const token = sessionStorage.getItem("ASG_TOKEN")
  //   if(token === null){
  //         router.push('/')
  //   }
  // }

  // useEffect(() => {
  //   handleTokenLayour()
  // }, [])
  

  return (
    <>
      <RootLayout>
      {/* <SimpleBackdrop /> */}
        <div className={styles.container_customer} >
          <Paper component={<New/>} />
          
        </div>
      </RootLayout>
    </>
  )
}

export default Cliente
