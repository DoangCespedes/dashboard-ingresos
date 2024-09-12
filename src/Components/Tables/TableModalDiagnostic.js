import React, { useState } from 'react'
import TableMaterial from './TableMaterial'

const TableModalDiagnostic = ({isLoading,validationTable,diagnosticArray,setDiagnosticArray,setSelectedDiagnostic,}) => {
  let jsonAttetion = []

  function setDiagnosticosSelection(data, rowData) {
    jsonAttetion = diagnosticArray.map((reg) => {
      let newRow
      if (reg.CODIGO != rowData.CODIGO) {
        newRow = {
          ...reg,
          tableData: {
            checked: false,
          },
        }

      } else {
        if (rowData.tableData.checked === true ){
          newRow = {
            ...reg,
            tableData: {
              checked: true,
            },
          }
        }
        else{
          newRow = {
            ...reg,
            tableData: {
              checked: false,
            },
          }
        }

        setSelectedDiagnostic([rowData])
      }

      return newRow
    })
    setDiagnosticArray(jsonAttetion)
  }


  return (
    <>
      <TableMaterial
                  options={{
                    selection: true,
                    pageSize: 5,
                    pageSizeOptions: [5],
                    showSelectAllCheckbox: false,
                    pageSizeOptions: [5],
                    paging: true,
                    search: true,
                    toolbar: true,
                    maxColumnSort: false,
                  }}
                  columns={[
                    { title: "Cod Diagnóstico", field: "CODIGO" },
                    { title: "Descripción", field: "DESDIAG" },
                  ]}
                  data={diagnosticArray}    
                  onSelectionChange={(data, rowData) => {
                    setDiagnosticosSelection(data, rowData)
                  }}             
                  isLoading={isLoading}

                />
    </>
  )
}

export default TableModalDiagnostic
