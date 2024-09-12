import CardManagement from '@/Components/Cards/CardManagement'
import GridContainer from '@/Components/Grid/GridContainer'
import GridItem from '@/Components/Grid/GridItem'
import BarChart from '@/Components/Pie/BarChart'
import React from 'react'

const RecaudacionDivisasEfectivo = () => {
  return (
    <>
      

      <CardManagement
        // titulo= "Recaudación Divisas-Efectivo"
        
        
      >
         <GridContainer justify="center" alignItems="center">
          <GridItem xs={12} md={8}>

          <div>
                <h1>
                    Recaudación Divisas-Efectivo
                </h1>
            </div>

            <div>
                <div>
                    Recaudación Divisas-Efectivo
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

export default RecaudacionDivisasEfectivo
