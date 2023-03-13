import React from "react";

import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from "../header/Header";
import MatchingUser from "./MatchingUser";
import ConfirmTools from "./ConfirmTools";

const mdTheme = createTheme();

const ConfirmMatching: React.FC = () => {
    return (      
        <ThemeProvider theme={mdTheme}>
            <Header />
            <MatchingUser />
            <ConfirmTools />
        </ThemeProvider>
    )
};

export default ConfirmMatching;
