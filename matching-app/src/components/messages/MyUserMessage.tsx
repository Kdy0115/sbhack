import React from 'react';
import { ListItemText, Box, Typography, Grid, ListItem } from '@mui/material';
import { UserMessage } from '../../app/entities';

interface MyUserMessageProps {
    userMessage: UserMessage
}
const MyUserMessage: React.FC<MyUserMessageProps> = (myUserMessageProps: MyUserMessageProps) => {

    if(myUserMessageProps.userMessage.user === undefined) {
        return <Box />;
    }

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
                <ListItem alignItems="flex-start">
                    <Box>
                        <ListItemText 
                            primary={<Typography />}
                            secondary={
                                <React.Fragment>
                                  <Typography
                                    sx={{ display: 'inline' }}
                                    variant="body1"
                                    color="text.primary"
                                  ></Typography>
                                </React.Fragment>
                            }
                        />
                        <Typography color="text.secondory" variant='body2' />
                    </Box>
                </ListItem>
            </Grid>
            <Grid item xs={12} md={6}>
                <ListItem sx={{display:'flex', justifyContent:'flex-end'}}>
                    <Box>
                        <ListItemText 
                            primary={
                                <React.Fragment>
                                    <Typography />
                                </React.Fragment>
                            }
                            secondary={
                                <React.Fragment>
                                  <Typography
                                    sx={{ display: 'inline' }}
                                    variant="body1"
                                    color="text.primary"
                                  >
                                        { myUserMessageProps.userMessage.message }
                                    </Typography>
                                </React.Fragment>
                            }
                        />
                        <Typography color="text.secondory" variant='body2' >{ myUserMessageProps.userMessage.datetime }</Typography>
                    </Box>
                </ListItem>
            </Grid>
        </Grid>
    );
}   

export default MyUserMessage;