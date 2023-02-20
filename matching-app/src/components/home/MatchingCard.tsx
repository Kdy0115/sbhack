import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import GroupsIcon from '@mui/icons-material/Groups';
import { blue } from '@mui/material/colors';

const MatchingCard: React.FC = () => {
    return (
        // <Card sx={{ maxWidth: 600 }}>
        <Card>
            <CardActionArea>
              <GroupsIcon sx={{ fontSize: 150,}}/>
              <CardContent>
                <Typography gutterBottom variant="h2" component="div">
                  Matching
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    <Typography>マッチングを開始します。</Typography>
                    <Typography>途中で中断できます。</Typography>
                    <Typography>退出すると再度マッチングできます。</Typography>
                </Typography>
              </CardContent>
            </CardActionArea>
        </Card>            
    )
}

export default MatchingCard;