import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import CardManagement from '@/Components/Cards/CardManagement';
import GridContainer from '@/Components/Grid/GridContainer';
import GridItem from '@/Components/Grid/GridItem';
// import BarChart from '@/Components/Pie/BarChart';
import TableInfo from './TableInfo';
import BarChart from './BarChart';

const Sobrantes = ({ formData }) => {
  const [result, setResult] = useState({ ingresos_cur: [] }); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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
      setResult(data);
    } catch (err) {
      setError("Error fetching data");
      console.error("Error fetching resumen ingresos", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (formData) {
      getResumeningresosme(formData);
    }
  }, [formData]);

  const montoSobrante = result.ingresos_cur?.[0]?.MTO_SOBRANTE; // Uso de optional chaining
  const office = result.ingresos_cur?.[0]?.OFICINA; // Uso de optional chaining
  // const montoFaltante = result.ingresos_cur?.[0]?.MTO_FALTANTE; // Uso de optional chaining
  // const montoLocal = result.ingresos_cur?.[0]?.MTO_LOCAL; // Uso de optional chaining
  // const montoMoneda = result.ingresos_cur?.[0]?.MTO_MONEDA; // Uso de optional chaining

  console.log(result, "AQUIFUE")
  return (
    <>
      <CardManagement>
        <GridContainer justify="center" alignItems="center">
          <GridItem xs={12} md={8}>
            <div>
              <h1>Sobrantes</h1>
            </div>

            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
              <div>
              <div style={{padding:"5px", width: "100%", background: "#f5f5f5", color: "#000", fontSize: "1.5rem", textAlign: "center", borderRadius: "10px" }}>
                  {montoSobrante ? <TableInfo montoSobrante={montoSobrante} office={office} /> : 'No hay datos '} {/* Manejo del caso en que montoSobrante es undefined */}
                </div>
              </div>
          </GridItem>

          <GridItem xs={12} md={4}>
            <BarChart montoSobrante={montoSobrante} office={office}/>
          </GridItem>
        </GridContainer>
      </CardManagement>
    </>
  );
}

export default Sobrantes;
