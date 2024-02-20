import styled from "styled-components";
import { ToastContainer } from 'react-toastify';
import { theme } from "@config/theme";

export const StyledPopUp = styled(ToastContainer)`
    &&&.Toastify__toast-container {
        
    }
    .Toastify__toast {
        border-radius: 25px;
        padding-right: 12px;
    }
    .Toastify__toast-theme--light {
        background: ${theme.secondary};
        color: ${theme.primary};
    }
    .Toastify__close-button > svg {
        color: ${theme.primary};
    }
`