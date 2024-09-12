import React, { Fragment } from 'react'
 import SelectSimpleController from '../Controllers/SelectSimpleController'
// import IdentificationController from './IdentificationController'
import {indentificationTypeCliente } from '../Utils/Utils'
import IdentificationController from '../Controllers/IdentificationController/IdentificationController'



export default function CustomerIdentification(props) {
    const { index, control, onChangeType, onChangeNumber, readonly, required } = props


    // function getValuesIdentificationType() {
    //     if (customerType === "INVOICEER") return indentificationTypeAll
    //     if (customerType === "CUSTOMER") return indentificationTypeCliente
    //     if (budgetArea === 'AUTOMOVIL' || budgetArea === 'PYME') return indentificationTypeAll
    //     if (customerType === "NOPERSONAL") return  indentificationTypeJuridico
    //     return indentificationTypeNaturalMayor
    // }

    return (
        <Fragment>
            <SelectSimpleController
                onChange={(e) => {
                    onChangeType && onChangeType(e, "identificationType")
                }}
                control={control} 
                label="Tipo de identificación"
                name={`p_identification_type_${index}`}
                array={indentificationTypeCliente}
                readonly={readonly ? readonly : false}
                required={required}
            />
            <IdentificationController
                onChange={(e) => {
                    onChangeNumber && onChangeNumber(e, "identificationNumber")
                }}
                control={control} 
                label="Número de identificación"
                index={index}
                readOnly={readonly ? readonly : false}
                required={required}
            /> 
        </Fragment>
    )
}
