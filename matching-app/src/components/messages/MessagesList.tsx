import { Padding } from '@mui/icons-material';
import { List, Box, Paper, Grid } from '@mui/material';
import React from 'react';
import { UserMessage } from '../../app/entities';
import MessagesContents from './MessagesContents';
import MessageTools from './MessageTools';

interface MessageListsProps {
    dataSource: UserMessage[];
}

const dummyDataList = [
    {
        user: {
            id              : 8,
            email           : "",
            gender          : "",
            username        : "User1",
            first_name      : "",
            last_name       : "",
            branch          : "",
            age             : "",
            grade           : 0,
            job             : "",
            department      : "",
            project         : "",
            introduction    : "",
            hobby           : "",
            matching_status : "",
            profile         : "",     
        },
        message: 'はじめまして！○○部××課の△△です！本日はよろしくお願いします！',
        datetime: '2023/03/20 13:20',
        noData: false,
    },
    {
        user: {
            id              : 7,
            email           : "",
            gender          : "",
            username        : "User2",
            first_name      : "",
            last_name       : "",
            branch          : "",
            age             : "",
            grade           : 0,
            job             : "",
            department      : "",
            project         : "",
            introduction    : "",
            hobby           : "",
            matching_status : "",
            profile         : "",     
        },
        message: 'みなさん初めまして！△△さんありがとうございます！こちらこそよろしくお願いします。',
        datetime: '2023/03/20 13:20',
        noData: false,
    },    
    {
        user: {
            id              : 8,
            email           : "",
            gender          : "",
            username        : "User1",
            first_name      : "",
            last_name       : "",
            branch          : "",
            age             : "",
            grade           : 0,
            job             : "",
            department      : "",
            project         : "",
            introduction    : "",
            hobby           : "",
            matching_status : "",
            profile         : "",     
        },
        message: '何分にどこに集まりますか？',
        datetime: '2023/03/20 13:20',
        noData: false,
    },
    {
        user: {
            id              : 9,
            email           : "",
            gender          : "",
            username        : "User1",
            first_name      : "",
            last_name       : "",
            branch          : "",
            age             : "",
            grade           : 0,
            job             : "",
            department      : "",
            project         : "",
            introduction    : "",
            hobby           : "",
            matching_status : "",
            profile         : "",     
        },
        message: 'はじめまして！××です！動かしていただきありがとうございます！13:30に30Fでいかがですか？',
        datetime: '2023/03/20 13:20',
        noData: false,
    },       
    {
        user: {
            id              : 12,
            email           : "",
            gender          : "",
            username        : "User4",
            first_name      : "",
            last_name       : "",
            branch          : "",
            age             : "",
            grade           : 0,
            job             : "",
            department      : "",
            project         : "",
            introduction    : "",
            hobby           : "",
            matching_status : "",
            profile         : "",     
        },
        message: 'はじめまして！××です！すみません。MTGが長引いていました。。。みなさんありがとうございます。少し遅れて参加しますね！',
        datetime: '2023/03/20 13:25',
        noData: false,
    },               
]
const MessagesList: React.FC = () => {

    return (
        <Box sx={{ mt: 2 }}>
            <Grid container alignItems='center' justifyContent='center'>
                <Paper style={{maxHeight: 550, overflow: 'auto', padding: 30, width:'100%'}}>
                    <List>
                        {dummyDataList.map((item) => (
                            <MessagesContents userMessage={item}/>
                        ))}
                    </List>
                </Paper>
                <MessageTools />
            </Grid>
        </Box>
    );
}   

export default MessagesList;
