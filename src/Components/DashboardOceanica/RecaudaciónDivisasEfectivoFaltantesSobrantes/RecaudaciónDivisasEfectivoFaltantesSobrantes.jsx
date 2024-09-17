import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import CardManagement from '@/Components/Cards/CardManagement';
import GridContainer from '@/Components/Grid/GridContainer';
import GridItem from '@/Components/Grid/GridItem';
import TableInfo from './TableInfo';

const RecaudaciónDivisasEfectivoFaltantesSobrantes = ({ formData }) => {
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
      const { data } = await Axios.post("https://oceanicadeseguros.com/asg-api/dbo/satelite/detalleingresosme", params);
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

  // Mapeo de los datos
  const newArr = result.ingresos_cur.map((item, index) => ({
    id: index,
    CODIGO_OFICINA: item.CODIGO_OFICINA,
    OFICINA: item.OFICINA,
    FECHA_INGRESO: item.FECHA_INGRESO,
    MONEDA: item.MONEDA,
    NRO_INGRESO: item.NRO_INGRESO,
    TIPO_DOCUMENTO: item.TIPO_DOCUMENTO,
    MTO_LOCAL: item.MTO_LOCAL,
    MTO_MONEDA: item.MTO_MONEDA,
    NRO_ACRE_FALTANTE: item.NRO_ACRE_FALTANTE,
    MTO_FALTANTE: item.MTO_FALTANTE,
    NRO_OBLIG_SOBRANTE: item.NRO_OBLIG_SOBRANTE,
    MTO_SOBRANTE: item.MTO_SOBRANTE,
    CLIENTE: item.CLIENTE,
  }));

 
  return (
    <>
      <CardManagement>
        <GridContainer justify="center" alignItems="center">
          <GridItem xs={12} md={12}>
            <div>
              <h1>Recaudación Divisas Efectivo Faltantes Sobrantes</h1>
            </div>

            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}

            <div>
              <div style={{ padding: "5px", width: "100%", background: "#f5f5f5", color: "#000", fontSize: "1.5rem", textAlign: "center", borderRadius: "10px" }}>
                {newArr.length > 0 ? (
                  <TableInfo data={newArr} />
                ) : (
                  'No hay datos'
                )}
              </div>
            </div>
          </GridItem>
        </GridContainer>
      </CardManagement>
    </>
  );
};

export default RecaudaciónDivisasEfectivoFaltantesSobrantes;
