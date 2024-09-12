import { Button } from '@mui/material'
import React from 'react'
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import styles from "./button.module.scss"
const GobackButton = ({Goback}) => {
  return (
    <div className= {styles.container_button}>
    <Button onClick={Goback} style={{fontSize: "10px",width: "100%",background:"#9b9898"}}  variant="contained" type="submit" endIcon={<KeyboardReturnIcon />} >
              Regresar
    </Button>
</div>
  )
}

export default GobackButton
