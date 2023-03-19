import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import Header from '../header/Header';
import MessagesList from './MessagesList';
import { useAppSelector } from '../../app/hooks';

const mdTheme = createTheme();

const Messages: React.FC = () => {
    const { entities } = useAppSelector((state) => state.message);
    const { newMessageRequest } = entities;

    return (
        <ThemeProvider theme={mdTheme}>
            <Header />
            <MessagesList />
        </ThemeProvider>
    );
}   

export default Messages;
