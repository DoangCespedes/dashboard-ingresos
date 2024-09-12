import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TableModalDiagnostic from '../Tables/TableModalDiagnostic';
import { useEffect } from 'react';
import { useSwitch } from "../Context/contextSwitch";
import { useBackdrop } from '../Context/contextBackdrop';
import { styled } from '@mui/material/styles';

export default function ModalTableDiagnostic({isLoading, setNewCoverages, selectedDiagnostic, diagnosticArray, policy_id, certified_id, setDiagnosticArray, openModalDiagnostic, setSelectedDiagnostic, setOpenModalDiagnostic }) {
  const [open, setOpen] = React.useState(false);
  const [validationTable, setvalidationTable] = React.useState(false)
  const { company, AxiosInstance } = useSwitch()
  const { setOpenBackdrop } = useBackdrop();

  const BootstrapButton = styled(Button)({
    fontSize: 12,
    padding: '10px',
    lineHeight: 1.5,
    backgroundColor: 'gray',
    color:'white',
    width: '20%',
    borderRadius:'10px',
    // marginBottom: '20px',
    '&:hover': {
      backgroundColor: '#b9b6b6',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: 'gray',
    },
    '&:focus': {
      backgroundColor: 'gray',

    },
  });
  

  const handleClose = () => {
    setOpenModalDiagnostic(false);
  };


  return (
    <div>
      <Dialog
        open={openModalDiagnostic}
        onClose={handleClose}
        fullWidth
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth={"md"}
      >
        <DialogTitle id="alert-dialog-title">
          {"Seleccionar Diagnóstico"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <TableModalDiagnostic isLoading={isLoading} setDiagnosticArray={setDiagnosticArray} validationTable={validationTable} setSelectedDiagnostic={setSelectedDiagnostic} diagnosticArray={diagnosticArray} />
          </DialogContentText>
        </DialogContent>
        <div style={{display:"flex",justifyContent:"center",alignContent:"center",marginBottom:"1rem"}}>
          <BootstrapButton  onClick={handleClose}
            // color="primary"
            // disabled={false}
            // size="medium"
            // variant="outlined"
            >
              CERRAR
          </BootstrapButton>
        </div>
      </Dialog>
    </div>
  );
}
