
import CardManagement from '@/Components/Cards/CardManagement'
import GridContainer from '@/Components/Grid/GridContainer'
import GridItem from '@/Components/Grid/GridItem'
import BarChart from '@/Components/Pie/BarChart'
import React from 'react'

const EfectivoSobrantesFaltantes = () => {
  return (
    <>
      

    <CardManagement
      // titulo= "EfectivoSobrantesFaltantes"
      
      
    >
       <GridContainer justify="center" alignItems="center">
        <GridItem xs={12} md={8}>

        <div>
              <h1>
              Efectivo Sobrantes Faltantes
              </h1>
          </div>

          <div>
              <div>
              Efectivo Sobrantes Faltantes
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

export default EfectivoSobrantesFaltantes
