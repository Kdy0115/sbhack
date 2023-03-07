import React from 'react';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import MatchingCard from './MatchingCard';
import MessageCard from './MessageCard';

const HomeContents: React.FC = () => {
    return (
        <React.Fragment>
        <CssBaseline />
            <Container maxWidth="xl" sx={{ mt: 12, mb: 12 }}>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <MatchingCard />
                  </Grid>
                    <Grid item xs={6}>
                      <MessageCard />
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    )
}

export default HomeContents;
