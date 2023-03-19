// import { Grid, ListItem } from '@mui/material';
import { Box } from '@mui/material';
import React from 'react';
import { UserMessage } from '../../app/entities';
import MyUserMessage from './MyUserMessage';
import OtherUserMessage from './OtherUserMessage';

interface MessageContentsProps {
    userMessage: UserMessage;
}

const MessagesContents: React.FC<MessageContentsProps> = (messageContentsProps:MessageContentsProps) => {

    const userId:number = 9;

    const propsUserId = messageContentsProps.userMessage.user.id;

    if(userId == propsUserId) {
        return <MyUserMessage userMessage={messageContentsProps.userMessage} />;
    }

    return <OtherUserMessage userMessage={messageContentsProps.userMessage}/>;
}   

export default MessagesContents;
