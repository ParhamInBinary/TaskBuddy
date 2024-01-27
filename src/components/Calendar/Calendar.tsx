import { NavigateBefore, NavigateNext } from '@mui/icons-material';
import { Box, Grid, Typography } from '@mui/material';
import { useMemo, useState } from 'react';

type GridItemType = {
  text?: string;
  day?: number;
  currentMonthIndex?: number;
};

export const Calendar = () => {
  const weekdaysCapitals = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  const today = new Date();
  const [currentMonthIndex, setCurrentMonthIndex] = useState(0);

  const handleSwitchMonth = (direction: string) => {
    setCurrentMonthIndex((prevIndex) =>
      direction === 'next' ? prevIndex + 1 : prevIndex - 1
    );
  };

  const getMonthName = (index: number) => {
    const date = new Date();
    date.setMonth(date.getMonth() + index);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
  };

  const renderDays = useMemo(() => {
    const firstDayOfMonth = new Date(
      today.getFullYear(),
      today.getMonth() + currentMonthIndex,
      1
    );
    const emptySquares = (firstDayOfMonth.getDay() + 6) % 7; // Adjust for Sunday being 0
    const daysInMonth = new Date(
      today.getFullYear(),
      today.getMonth() + currentMonthIndex + 1,
      0
    ).getDate();
    const calendar = [];

    for (let i = 0; i < emptySquares; i++) {
      calendar.push(<EmptyGridItem key={`empty-${i}`} />);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      calendar.push(
        <DayGridItem
          key={`day-${i}`}
          day={i}
          currentMonthIndex={currentMonthIndex}
        />
      );
    }

    return calendar;
  }, [currentMonthIndex]);

  return (
    <Box>
      <Box
        display="flex"
        width={'100%'}
        sx={{
          display: 'flex',
          width: '100%',
          justifyContent: 'space-between',
          padding: '0 10px',
        }}
      >
        <Typography>
          <NavigateBefore onClick={() => handleSwitchMonth('prev')} />
        </Typography>
        <Typography>{getMonthName(currentMonthIndex)}</Typography>
        <Typography>
          <NavigateNext onClick={() => handleSwitchMonth('next')} />
        </Typography>
      </Box>
      <Grid container columns={7} width="200px">
        {weekdaysCapitals.map((day, index) => (
          <GridItem key={`weekday-${index}`} text={day} />
        ))}
        {renderDays}
      </Grid>
    </Box>
  );
};

const GridItem = ({ text }: GridItemType) => (
  <Grid
    item
    xs={1}
    sm={1}
    md={1}
    lg={1}
    xl={1}
    sx={{ width: '1px', textAlign: 'center', color: '#000' }}
  >
    <Typography variant="caption">{text}</Typography>
  </Grid>
);

const EmptyGridItem = () => (
  <Grid item xs={1} sm={1} md={1} lg={1} xl={1} sx={{ textAlign: 'center' }}>
    <Typography variant="caption"></Typography>
  </Grid>
);

const DayGridItem = ({ day, currentMonthIndex }: GridItemType) => {
  const today = new Date();
  const isToday =
    today.getDate() === day &&
    today.getMonth() === today.getMonth() + currentMonthIndex!;
  return (
    <Grid item xs={1} sm={1} md={1} lg={1} xl={1} sx={{ textAlign: 'center' }}>
      <Typography variant="caption" sx={{ color: isToday ? 'red' : 'inherit' }}>
        {day}
      </Typography>
    </Grid>
  );
};
