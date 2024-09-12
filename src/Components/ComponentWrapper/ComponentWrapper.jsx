// ComponentWrapper.js
import React from 'react';
import RecaudacionDivisasEfectivo from '../DashboardOceanica/Recaudación Divisas-Efectivo/RecaudacionDivisasEfectivo';
import Sobrantes from '../DashboardOceanica/Sobrantes/Sobrantes';
import Faltantes from '../DashboardOceanica/Faltantes/Faltantes';
import EfectivoSobrantesFaltantes from '../DashboardOceanica/EfectivoSobrantesFaltantes/EfectivoSobrantesFaltantes';
import RecaudaciónDivisasEfectivoFaltantesSobrantes from '../DashboardOceanica/RecaudaciónDivisasEfectivoFaltantesSobrantes/RecaudaciónDivisasEfectivoFaltantesSobrantes';
// import RecaudacionDivisasEfectivo from "./Recaudación Divisas-Efectivo/RecaudacionDivisasEfectivo";
// import Sobrantes from "./Sobrantes/Sobrantes";
// import Faltantes from "./Faltantes/Faltantes";
// import EfectivoSobrantesFaltantes from "./EfectivoSobrantesFaltantes/EfectivoSobrantesFaltantes";
// import RecaudaciónDivisasEfectivoFaltantesSobrantes from "./RecaudaciónDivisasEfectivoFaltantesSobrantes/RecaudaciónDivisasEfectivoFaltantesSobrantes";

const ComponentWrapper = ({ index, formData }) => {
  const components = [
    <RecaudacionDivisasEfectivo formData={formData} />,
    <Sobrantes formData={formData} />,
    <Faltantes formData={formData} />,
    <EfectivoSobrantesFaltantes formData={formData} />,
    <RecaudaciónDivisasEfectivoFaltantesSobrantes formData={formData} />,
  ];

  return components[index] || <div>Componente no encontrado</div>;
};

export default ComponentWrapper;
