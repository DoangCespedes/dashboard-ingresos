"use client"

import React, { useState, useEffect } from "react"
import Axios from "axios"
import { useForm } from "react-hook-form"
import CustomerSearch from "./CustomerSearch"
import CustomersTable from "../Tables/TablesClient"
import { getIdentificationCustomer } from "../Utils/Utils"
import { useRouter } from 'next/router';
import { useBackdrop } from "../Context/contextBackdrop"
import Backdrop from "../Backdrop/Backdrop"
import { variables } from "../Utils/ConfigEnv";
import { useSwitch } from "../Context/contextSwitch";
import { useDialog } from '../Context/ContextDialog';



export default function Customers({ location }) {
    const index = "CUSTOMER"
    const [numplaca, setNumPlaca] = useState("01")
    const [customersList, setCustomersList] = useState([])
    const { trigger, getValues, ...objForm } = useForm()
    const [showForm, setShowForm] = useState(false)
    const [paramsSearch, setParamsSearch] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter();
    const { setOpenBackdrop } = useBackdrop();
    const {company,AxiosInstance} = useSwitch()
    const dialog = useDialog()

    function handleSelectCustomer(codcli) {
        sessionStorage.setItem("cedulaCliente",codcli )
        router.push(`/Polizas/Polizas/#${codcli}`)
    }

    async function onSubmit(data) {
        setOpenBackdrop(true)
        setIsLoading(true)
        try {
            const [tipoid, numid, dvid] = getIdentificationCustomer(
                `${data[`p_identification_type_${index}`]}`,
                `${data[`p_identification_number_${index}`]}`
            )
            const dataName = `${data[`p_names_${index}`]}`
            const names =
                dataName === "undefined"
                    ? null
                    : dataName.trim() === ""
                        ? null
                        : dataName.trim()
            const dataPlateNumber = `${data[`p_license_plate_${index}`]}`
            const plateNumber =
                dataPlateNumber === "undefined"
                    ? null
                    : dataPlateNumber.trim() === ""
                        ? null
                        : dataPlateNumber.trim()
            setNumPlaca(plateNumber)
            const params = {
                p_identification_type: tipoid,
                p_identification_number: numid,
                p_identification_verified: dvid,
                p_customers_full_name:
                    names === "undefined" ? null : names === "" ? null : names,
                p_license_plate:
                    plateNumber === "undefined"
                        ? null
                        : plateNumber === ""
                            ? null
                            : plateNumber,
            }
            setParamsSearch(data)
            const response = await AxiosInstance('asg-api/dbo/customers/get_customers_all',params,'post')
            setCustomersList(response.data.p_cursor)
            setIsLoading(false)
            setOpenBackdrop(false)

        } catch (error) {
            setOpenBackdrop(false)
            setIsLoading(false)
            dialog({
                variant: "info",
                catchOnCancel: false,
                title: "Alerta",
                description: error.response.data
              })
            console.error(error);
        }
    }

    // useEffect(() => {
    //     setShowForm(false)
    //     if (location.state && location.state.client && location.state.search) {
    //         const params = { ...location.state.search }
    //         objForm.reset({
    //             [`p_identification_type_${index}`]:
    //                 params[`p_identification_type_${index}`],
    //             [`p_identification_number_${index}`]:
    //                 params[`p_identification_number_${index}`],
    //             [`p_names_${index}`]: params[`p_names_${index}`],
    //             [`p_license_plate_${index}`]: params[`p_license_plate_${index}`],
    //         })
    //         setShowForm(true)
    //         trigger()
    //             .then((result) => {
    //                 if (result) {
    //                     onSubmit(getValues())
    //                 }
    //             })
    //             .catch((error) => {
    //                 console.error(error)
    //             })
    //     } else {
    //         setShowForm(true)
    //     }
    // }, [])

    // useEffect(() => {
    //     objForm.reset({
    //                     [`p_identification_type_${index}`]:
    //                        "V"})
    // }, [])
    

    
    return (
        <>
            <CustomerSearch
                onSubmit={onSubmit}
                showForm={showForm}
                dataForm={objForm}
                index={index}
            />
            <CustomersTable
                customersList={customersList}
                onSelectCustomer={handleSelectCustomer}
                isLoading={isLoading}
            />

        </>


    )
}
