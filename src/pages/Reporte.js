import React, { useState, useEffect } from "react"
import { AppBar, Toolbar, styled, useTheme } from '@mui/material'
import { Buffer } from 'buffer';
import { useRouter } from 'next/router';
import PdfViewer from "@/Components/PDF/PdfViewer";
import { useSwitch } from "@/Components/Context/contextSwitch";
import { variables } from "@/Components/Utils/ConfigEnv";

// import { initAxiosInterceptors } from 'utils/axiosConfig'
// import { useDialog } from 'context/DialogContext'
// import { useLoading } from 'context/LoadingContext'

// const AppBarStyled = styled(AppBar)(({ theme }) => {
//   const newStyles = admBarStyles(theme)
//   return {
//     ...newStyles.appBar,
//     ...newStyles.absolute,
//   }
// })

// const Container = styled('div')(({ theme }) => {
//   const newStyles = admBarStyles(theme)
//   return {
//     ...newStyles.flex
//   }
// })

// const NewDivContent = styled('div')(({ theme }) => {
//   const newStyles = admBarStyles(theme)
//   return {
//     ...newStyles.content
//   }
// })

// const Image = styled('img')(({ theme }) => {
//   const newStyles = admBarStyles(theme)
//   return {
//     ...newStyles.logo
//   }
// })

export default function ReportePage(props) {
    const router = useRouter();

    const {company} = useSwitch()
    const Urlgetted = router?.asPath
    const UrlSplitted = Urlgetted?.split('#');
    const idReporte = UrlSplitted[1]

    const [apiUrl, setApiUrl] = useState(null)
    const [pdfUrl, setPdfUrl] = useState(null)

    function setInitialApiUrl() {
        // if (idReporte && idReporte !== undefined) {
        //     setApiUrl(`reports/get/${idReporte}`)
        // }
         if (idReporte && idReporte  !== undefined) {
            setApiUrl(company ?  `${variables.oceanica}/asg-api/reports/get_url_from_report_run_id/${idReporte}` : `${variables.piramide}/asg-api/reports/get_url_from_report_run_id/${idReporte}`)
            // setApiUrl(`http://dev-segurospiramide.com/asg-api/reports/get_url_from_report_run_id/${idReporte}`)
        // } else if (params.urlReport && params.urlReport !== undefined) {
        //     setPdfUrl(Buffer.from(params.urlReport, 'base64').toString('utf-8'))
        // }
    }}

      useEffect(() => {
        // initAxiosInterceptors(dialog, loading)
        setInitialApiUrl()
      }, [])

    return (
        // <NewDivContent>
        //   <AppBarStyled>
        //     {/* <Toolbar sx={classes.container}> */}
        //       {/* <Container>

        //       </Container> */}
        //     {/* </Toolbar> */}
        //   </AppBarStyled>
        <>
            {(apiUrl || pdfUrl) && <PdfViewer apiUrl={apiUrl} pdfUrl={pdfUrl} />}
        </>
        // </NewDivContent>
    );
}
