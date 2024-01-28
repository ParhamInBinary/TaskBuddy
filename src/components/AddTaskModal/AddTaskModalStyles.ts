import { Box, styled } from '@mui/material';

export const TaskModal = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  background: '#F9F9F9',
  padding: 20,
  color: '#000',
  borderRadius: '5px',
}));
