
import styles from "../ManagementAdvisorsStyle"
import { useForm } from "react-hook-form"
import { Button, Icon, useMediaQuery, useTheme } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import CardManagement from "@/Components/Cards/CardManagement"
import DateMaterialPickerController from "@/Components/Controllers/DateMaterialPickerController"
import SelectSimpleController from "@/Components/Controllers/SelectSimpleController"
import GridItem from "@/Components/Grid/GridItem"
import GridContainer from "@/Components/Grid/GridContainer"

export default function CardHeader(props) {

  const { defaultDate, currencies, defaultCurrency, selectedBroker ,onSubmit} = props
  const { control } = useForm()
  const theme = useTheme()
  const newClasses = styles(theme)


  return (
    <>
      <CardManagement
        titulo= "DASHBOARD INVERSORA"//{`COMPOSICIÓN CARTERA ${nameDetail.toUpperCase()}`}
        headerComponent={ 
          <>
            <GridItem xs={12} md={6} lg={4}>
              <DateMaterialPickerController
                fullWidth
                control={control}
                label="Fecha Desde"
                name="transaction_date"
                // onChange={handleDate}
                // defaultValue={dayjs(defaultDate, "20240416")}
                limit
              />
            </GridItem>
            <GridItem xs={12} md={6} lg={4}>
              <DateMaterialPickerController
                fullWidth
                control={control}
                label="Fecha Hasta"
                name="transaction_date"
                // onChange={handleDate}
                // defaultValue={dayjs(defaultDate, "20240416")}
                limit
              />
            </GridItem>
            <GridItem
              xs={12}
              md={6}
              lg={4}
            >
              <SelectSimpleController
                control={control}
                label="Moneda"
                name="currency"
                array={currencies}
                // onChange={handleCurrency}

              />
            </GridItem>
          </>
        }
      >
         <GridContainer justify="center" alignItems="center" style={{marginTop:"2rem"}} >
         
         <GridItem
              xs={12}
              md={4}
              lg={2}
            >
            <Button
              onClick={onSubmit}
            >
            <SearchIcon/>
              Buscar
            </Button>

            
            
          </GridItem>
         <GridItem
              xs={12}
              md={4}
              lg={2}
            >
            <Button variant="contained" color="success"><CloudDownloadIcon style={{marginRight:"3px"}}/> Descargar Excel</Button>

            
            
          </GridItem>
          
        </GridContainer> 
      </CardManagement>
    </>
  )
}
