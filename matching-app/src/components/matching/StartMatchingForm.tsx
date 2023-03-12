import React from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { changeMatchingNumber, changeMatchingTime, startMatching } from '../../features/matching/MatchingSlice';
import Grow from '@mui/material/Grow';
import Slide from '@mui/material/Slide';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
// const MenuProps = {
//   PaperProps: {
//     style: {
//       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//       width: 250,
//     },
//   },
// };

const matchingNumbers = [
    "1",
    "2",
    "3",
    "4",
    "5"
];

const matchingTimes = [
    '10:00',
    '10:30',
    '11:00',
    '11:30',
    '12:00',
    '12:30',
    '13:00',
    '13:30',
    '14:00'
];

const MatchingForm: React.FC = () => {    
    const dispatch = useAppDispatch();
    const { entities, isBackMatching } = useAppSelector((state) => state.matching);
    const { matchingInfo } = entities;
    const theme = useTheme();

    if(matchingInfo === undefined){
      return <div />;
    }

    if(isBackMatching){
      return (
        <Slide 
          direction="right" 
          in={isBackMatching} 
          mountOnEnter 
          unmountOnExit
          {...(true ? { timeout: 500 } : {})}
        >
          <Container>
              <Box sx={{ mt:10 }}>
                  <FormControl fullWidth>
                      <InputLabel id="matching-number-label">人数</InputLabel>
                      <Select
                        labelId="matching-number-select-label"
                        id="matching-number-select"
                        value={matchingInfo.number}
                        label="number"
                        onChange={(event) => {
                          const {value} = event.target;
                          dispatch(changeMatchingNumber(value));
                        }}
                      >
                          {matchingNumbers.map((number) => (
                            <MenuItem
                              key={number}
                              value={number}
                            >
                              {number}
                            </MenuItem>
                          ))}
                      </Select>
                  </FormControl>                
              </Box>
              <Box sx={{ mt:10 }}>
                  <FormControl fullWidth>
                      <InputLabel id="matching-time-label">時間</InputLabel>
                      <Select
                        labelId="matching-time-select-label"
                        id="matching-time-select"
                        value={matchingInfo.time}
                        label="time"
                        onChange={(event) => {
                          const {value} = event.target;
                          dispatch(changeMatchingTime(value));
                        }}
                      >
                          {matchingTimes.map((time) => (
                            <MenuItem
                              key={time}
                              value={time}
                            >
                              {time}
                            </MenuItem>
                          ))}
                      </Select>
                  </FormControl>                
              </Box>            
              <Box sx={{ mt:10 }}>
                <Button variant="contained" onClick={() => dispatch(startMatching(matchingInfo))}>Start</Button>
              </Box>
          </Container>   
        </Slide>       
      );      
    }

    return (
      <Grow
      in={true}
      style={{ transformOrigin: '0 0 0' }}
      {...(true ? { timeout: 1000 } : {})}
      >
        <Container>
            <Box sx={{ mt:10 }}>
                <FormControl fullWidth>
                    <InputLabel id="matching-number-label">人数</InputLabel>
                    <Select
                      labelId="matching-number-select-label"
                      id="matching-number-select"
                      value={matchingInfo.number}
                      label="number"
                      onChange={(event) => {
                        const {value} = event.target;
                        dispatch(changeMatchingNumber(value));
                      }}
                    >
                        {matchingNumbers.map((number) => (
                          <MenuItem
                            key={number}
                            value={number}
                          >
                            {number}
                          </MenuItem>
                        ))}
                    </Select>
                </FormControl>                
            </Box>
            <Box sx={{ mt:10 }}>
                <FormControl fullWidth>
                    <InputLabel id="matching-time-label">時間</InputLabel>
                    <Select
                      labelId="matching-time-select-label"
                      id="matching-time-select"
                      value={matchingInfo.time}
                      label="time"
                      onChange={(event) => {
                        const {value} = event.target;
                        dispatch(changeMatchingTime(value));
                      }}
                    >
                        {matchingTimes.map((time) => (
                          <MenuItem
                            key={time}
                            value={time}
                          >
                            {time}
                          </MenuItem>
                        ))}
                    </Select>
                </FormControl>                
            </Box>            
            <Box sx={{ mt:10 }}>
              <Button variant="contained" onClick={() => dispatch(startMatching(matchingInfo))}>Start</Button>
            </Box>
        </Container>   
      </Grow>       
    );
}

export default MatchingForm;