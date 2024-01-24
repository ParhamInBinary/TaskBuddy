import { Box, Button, styled } from '@mui/material';

const cubeValue = 0.618 ** 3;

export const SidebarWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  padding: 10,
  background: '#999999',
  width: `calc(100% * ${cubeValue})`,
  //   height: '100vh',
}));

export const SidebarHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  height: '60px',
  gap: 10,
}));

export const CategoryBtn = styled(Button)(({ theme }) => ({
  flex: 1,
  padding: 10,
  height: '50px',
  color: '#FFF',
  background: 'linear-gradient(180deg, #004DA7 0%, #499DFF 100%)',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 1px 4px #DDDDDD',
  borderRadius: '10px',
}));

export const TaskModalBtn = styled(Button)(({ theme }) => ({
  padding: 10,
  width: '60px',
  height: '60px',
  background: 'linear-gradient(180deg, #9C9C9C 0%, #DDDDDD 100%)',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 2px 4px #DDDDDD',
  borderRadius: '10px',
}));
