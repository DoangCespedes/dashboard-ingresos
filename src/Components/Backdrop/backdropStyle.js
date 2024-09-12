import styled from "styled-components";
import CircularProgress from '@mui/material/CircularProgress';


export const Logo = styled.img`
position: absolute;
width: 60px;
height: 60px;
animation: animate 3s linear infinite;

@keyframes animate{
    0%{
        width: 60px;
    height: 60px;
    }
    40%{
        width: 20px;
        height: 20px;
    }
    80%{
        width: 60px;
        height: 60px;
    }
    100%{
        width: 40px;
        height: 40px;
    }
}
`;

export const ProgressCircular = styled(CircularProgress)`
/* .MuiCircularProgress-root{ */
    width: 100px !important;
    height: 100px !important;
/* } */
`
