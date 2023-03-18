import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import Header from '../header/Header';
import MessagesList from './MessagesList';

const mdTheme = createTheme();

const Messages: React.FC = () => {

    return (
        <ThemeProvider theme={mdTheme}>
            <Header />
            <MessagesList />
        </ThemeProvider>
    );
}   

export default Messages;
