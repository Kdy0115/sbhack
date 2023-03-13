import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const ConfirmTools: React.FC = () => {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained">確定</Button>
      <Button variant="text">中断</Button>
    </Stack>
  );
}

export default ConfirmTools;