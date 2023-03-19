import React from 'react';
import { Grid, TextField, Fab, Paper } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Send } from '@mui/icons-material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { changeNewMessage, sendMessage, showLeaveGroupModal } from '../../features/messages/MessageSlice';

const MessageTools: React.FC = () => {
    const dispatch = useAppDispatch();
    const { entities } = useAppSelector((state) => state.message);
    const { newMessageRequest } = entities;

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
        <Grid container style={{padding: '1%', width: '100%'}} alignItems='center' justifyContent='center' >
            <Grid xs={1} sx={{display:'flex', justifyContent:'flex-end'}}>
                <div>
                    <IconButton
                      aria-label="more"
                      id="long-button"
                      aria-controls={open ? 'long-menu' : undefined}
                      aria-expanded={open ? 'true' : undefined}
                      aria-haspopup="true"
                      onClick={handleClick}
                    >
                      <MoreVertIcon />
                    </IconButton>
                    <Menu
                      id="long-menu"
                      MenuListProps={{
                        'aria-labelledby': 'long-button',
                      }}
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      PaperProps={{
                        style: {
                          maxHeight: 40 * 4.5,
                          width: '20ch',
                        },
                      }}
                    >
                    <MenuItem 
                        key="leave" 
                        onClick={ () => { 
                            dispatch(showLeaveGroupModal()); 
                        }}
                    >
                      退出
                    </MenuItem>
                    </Menu>
                </div>
            </Grid>
            <Grid xs={9}>
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
