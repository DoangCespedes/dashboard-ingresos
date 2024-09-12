
import CardManagement from '@/Components/Cards/CardManagement'
import GridContainer from '@/Components/Grid/GridContainer'
import GridItem from '@/Components/Grid/GridItem'
import BarChart from '@/Components/Pie/BarChart'
import React from 'react'

const RecaudaciónDivisasEfectivoFaltantesSobrantes = () => {
  return (
    <>
      

    <CardManagement
      // titulo= "RecaudaciónDivisasEfectivoFaltantesSobrantes"
      
      
    >
       <GridContainer justify="center" alignItems="center">
        <GridItem xs={12} md={8}>

        <div>
              <h1>
              Recaudación Divisas Efectivo Faltantes Sobrantes
              </h1>
          </div>

          <div>
              <div>
              Recaudación Divisas Efectivo Faltantes Sobrantes
              </div>
          </div>
        </GridItem>

        <GridItem xs={12} md={4} >
          <BarChart/>
        </GridItem>
      </GridContainer> 
    </CardManagement>

    
  </>
  )
}

export default RecaudaciónDivisasEfectivoFaltantesSobrantes
