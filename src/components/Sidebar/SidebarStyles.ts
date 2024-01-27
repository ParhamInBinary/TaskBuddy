import { Box, Button, styled } from '@mui/material';

const cubeValue = 0.618 ** 3;

export const SidebarWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  padding: 5,
  background: '#535353',
  width: `calc(100% * ${cubeValue})`,
  flexDirection: 'column',
  height: '100vh',
}));

export const TaskList = styled(Box)(({ theme }) => ({
  height: '100%',
  gap: 10,
}));

export const ClearAllBtn = styled(Button)(({ theme }) => ({
  fontWeight: 600,
  background: '#FF1818',
}));
