import React from 'react'
import SwitchCompanyInversora from '../Switch/SwitchCompanyInversora'
import { useEffect, useState } from 'react';
import DashboarInversora from '../DashboardInversora/DashboarInversora';
import DashboarOceanica from '../DashboardOceanica/DashboarOceanica';

const New = () => {
  const [companyInversora, setcompanyInversora] = useState(false);

  const handleCompanyInversoraChange = () => {
    // setCompany(!company)
    // sessionStorage.setItem("switch",company)

    setcompanyInversora(!companyInversora)

  }

  return (
    <>
      <div style={{display: "flex",justifyContent: "center", alignItems: "center"}}>
        <div style={{display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h3 style={{marginRight:"1.5em"}}>OCEANICA</h3>
          <SwitchCompanyInversora
            // companyInversora = {companyInversora}
            // setcompanyInversora = {setcompanyInversora}
            handleCompanyInversoraChange = {handleCompanyInversoraChange}
          />
          <h3>INVERSORA</h3>
        </div>
      </div>

      {companyInversora === true ? 
        (<DashboarInversora/>):
        (<DashboarOceanica/>)
      }
    </>
  )
}

export default New
