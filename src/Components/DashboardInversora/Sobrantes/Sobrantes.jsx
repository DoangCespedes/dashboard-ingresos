import React from 'react'
import CardManagement from '@/Components/Cards/CardManagement'
import GridContainer from '@/Components/Grid/GridContainer'
import GridItem from '@/Components/Grid/GridItem'
import BarChart from '@/Components/Pie/BarChart'

const Sobrantes = () => {
  return (
    <>
      

    <CardManagement
      // titulo= "Sobrantes"
      
      
    >
       <GridContainer justify="center" alignItems="center">
        <GridItem xs={12} md={8}>

        <div>
              <h1>
                Sobrantes
              </h1>
          </div>

          <div>
              <div>
                Sobrantes
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

export default Sobrantes
