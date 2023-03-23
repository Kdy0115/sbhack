import React from "react";

import Header from "../header/Header";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MatchingForm from "./StartMatchingForm"; 
import MatchingLoading from "./MatchingLoading";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

const mdTheme = createTheme();

const Matching: React.FC = () => {
    const dispatch = useAppDispatch();
    const { isMatching} = useAppSelector((state) => state.matching);

    if(isMatching) {
        return (
            <ThemeProvider theme={mdTheme}>
                <MatchingLoading />
            </ThemeProvider>
        );
    }
    return (      
        <ThemeProvider theme={mdTheme}>
            <Header />
            <MatchingForm />
        </ThemeProvider>
    )
};

export default Matching;
