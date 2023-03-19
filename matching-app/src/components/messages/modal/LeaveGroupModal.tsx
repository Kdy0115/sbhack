import React from 'react';
import { createTheme, Typography, Box, Grid, Button } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import Modal from '@mui/material/Modal';
import { hideLeaveGroupModal } from '../../../features/messages/MessageSlice';

const mdTheme = createTheme();

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };

const LeaveGroupModal: React.FC = () => {
    const { isShowModal } = useAppSelector((state) => state.message);
    const dispatch = useAppDispatch();

    return (
        <Modal
            open={isShowModal}
            onClose={() => { dispatch(hideLeaveGroupModal()); }}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Grid sx={{ height: 150 }}>
                    <Typography id="modal-modal-title" variant="h4" component="h2" align='center'>
                        グループを退出しますか？
                    </Typography>
                    <Typography id="modal-modal-title" variant="h6" component="h2" align='center'>
                        ※一度退出すると再入場できなくなります。
                    </Typography>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Box textAlign='center'>
                            <Button
                                size="large"
                                sx={{ width: '100%', height: '100%' }}
                            >
                                キャンセル
                            </Button>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box textAlign='center'>
                            <Button
                                size="large"
                                sx={{ width: '100%', height: '100%' }}
                            >
                                退出する
                            </Button>
                        </Box>
                    </Grid>                        
                </Grid>
            </Box>
        </Modal>
    );
}   

export default LeaveGroupModal;
