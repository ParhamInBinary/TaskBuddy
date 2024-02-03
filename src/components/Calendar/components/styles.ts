import { Box, styled } from '@mui/material';

export const MiniCalendarWeekdays = {
  textAlign: 'center',
  color: '#000',
  borderBottom: '1px solid #000',
  marginBottom: '5px',
};

export const RegularCalendarWeekdays = {
  textAlign: 'end',
  color: '#FFF',
  padding: '0 15px',
};

export const RegularCalendarWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  background: '#272727',
}));

export const RegularCalendarHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '10px 20px',
}));

export const RegularDayGridItemStyle = {
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'start',
  textAlign: 'end',
  padding: '5px 5px',
  border: '.1px solid #FFF',
  position: 'relative',
  '&:hover': {
    boxShadow: 'inset 1px 1px 7px #FFF',
    cursor: 'pointer'
  },
};

export const MiniDayGridItemStyle = {
  textAlign: 'center',
  padding: '3px',
  cursor: 'pointer',
  borderRadius: '50px',
};

export const IsTodayGridItemStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'red',
  width: '25px',
  borderRadius: '50px',
  color: '#FFF',
};

export const isTaskForTodayStyle = {
  position: 'absolute',
  width: '10px',
  height: '10px',
  background: '#1565c0',
  borderRadius: '10px',
  bottom: 10,
  left: 10,
};
