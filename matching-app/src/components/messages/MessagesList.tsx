import { List, Box, Paper, Grid } from '@mui/material';
import React, { useEffect, useRef } from 'react';
import { useAppSelector } from '../../app/hooks';
import MessagesContents from './MessagesContents';
import MessageTools from './MessageTools';

const MessagesList: React.FC = () => {
    // const dispatch = useAppDispatch();

    const { entities } = useAppSelector((state) => state.message);
    const { messages } = entities;
    const messagesEndRef = useRef<HTMLDivElement>(null);


    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    return (
        <Box sx={{ mt: 2 }}>
            <Grid container alignItems='center' justifyContent='center'>
                <Paper style={{maxHeight: 550, overflow: 'auto', padding: 30, width:'100%'}}>
                    <List>
                        {messages.map((item) => (
                            <MessagesContents userMessage={item}/>
                        ))}
                    </List>
                </Paper>
                <div ref={messagesEndRef} />
                <MessageTools />
            </Grid>
        </Box>
    );
}   

export default MessagesList;
