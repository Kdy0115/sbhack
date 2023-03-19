import React from 'react';
import { Grid, TextField, Fab, Paper } from '@mui/material';
import { Send } from '@mui/icons-material';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { changeNewMessage, sendMessage } from '../../features/messages/MessageSlice';

const MessageTools: React.FC = () => {
    const dispatch = useAppDispatch();
    const { entities } = useAppSelector((state) => state.message);
    const { newMessageRequest } = entities;
    console.log('aiueo')
    console.log(newMessageRequest);

    return (
        <Grid container style={{padding: '1%', width: '100%'}} alignItems='center' justifyContent='center' >
            <Grid xs={10}>
                <TextField 
                    maxRows={1} 
                    id="filled-multiline-flexible" 
                    label="Type Something" 
                    fullWidth multiline
                    value={ newMessageRequest.message }
                    onChange={(event) => {
                        const {value} = event.target;
                        dispatch(changeNewMessage(value));
                      }}     
                />
            </Grid>
            <Grid xs={1} alignItems='center' justifyContent='center'  sx={{display:'flex', justifyContent:'flex-end'}} >
                <Fab color="primary" aria-label="add">
                    <Send 
                        onClick={() => {
                            dispatch(sendMessage(newMessageRequest));
                        }}
                    />
                </Fab>
            </Grid> 
        </Grid>
    );
} 

export default MessageTools;
