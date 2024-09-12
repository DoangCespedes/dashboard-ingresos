import React, { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Slide } from "@mui/material";
import GridContainer from "../Grid/GridContainer";
import GridItem from "../Grid/GridItem";
import RecaudacionDivisasEfectivo from "./Recaudación Divisas-Efectivo/RecaudacionDivisasEfectivo";
import Sobrantes from "./Sobrantes/Sobrantes";
import Faltantes from "./Faltantes/Faltantes";
import EfectivoSobrantesFaltantes from "./EfectivoSobrantesFaltantes/EfectivoSobrantesFaltantes";
import RecaudaciónDivisasEfectivoFaltantesSobrantes from "./RecaudaciónDivisasEfectivoFaltantesSobrantes/RecaudaciónDivisasEfectivoFaltantesSobrantes";
import CardHeader from "./CardHeader/CardHeader";
import Axios from "axios";
import ComponentWrapper from "../ComponentWrapper/ComponentWrapper";


export default function DashboarOceanica() {
  const [value, setValue] = useState(0);
  const [currencies, setCurrencies] = useState([]);
  const [formData, setFormData] = useState(null);
  const [formData2, setFormData2] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFormSubmit = (data) => {
    setFormData(data);
  };

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  const getCurrencies = async () => {
    try {
      const { data } = await Axios.post("https://asesoresoc.oceanicadeseguros.com/asg-api/dbo/insurance_broker/get_currencies_bi");
      setCurrencies(data.p_list_data);
    } catch (err) {
      console.error("Error fetching currencies", err);
    }
  };

  const getResumeningresosme = async (formData) => {
    if (!formData) return;

    const params = {
      dfecdesde: formData.dateDesde,
      dfechasta: formData.dateHasta,
      ccodmoneda: formData.currency,
    };

    setLoading(true);
    setError(null);

    try {
      const { data } = await Axios.post("https://oceanicadeseguros.com/asg-api/dbo/satelite/resumeningresosme", params);
      setFormData2(data);
    } catch (err) {
      setError("Error fetching data");
      console.error("Error fetching resumen ingresos", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCurrencies();
  }, []);

  useEffect(() => {
    if (formData) {
      getResumeningresosme(formData);
    }
  }, [formData]);

  const indicator = value

  return (
    <GridContainer justify="center">
      <GridItem xs={12}>
        <Slide in={true} direction="left" timeout={2000}>
          <div>
            <Box style={{ display: "flex", justifyContent: "center" }}>
              <Tabs
                value={value}
                onChange={handleChange}
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
              onSubmitData={handleFormSubmit}
              indicator={indicator}
            />

            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            <ComponentWrapper index={value} formData={formData} />
          </div>
        </Slide>
      </GridItem>
    </GridContainer>
  );
}


