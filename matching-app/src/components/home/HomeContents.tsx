import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

const HomeContents: React.FC = () => {
    return (
        <React.Fragment>
        <CssBaseline />
            <Container maxWidth="xl">
                <Grid container spacing={2}>
                    <Grid xs={5}>
                        <Card sx={{ maxWidth: 600 }}>
                            <CardActionArea>
                              <CardMedia
                                component="img"
                                height="140"
                                image="/static/images/cards/contemplative-reptile.jpg"
                                alt="green iguana"
                              />
                              <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                  Lizard
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                  Lizards are a widespread group of squamate reptiles, with over 6,000
                                  species, ranging across all continents except Antarctica
                                </Typography>
                              </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid xs={5}>
                        <Card sx={{ maxWidth: 600 }}>
                            <CardActionArea>
                              <CardMedia
                                component="img"
                                height="140"
                                image="/static/images/cards/contemplative-reptile.jpg"
                                alt="green iguana"
                              />
                              <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                  Lizard
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                  Lizards are a widespread group of squamate reptiles, with over 6,000
                                  species, ranging across all continents except Antarctica
                                </Typography>
                              </CardContent>
                            </CardActionArea>
                        </Card>            
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    )
}

export default HomeContents;