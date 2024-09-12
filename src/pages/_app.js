import { BackDropProvider } from '@/Components/Context/contextBackdrop'
import '@/styles/globals.css'
// import { BackDropProvider } from "Core/infrastructure/Context/contextBackdrop";
import SimpleBackdrop from '@/Components/Backdrop/Backdrop'
import { UserProvider } from '@/Components/Context/contextLogin'
import { DialogProvider } from '@/Components/Context/ContextDialog'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react'
import Login from './Login/Login'
import { SwitchProvider } from '@/Components/Context/contextSwitch'

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [render, setRender] = useState(false)

  const handleTokenLayour = () => {
    const token = sessionStorage.getItem("ASG_TOKEN")
    if(token === null){
          setRender(false)
          router.push('/')
    }
    else{
      setRender(true)
    }
  }

  useEffect(() => {
    handleTokenLayour()
  }, [])

  return (
    <SwitchProvider>
    <UserProvider>
      <BackDropProvider>
        <DialogProvider>
          <SimpleBackdrop />
          {/* {render && <Component {...pageProps} base="/contingencia" /> } */}
          {/* {render ? <Component {...pageProps} base="/contingencia" /> : <Login/> } */}
          {/* <Component {...pageProps} base="/contingencia" />  EN CASO DE QUERER UN PATH  */}
          <Component {...pageProps}  />
                  
        </DialogProvider>
      </BackDropProvider>
    </UserProvider>
    </SwitchProvider>
  )
}
