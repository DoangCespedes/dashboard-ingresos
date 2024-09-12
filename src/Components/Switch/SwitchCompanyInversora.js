import * as React from 'react';
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 140,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(100px)',
      '& .MuiSwitch-thumb:before': {
        content:"'INVERSORA'",
        top: "8px",
        fontSize:"12px"
      },
      
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#f5f5f5' : '#010101',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.mode === 'dark' ? '#003892' : 'rgb(249 249 249)',
    width: 30,
    height: 30,
    left:40,
    border: "1px solid #d7d2d2",
    '&:before': {
      content: "'OCEANICA'",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: "-80px",
      top: "5px",
    },
    '&:after': {
      content:"'OCEANICA'",
      position: "absolute",
      left: "40px",
      top: "8px",
      fontSize:"12px"

    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : 'rgb(94 185 185)',
    borderRadius: 20 / 2,
  },
}));



export default function SwitchCompanyInversora({handleCompanyInversoraChange}) {

  

  // useEffect(() => {
  //   sessionStorage.setItem("switch",company)
  // }, [company])
  
  
// console.log(companyInversora, "PRUEBA")
  return (
    <FormGroup>
      <FormControlLabel
        control={<MaterialUISwitch 
             onChange={() => handleCompanyInversoraChange() }/> }
        // label= {company ? "Oceanica" : "Piramide"  }
       
      />
    </FormGroup>
  );
}
