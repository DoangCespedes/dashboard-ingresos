import React from 'react'
import TableMaterial from './TableMaterial'

const TableDiagnostic = ({selectedDiagnostic}) => {

    const validateArray = selectedDiagnostic[0]?.tableData?.checked === true ?  selectedDiagnostic : []

    return (
        <TableMaterial
        options={{
          // selection: true,
          showSelectAllCheckbox: false,
          paging: false,
          search: false,
          toolbar: false,
          sorting: false,
        //   selectionProps: (rowData) => ({
        //     checked: rowData.INDDIAGBAS === "S",
        //     disabled:
        //       dataInfo?.STSLIQUID === "ANU" ||
        //       dataInfo?.STSLIQUID === "LIQ" ||
        //       enfermedades.length > 0,
        //   }),
        }}
        columns={[

          // { title: "Fecha", field: "FECREG" },
          { title: "Cod Diagnóstico", field: "CODIGO" },
          { title: "Descripción", field: "DESDIAG" },
        ]}
        data={validateArray}
        // onSelectionChange={(data, rowData) => {
        //   setDiagnosticsSelection(data, rowData)
        // }}
      />
    )
}

export default TableDiagnostic
