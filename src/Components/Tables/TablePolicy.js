import React from 'react'
import TableMaterial from './TableMaterial'
import { Badge } from '@mui/material'

const TablePolicy = ({policiesList,handleSelectPolicy,isLoading}) => {

    return (
        <TableMaterial
            options={{ pageSizeOptions: [5, 10], pageSize: 10, search: true, toolbar: true, sorting: false }}
            columns={[
                {
                    title: 'Area', field: 'CODAREA', width: '0px'
                      //  render: rowData => <ButtonIconText tooltip={insuranceArea[rowData.CODAREA].title} color={insuranceArea[rowData.CODAREA].color} icon={insuranceArea[rowData.CODAREA].icon} />
                },
                { title: 'No Póliza', field: 'NUMEROPOL' },
                { title: 'Titular', field: 'TITULAR' },
                { title: 'Vigencia', field: 'VIGENCIA' },
                { title: 'Situación', field: 'ESTADO', width: '0px'
                // <>sadasd</>
                //render: rowData =>  <Badge color={statusPayColors[rowData.ESTADO].color}>{rowData.ESTADO}</Badge>
             }
            ]}
            data={policiesList}
            isLoading={isLoading}
            onRowClick={(event, rowData) => handleSelectPolicy(event, rowData)}
        />
    )
}

export default TablePolicy
