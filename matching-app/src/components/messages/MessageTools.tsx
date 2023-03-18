import React from 'react';
import { Grid, TextField, Fab, Paper } from '@mui/material';
import { Send } from '@mui/icons-material';

const MessageTools: React.FC = () => {

    return (
        <Grid container style={{padding: '1%', width: '100%'}} alignItems='center' justifyContent='center' >
            <Grid xs={10}>
                <TextField maxRows={1} id="filled-multiline-flexible" label="Type Something" fullWidth multiline />
            </Grid>
            <Grid xs={1} alignItems='center' justifyContent='center'  sx={{display:'flex', justifyContent:'flex-end'}} >
                <Fab color="primary" aria-label="add"><Send /></Fab>
            </Grid>
        </Grid>
    );
} 

export default MessageTools;
