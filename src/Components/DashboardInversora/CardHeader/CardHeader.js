import styles from "../ManagementAdvisorsStyle";
import { useForm } from "react-hook-form";
import { Button, Icon, useMediaQuery, useTheme } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import CardManagement from "@/Components/Cards/CardManagement";
import DateMaterialPickerController from "@/Components/Controllers/DateMaterialPickerController";
import SelectSimpleController from "@/Components/Controllers/SelectSimpleController";
import GridItem from "@/Components/Grid/GridItem";
import GridContainer from "@/Components/Grid/GridContainer";
import { useState } from "react";
import { getDateForSearch } from "@/Components/Utils/utils2";
import { format } from 'date-fns';

const oficina = [ 
{
  "CODE": "0",
  "DESCRIPTION": "TODAS"
},
{
  "CODE": "002001",
  "DESCRIPTION": "CARACAS OFIC PPAL"
}]

export default function CardHeader(props) {
  const { defaultCurrency, selectedBroker, currencies, onSubmitData, indicator} = props;
  const [inputDateDesde, setInputDateDesde] = useState(null);
  const [inputDateHasta, setInputDateHasta] = useState(null);
  const [inputCurrency, setInputCurrency] = useState(defaultCurrency);
  const [office, setOffice] = useState("0");

  const handleOffice= (value) => {
    setOffice(value);
  };


  const { control, handleSubmit } = useForm();
  const theme = useTheme();
  const newClasses = styles(theme);

  const handleDate = (value) => {
    const result = getDateForSearch(value, "DD/MM/YYYY");
    setInputDateDesde(result);
  };

  const handleDate2 = (value) => {
    const result2 = getDateForSearch(value, "DD/MM/YYYY");
    setInputDateHasta(result2);
  };

  const handleCurrency = (value) => {
    setInputCurrency(value);
  };

  const onSubmit = (data) => {
    const formattedData = {
      ...data,
      dateDesde: inputDateDesde,
      dateHasta: inputDateHasta,
    };

    onSubmitData(formattedData);
  };


  return (
    <>
      <CardManagement
        titulo="DASHBOARD INVERSORA"
        icon="work_outline"
        iconColor="primary"
        headerComponent={
          <>
            <GridItem xs={12} md={6} lg={4}>
              <DateMaterialPickerController
                fullWidth
                control={control}
                label="Fecha Desde"
                name="transaction_date"
                onChange={handleDate}
                value={inputDateDesde}
                limit
              />
            </GridItem>
            <GridItem xs={12} md={6} lg={4}>
              <DateMaterialPickerController
                fullWidth
                control={control}
                label="Fecha Hasta"
                name="transaction_date"
                onChange={handleDate2}
                value={inputDateHasta}
                limit
              />
            </GridItem>
            <GridItem xs={12} md={6} lg={4}>
              <SelectSimpleController
                control={control}
                label="Moneda"
                name="currency"
                array={currencies}
                onChange={handleCurrency}
              />
            </GridItem>

            {indicator === 3 && 
              <GridItem xs={12} md={6} lg={4}>
              <SelectSimpleController
                control={control}
                label="Oficina"
                name="oficina"
                array={oficina}
                onChange={handleOffice}
              />
            </GridItem>
            }
          </>
        }
      >
        <GridContainer justify="center" alignItems="center" style={{ marginTop: "2rem" }}>
          <GridItem xs={12} md={4} lg={2}>
            <Button onClick={handleSubmit(onSubmit)}>
              <SearchIcon /> Buscar
            </Button>
          </GridItem>
          <GridItem xs={12} md={4} lg={2}>
            <Button variant="contained" color="success">
              <CloudDownloadIcon style={{ marginRight: "3px" }} /> Descargar Excel
            </Button>
          </GridItem>
        </GridContainer>
      </CardManagement>
    </>
  );
}
