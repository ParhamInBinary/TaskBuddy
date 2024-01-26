import { Box, styled } from '@mui/material';

export const TaskModal = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  background: '#999999',
  padding: 10,
  color: '#FFF',  
}));
