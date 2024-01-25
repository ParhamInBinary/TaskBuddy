import { Box, Button, styled } from '@mui/material';

const cubeValue = 0.618 ** 3;

export const SidebarWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  padding: 5,
  background: '#999999',
  width: `calc(100% * ${cubeValue})`,
  flexDirection: 'column',
  height: '100vh',
}));

export const CategoryBtn = styled(Button)(({ theme }) => ({
  flex: 1,
  padding: 10,
  color: '#FFF',
  background: '#2288FF',
  borderRadius: '2px',
}));

export const TaskList = styled(Box)(({ theme }) => ({
  height: '100%',
  gap: 10,
}));

export const ClearAllBtn = styled(Button)(({ theme }) => ({
  padding: 5,
  fontWeight: 600,
  color: '#FFF',
  background: '#FF1818',
  borderRadius: '2px',
}));
