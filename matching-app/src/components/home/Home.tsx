import React from "react";

import Header from "../header/Header";
import HomeContents from "./HomeContents";
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';

const mdTheme = createTheme();

const Home: React.FC = () => {
    return (      
        <ThemeProvider theme={mdTheme}>
            <Header />
            <HomeContents />
        </ThemeProvider>
    )
};

export default Home;