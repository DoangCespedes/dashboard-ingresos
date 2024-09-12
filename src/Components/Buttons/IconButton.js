import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function IconButtons() {
    return (
        <>
            <IconButton aria-label="Cliente" color='red'>
                <AccountCircleIcon color='red'/>
            </IconButton>
        </>

    );
}
