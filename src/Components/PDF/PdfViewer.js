import React, { useState, useEffect } from "react"
import Axios from 'axios'
import GridContainer from "./material-kit-pro-react/components/Grid/GridContainer";
import GridItem from "./material-kit-pro-react/components/Grid/GridItem";
import Card from "./material-kit-pro-react/components/Card/Card";
import CardBody from "./material-kit-pro-react/components/Card/CardBody";
import { useBackdrop } from "../Context/contextBackdrop"

export default function PdfViewer(props) {
  const { setOpenBackdrop } = useBackdrop();
  const [blobUrl, setBlobUrl] = useState(false)
  const [message, setMessage] = useState('Por favor espere un momento...')
  const { apiUrl, params, pdfUrl } = props
  function toBlob(buffer) {
    const pdfBlob = new Blob([buffer], { type: 'application/pdf' })
    const fileURL = URL.createObjectURL(pdfBlob);
    setBlobUrl(fileURL)
  }
  const getReport = async () => {
    setOpenBackdrop(true)
    if (pdfUrl && pdfUrl !== undefined) {
      setBlobUrl(pdfUrl)
    } else {
      const bodyParams = (params) ? params : {}
      try {
        const response = await Axios.post(apiUrl, bodyParams)
        toBlob(response.data)
        URL.revokeObjectURL(blobUrl)
        setOpenBackdrop(false)
      } catch (e) {
        setMessage('El documento no pudo ser cargado')
        setBlobUrl(null)
      }
    }
  }
  useEffect(() => {
    getReport()
  }, [])
  return (
    <>
      {
        blobUrl
          ? <iframe
            src={blobUrl}
            frameBorder="0"
            style={{ style: "overflow:hidden;height:100%;width:100%", width: '100%', height: '100vh' }}
          />
          : <GridContainer
            justify="center"
            direction="row"
            alignItems="center"
          >
            <GridItem xs={8} sm={6} md={4} lg={3} style={{ textAlign: "center" }}>
              <Card>
                <CardBody>
                  <h4
                  >{message}</h4>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
      }
    </>
  );
}
