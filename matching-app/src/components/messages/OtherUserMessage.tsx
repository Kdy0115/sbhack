import React from 'react';
import { ListItemText, Box, Typography, Grid, ListItem } from '@mui/material';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { UserMessage } from '../../app/entities';

interface OtherUserProps {
    userMessage: UserMessage
};

const OtherUserMessage: React.FC<OtherUserProps> = (userMessageProps:OtherUserProps) => {

    if (userMessageProps.userMessage.user === undefined){
        return <Box />;
    }

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
                <ListItem alignItems="flex-start">
                    <Box>
                        <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                        </ListItemAvatar>
                        <ListItemText 
                            primary={
                                <React.Fragment>
                                    <Typography>{ userMessageProps.userMessage.user.username }</Typography>
                                </React.Fragment>
                            }
                            secondary={
                                <React.Fragment>
                                  <Typography
                                    sx={{ display: 'inline' }}
                                    variant="body1"
                                    color="text.primary"
                                  >
                                    { userMessageProps.userMessage.message }
                                  </Typography>
                                </React.Fragment>
                            }
                        />
                        <Typography color="text.secondory" variant='body2'>{ userMessageProps.userMessage.datetime }</Typography>
                    </Box>
                </ListItem>
            </Grid>
            <Grid item xs={12} md={6}>
                <ListItem sx={{display:'flex', justifyContent:'flex-end'}}>
                    <Box>
                        <ListItemText 
                            primary={<Typography />}
                            secondary={
                                <React.Fragment>
                                  <Typography
                                    sx={{ display: 'inline' }}
                                    variant="body1"
                                    color="text.primary"
                                  />
                                </React.Fragment>
                            }
                        />
                        <Typography color="text.secondory" variant='body2' />
                    </Box>
                </ListItem>
            </Grid>
        </Grid>            
    );
}   

export default OtherUserMessage;
