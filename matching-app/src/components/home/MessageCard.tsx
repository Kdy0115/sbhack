import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import InsertCommentIcon from '@mui/icons-material/InsertComment';

const MessageCard: React.FC = () => {
    return (
        // <Card sx={{ maxWidth: 600 }}>
          <Card>
            <CardActionArea>
            <InsertCommentIcon sx={{ fontSize: 150,}}/>
              <CardContent>
                <Typography gutterBottom variant="h2" component="div">
                  Messages
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  <Typography>マッチングしたユーザー同士でメッセージをやり取りします。</Typography>
                      <Typography>マッチングしたユーザーのみしかメッセージは送れません。</Typography>
                      <Typography>一度チャットルームを退出すると再入場できません。</Typography>
                  </Typography>
              </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default MessageCard;
