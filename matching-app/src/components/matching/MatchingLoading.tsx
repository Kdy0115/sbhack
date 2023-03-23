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
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 30 }}>
                    <CircularProgress size={200}/>
                    <Box
                        sx={{ mt: 11 }}
                        position="absolute"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Typography variant="h5" component="div" color="textSecondary">matching...</Typography>
                    </Box>      
                </Box>            
                <Box sx={{ mt:30, justifyContent: 'center', display: 'flex' }}>
                    <Button variant="text"  color='warning' onClick={() => dispatch(backStartMatching())}>Reset</Button>
                </Box>
            </Container>  
        </Grow> 
    );
}

export default MatchingLoading;