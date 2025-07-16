import * as React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

export default function Alerts({ title, message }) {
  return (
    <Stack
      sx={{
        width: '100%',
        position: 'fixed',
        top: 20,
        right: 20,
        maxWidth: 400,
        zIndex: 9999,
      }}
      spacing={2}
    >
      <Alert severity="success" variant="filled">
        <AlertTitle>{title}</AlertTitle>
        {message}
      </Alert>
    </Stack>
  );
}
