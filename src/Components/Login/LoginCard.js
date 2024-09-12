import React, { useState } from 'react'
import styles from "./LoginCard.module.scss"
import KeyIcon from '@mui/icons-material/Key';
import { Button, IconButton, InputAdornment } from '@mui/material';
import { useForm } from "react-hook-form"
import InputPasswordController from '../Controllers/InputPasswordController';
import { useUser } from '../Context/contextLogin'
import { useRouter } from 'next/router';
import { useDialog } from '../Context/ContextDialog';
import { useBackdrop } from '../Context/contextBackdrop';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useSwitch } from "@/Components/Context/contextSwitch";
import { styled } from '@mui/material/styles';
// import { useSwitch } from "../Context/contextSwitch";
import { variables } from "../Utils/ConfigEnv";

export const LoginCard = () => {
 

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm()
  const {company} = useSwitch()

  const router = useRouter();
  const { login } = useUser() || { login: "" };
  const dialog = useDialog()
  const { setOpenBackdrop } = useBackdrop();

  const BootstrapButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: company ? 'rgb(70, 174, 185)' : '#f46b45',
    // borderColor: '#0063cc',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor:  company ? '#156673' : "#b34c42",
      // borderColor: '#0063cc',
      boxShadow: 'none',
    },
    // '&:active': {
    //   boxShadow: 'none',
    //   backgroundColor: '#0062cc',
    //   borderColor: '#005cbf',
    // },
    // '&:focus': {
    //   boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    // },
  });

  const onSubmit = async (data, e) => {
    setOpenBackdrop(true)
    e.preventDefault();
    try {
      let url = company ? variables.oceanica : variables.piramide
      const dataLogin = await login(data,url)
      if (dataLogin.user.PROFILE_CODE === "corporate" || dataLogin.user.PROFILE_CODE === "supervisor" || dataLogin.user.PROFILE_CODE === "corporate_queries" ) {
        router.push(`/Cliente/Cliente`)
      }
      else {
        dialog({
          variant: "info",
          catchOnCancel: false,
          title: "Alerta",
          description: 'Solo pueden ingresar usuario corporativos'
        })
      }
      setOpenBackdrop(false)
    }
    catch (error) {
      console.error(error)
      setOpenBackdrop(false)
      dialog({
        variant: "info",
        catchOnCancel: false,
        title: "Alerta",
        description: error.response.data
      })
    }
  }

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };


  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      {/* <input defaultValue="test" {...register("example")} /> */}
      <div className={styles.container_card_login}>
        <div className={company ? styles.container_card_header_oceanica : styles.container_card_header_piramide }>INICIO DE SESIÓN</div>
        <div className={styles.container_card_items}>
          <InputPasswordController
            control={control}
            // label="Nombre de Usuario"
            placeholder="Nombre de Usuario"
            name={`p_portal_username`}
            fullWidth
            required={true}
            endAdornment={
              <InputAdornment position="end">
                 <IconButton>
                  <KeyIcon/>
                </IconButton>
              </InputAdornment>
            }
          />

          <InputPasswordController
            control={control}
            //  label="Contraseña"
            placeholder="Contraseña"
            name={`p_pwd`}
            fullWidth
            required={true}
            id="standard-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
          <BootstrapButton type="submit" color="error" variant="contained">ENTRAR</BootstrapButton>
        </div>
      </div>
      {errors.exampleRequired && <span>This field is required</span>}


    </form>
  )
}

