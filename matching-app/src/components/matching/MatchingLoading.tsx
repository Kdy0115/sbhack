import React from 'react';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import { backStartMatching } from '../../features/matching/MatchingSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import Grow from '@mui/material/Grow';


const MatchingLoading: React.FC = () => {    
    const dispatch = useAppDispatch();
    const { isMatching } = useAppSelector((state) => state.matching);
    return (
        <Grow
          in={isMatching}
          style={{ transformOrigin: '0 0 0' }}
          {...(isMatching ? { timeout: 1000 } : {})}
        >
            <Container> 
                <Box sx={{ mt:10, width: '100%' }}>
                    <Typography variant="h3" gutterBottom>
                        マッチング中
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex' }}>
                        <CircularProgress />
                </Box>            
                <Box sx={{ mt:10 }}>
                    <Button variant="contained" onClick={() => dispatch(backStartMatching())}>中断</Button>
                </Box>
            </Container>  
        </Grow> 
    );
}

export default MatchingLoading;