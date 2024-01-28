import { Box, Button, styled } from '@mui/material';

const cubeValue = 0.618 ** 3;

export const SidebarWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  padding: 5,
  background: '#535353',
  width: `calc(100% * ${cubeValue})`,
  flexDirection: 'column',
  height: '100vh',
  gap: '5px',
}));

export const TaskListContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  maxHeight: '95%',
  gap: 10,
}));

export const TaskList = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
  overflowY: 'scroll',
}));

export const ClearAllBtn = styled(Button)(({ theme }) => ({
  fontWeight: 600,
  background: '#FF1818',
}));
