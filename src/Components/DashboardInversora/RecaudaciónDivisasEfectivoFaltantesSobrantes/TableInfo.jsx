import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import * as XLSX from 'xlsx';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';

export default function TableInfo({ data }) {
  const [rowsToShow, setRowsToShow] = useState(10); 
  const [showLess, setShowLess] = useState(true); 

  const handleShowMore = () => {
    setRowsToShow(prev => prev + 10);
    setShowLess(true);
  };

  const handleShowLess = () => {
    setRowsToShow(10);
    setShowLess(false);
  };

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Datos');
    
   
    XLSX.writeFile(workbook, 'datos_recaudacion.xlsx');
  };

  return (
    <>
      <div style={{display:"flex",justifyContent:"end"}}>
        <Button onClick={exportToExcel} variant="contained" color="success" style={{ margin: '10px' }}>
          <CloudDownloadIcon style={{ marginRight: "3px" }} /> Descargar Excel
        </Button>
      </div>
      <TableContainer component={Paper}>
        
        <Table sx={{ minWidth: 650 }} aria-label="caption table">
          <TableHead>
            <TableRow>
              <TableCell>Cod</TableCell>
              <TableCell>Oficina</TableCell>
              <TableCell>Fecha</TableCell>
              <TableCell>Moneda</TableCell>
              <TableCell>Numero Ingreso</TableCell>
              <TableCell>Tipo Documento</TableCell> 
              <TableCell>Monto local</TableCell>
              <TableCell>Monto Moneda</TableCell>
              <TableCell>Numero Acre. Faltante</TableCell>
              <TableCell>Monto Faltante</TableCell>
              <TableCell>Numero Oblig Sobrante</TableCell>
              <TableCell>Monto Sobrante</TableCell>
              <TableCell>Cliente</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.slice(0, rowsToShow).map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.CODIGO_OFICINA}</TableCell>
                <TableCell>{row.OFICINA}</TableCell>
                <TableCell>{row.FECHA_INGRESO}</TableCell>
                <TableCell>{row.MONEDA}</TableCell>
                <TableCell>{row.NRO_INGRESO}</TableCell>
                <TableCell>{row.TIPO_DOCUMENTO}</TableCell>
                <TableCell>{row.MTO_LOCAL}</TableCell>
                <TableCell>{row.MTO_MONEDA}</TableCell>
                <TableCell>{row.NRO_ACRE_FALTANTE}</TableCell>
                <TableCell>{row.MTO_FALTANTE}</TableCell>
                <TableCell>{row.NRO_OBLIG_SOBRANTE}</TableCell>
                <TableCell>{row.MTO_SOBRANTE}</TableCell>
                <TableCell>{row.CLIENTE}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div style={{ margin: '10px', textAlign: 'center' }}>
          {rowsToShow < data.length && (
            <Button onClick={handleShowMore} variant="contained" color="primary" style={{ margin: '10px' }}>
              Ver más
            </Button>
          )}
          {showLess && rowsToShow > 10 && (
            <Button onClick={handleShowLess} variant="outlined" color="secondary" style={{ margin: '10px' }}>
              Ver menos
            </Button>
          )}
          
        </div>
      </TableContainer>
    </>
  );
}
