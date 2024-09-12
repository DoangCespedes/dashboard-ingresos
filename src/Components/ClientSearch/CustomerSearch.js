
"use client"

import styles from "./CustomerSearch.module.scss"
import React from 'react'
import CustomerIdentification from './CustomerIdentification'
import InputController from '../Controllers/InputController'
import CardContainer from "../CardContainer/CardContainer"
import Person2Icon from '@mui/icons-material/Person2';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import { useSwitch } from "@/Components/Context/contextSwitch";


export default function CustomerSearch({ index, dataForm, showForm, onSubmit }) {
    const {company} = useSwitch()

    const BootstrapButton = styled(Button)({
        boxShadow: 'none',
        textTransform: 'none',
        fontSize: 16,
        padding: '6px 12px',
        border: '1px solid',
        lineHeight: 1.5,
        backgroundColor: company ? 'rgb(70, 174, 185)' : 'rgb(205, 93, 93)',
        // borderColor: '#0063cc',
        fontFamily: "sans-serif",
        fontWeight: 700,
        '&:hover': {
          backgroundColor:  company ? '#156673' : "#b34c42",
          // borderColor: '#0063cc',
          boxShadow: 'none',
        },
        // '&:active': {
        //   boxShadow: 'none',
        //   backgroundColor: '#0062cc',
        //   borderColor: '#005cbf',
        // },
        // '&:focus': {
        //   boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
        // },
      });

    const { handleSubmit, control } = dataForm

    const onSearch = (data) => {
        onSubmit(data)
    }


    return (
        <form onSubmit={handleSubmit(onSearch)} noValidate>
            <div className={styles.container_client_search}>
                <CardContainer body={
                    <>
                        <CustomerIdentification
                            index={index}
                            customerType={index}
                            control={control}
                            required={false}
                        />
                        <InputController
                            control={control}
                            label="Nombres y/o Apellidos"
                            name={`p_names_${index}`}
                            fullWidth
                            required={false}
                        />
                        <InputController
                            control={control}
                            label="Nro. de Placa"
                            name={`p_license_plate_${index}`}
                            fullWidth
                            style={{marginBottom: "10px"}}
                            required={false}
                        />
                        <div className= {styles.container_button_search}>
                            <BootstrapButton style={{fontSize: "10px",width: "100%"}} color="error" variant="contained" type="submit" endIcon={<SearchIcon />} >
                                Buscar
                            </BootstrapButton>
                        </div>
                    </>

                } title="Cliente" icon={<Person2Icon />} />
            </div>
        </form>
    )
}
