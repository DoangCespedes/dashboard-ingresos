import * as React from 'react';
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


export default function TableInfo({montoSobrante, office}) {
  const exportToExcel = () => {
    let data = [
      { Oficina: office, Monto: montoSobrante },
    ];

    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Datos');
    
    XLSX.writeFile(workbook, 'datos_monto_sobrantes.xlsx');
  };
  return (
    <>
      <div style={{ display: "flex", justifyContent: "end" }}>
        <Button onClick={exportToExcel} variant="contained" color="success" style={{ margin: '10px' }}>
          <CloudDownloadIcon style={{ marginRight: "3px" }} /> Descargar Excel
        </Button>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="caption table">
          <TableHead>
            <TableRow>
              <TableCell>Oficina</TableCell>
              <TableCell align="right">Monto</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            
              <TableRow >
                <TableCell component="th" scope="row">
                  {office}
                </TableCell>
                <TableCell align="right">{montoSobrante}</TableCell>
              </TableRow>
        
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
