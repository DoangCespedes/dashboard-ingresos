'use client'
import React from 'react'
import TableMaterial from './TableMaterial'
import IconButtons from '../Buttons/IconButton'
import styles from "../../Components/Policy/Policy.module.scss"


export default function TablesClient({ customersList, onSelectCustomer, isLoading }) {

    function handleClick(event, rowData) {
        onSelectCustomer(rowData.CODCLI, rowData.TIPOIDENT, rowData.NUMEROIDENT, rowData.PLACA)
    }

    return (
        < div>
            <TableMaterial
                options={{ pageSizeOptions: [5, 10, 20], pageSize: 5 }}
                columns={[
                    {
                        title: '', field: 'CODCLI', width: '10%', render: rowData =>
                            <IconButtons  />
                    },
                    { title: 'Identificación', width: '15%', field: 'IDENTIFICACION' },
                    { title: '-', width: '15%', field: 'VIP_MARK', render: rowData => {
                        const markVIP = rowData.INDCLIVIP
                        return(
                            markVIP === 'S' && <div className={styles.parpadea_texto_rojo} >CLIENTE <br /> VIP</div>
                        )
                      } }, 
                    { title: 'Nombre', field: 'NOMBRE' },

                ]}
                data={customersList}
                isLoading = {isLoading}
                onRowClick={(event, rowData) => handleClick(event, rowData)}
            />
        </div>
    )
}
