import React, { useEffect, useState } from 'react'
import InfoPolicySelected from './InfoPolicySelected';
import TablePolicy from '../Tables/TablePolicy';
import { useRouter } from 'next/router';
import Axios from "axios"
import { useBackdrop } from '../Context/contextBackdrop';
import { useSwitch } from "@/Components/Context/contextSwitch";


const Policy = () => {
    const router = useRouter();
    const {company,AxiosInstance} = useSwitch()

    const [customer, setCustomer] = useState(null);
    const [policiesList, setPoliciesList] = useState([])
    // const [CODAREA, setfirst] = useState(second)
    const { setOpenBackdrop } = useBackdrop();
    const [isLoading, setIsLoading] = useState(true);


    function handleSelectPolicy(event,rowData) {
        router.push(`/DetallePoliza/DetallePoliza/#${rowData.IDEPOL}#${rowData.NUMCERT}`)
    }

    const getClientIdFromURL = () => {
        const Urlgetted = router?.asPath
        const UrlSplitted = Urlgetted?.split('#');
        getCustomerDetails(UrlSplitted[1])
        getPoliciesList(UrlSplitted[1])
    }

    const getCustomerDetails = async (codcli) => {
        setOpenBackdrop(true)
        try{
            const params = { p_code_customer: codcli }
            const result = await AxiosInstance('asg-api/dbo/customers/get_customer_code',params,'post')
            setCustomer(result.data.p_cursor[0])
            setOpenBackdrop(false)
        }
        catch(error){
            console.error(error)
        }
       

    }

    const getPoliciesList = async (codcli) => {
        setOpenBackdrop(true)
        setIsLoading(true)
        try{
            const params = { p_client_code: codcli }
            const result = await AxiosInstance('asg-api/dbo/general_policies/get_policies_client',params,'post')
            setPoliciesList(result.data.c_policies)
            setOpenBackdrop(false)
            setIsLoading(false)

        }
        catch(error){
            console.error(error)
        }
       
    }

    useEffect(() => {
        getClientIdFromURL()
    }, [])

    return (
        <>
            <InfoPolicySelected customer={customer} />
            <TablePolicy handleSelectPolicy={handleSelectPolicy} isLoading={isLoading} policiesList={policiesList} />
        </>
    )
}

export default Policy
