import React, { useEffect, useState } from "react"

import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
// import Sinistrality from "./Sinistrality/Sinistrality"
// import PremiumsCollected from "./PremiumsCollected/PremiumsCollected"
// import PendingPremiums from "./PendingPremiums/PendingPremiums"
// import Persistence from "./Persistence/Persistence"
// import InventoryCertificates from "./InventoryCertificates/InventoryCertificates"
import Axios from "axios"
import { Slide } from "@mui/material"
import GridContainer from "../Grid/GridContainer"
import GridItem from "../Grid/GridItem"
import RecaudacionDivisasEfectivo from "./Recaudación Divisas-Efectivo/RecaudacionDivisasEfectivo";
import Sobrantes from "./Sobrantes/Sobrantes";
import Faltantes from "./Faltantes/Faltantes";
import EfectivoSobrantesFaltantes from "./EfectivoSobrantesFaltantes/EfectivoSobrantesFaltantes";
import RecaudaciónDivisasEfectivoFaltantesSobrantes from "./RecaudaciónDivisasEfectivoFaltantesSobrantes/RecaudaciónDivisasEfectivoFaltantesSobrantes";
import CardHeader from "./CardHeader/CardHeader";

const components = {
  0: <RecaudacionDivisasEfectivo />,
  1: <Sobrantes />,
  2: <Faltantes />,
  3: <EfectivoSobrantesFaltantes />,
  4: <RecaudaciónDivisasEfectivoFaltantesSobrantes />,
};


export default function DashboarInversora() {
  const [currencies, setCurrencies] = useState([])
  const [defaultDate, setDefaultDate] = useState(null)
  // const [listAreas, setListAreas] = useState(null)
  const [value, setValue] = useState(0);


  const handleTabs = (e, newValue) => {
    setValue(newValue);
  }

  const getCurrencies = async () => {
    const { data } = await Axios.post("https://asesoresoc.oceanicadeseguros.com/asg-api/dbo/insurance_broker/get_currencies_bi")
    setCurrencies(data.p_list_data)
  }

  // const getDefaultDate = async () => {
  //   const { data } = await Axios.post(
  //     "/dbo/insurance_broker/get_default_date_bi"
  //   )
  //   setDefaultDate(data.p_list_data[0].data)
  // }

  // const getListAreas = async () => {
  //   const { data } = await Axios.post("/dbo/insurance_broker/get_areas_bi")
  //   const listArea = [
  //     {
  //       id: "9999",
  //       description: "GENERAL",
  //     },
  //     ...data.p_list_data,
  //   ]
  //   setListAreas(listArea)
  // }

  // const filterAreas = (areas) => {
  //   const removedAreas = areas.filter((element, index) => index !== 0)
  //   return removedAreas
  // }
  

  useEffect(() => {
    getCurrencies()
  //   getDefaultDate()
  //   getListAreas()

  }, [])

  return (
    <GridContainer justify="center">
      <GridItem xs={12}>
          <Slide in={true} direction="right" timeout={2000}>
            <div>

              
            <Box style={{display:"flex", justifyContent:"center"}}>
              <Tabs 
                  value={value} 
                  onChange={handleTabs} 
                  indicatorColor="primary"
                  textColor="primary"
                  variant="scrollable"
                  scrollButtons="auto"
                  aria-label="scrollable auto tabs example"
                >
                <Tab label="Recaudación Divisas-Efectivo" />
                <Tab label="Sobrantes" />
                <Tab label="Faltantes" />
                <Tab label="Efectivo / Sobrantes / Faltantes" />
                <Tab label="Recaudación Divisas - Efectivo - Faltantes y Sobrantes" />
              </Tabs>
            </Box>
              <CardHeader
                currencies={currencies}
                defaultDate={defaultDate}
                // onSubmit={onSubmit}
              />

              {/* Renderizar el componente basado en el valor del tab */}
            {components[value] || <div>Componente no encontrado</div>}
             

            </div>
          </Slide>
      </GridItem>
    </GridContainer>
  )
}
