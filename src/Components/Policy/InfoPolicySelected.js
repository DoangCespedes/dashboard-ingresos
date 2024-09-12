import React from 'react'
import CardContainer from '../CardContainer/CardContainer'
import Person2Icon from '@mui/icons-material/Person2';
import { useRouter } from 'next/router';
import GobackButton from '../Buttons/GobackButton';
import { VerifyNullUndefinedValue } from '../Utils/Utils';
import styles from "./Policy.module.scss"

const InfoPolicySelected = ({customer}) => {
    const router = useRouter();
    const handleBack = () => {
        router.push(`/Cliente/Cliente`)
    }
    return (
        <div>
            <CardContainer body={
                <>
                <div className={styles.container_info_selected}>
                    <div>
                        <span>Identificacion :  {`${VerifyNullUndefinedValue(customer?.TIPOID)}-${VerifyNullUndefinedValue(customer?.NUMID)}`}</span> <br></br>
                        <span>Nombre :  {`${VerifyNullUndefinedValue(customer?.NOMTER1)} ${VerifyNullUndefinedValue(customer?.APETER1)}`} </span><br></br>
                        <span>Email : {`${VerifyNullUndefinedValue(customer?.EMAIL)}`}</span><br></br>
                        <span>Teléfono : {`${VerifyNullUndefinedValue(customer?.CODAREA1)}-${VerifyNullUndefinedValue(customer?.TELEF1)}`}</span><br></br> 
                    </div>
                    <div>
                        {customer?.INDCLIVIP === 'S' && <div className={styles.parpadea_texto_rojo} >CLIENTE <br /> VIP</div>}
                        
                        
                                            </div>

                </div>
                    
                        <GobackButton Goback={handleBack}/>                             
                </>
            }
                title="Datos del Asegurado"
                icon={<Person2Icon />}
            />
        </div>
    )
}

export default InfoPolicySelected
