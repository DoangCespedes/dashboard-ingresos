import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
// import CircularProgress from '@mui/material/CircularProgress';
import LogoPiramide from '../../assets/image/logoPiramide.png'
import logo from "../../static/logo-piramide.svg"

// import LogoOceanica from 'assets/image/LogoOceanica.png'
// import CONFIG from 'config/CONFIG';
import { useBackdrop } from '../Context/contextBackdrop';
import { Logo,ProgressCircular } from './backdropStyle';

export default function SimpleBackdrop() {
  const {openBackdrop} = useBackdrop();
    
  return (
    <div>
      <Backdrop
        sx={{ color: 'white', zIndex: (theme) => theme.zIndex.drawer + 10000 }}
        open={openBackdrop}
      >
        {/* <Logo src={company !== 'OCEANICA' ? LogoPiramide : LogoOceanica} alt='#'/>
        <ProgressCircular color={company !== 'OCEANICA' ? "warning" : "primary"} /> */}
        {/* <Logo src={logo} alt='#'/> */}
        <ProgressCircular color={"warning"} />
      </Backdrop>
    </div>
  );
}