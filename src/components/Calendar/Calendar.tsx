import { NavigateBefore, NavigateNext } from '@mui/icons-material';
import { Box, Button, ButtonGroup, Grid, Typography } from '@mui/material';
import { useMemo, useState } from 'react';

import { useTaskContext } from '../../context';
import {
  CalendarVaiant,
  DayGridItem,
  EmptyGridItem,
  GridItem,
  MonthSwitchDirection,
  RegularCalendarHeader,
  RegularCalendarWrapper,
} from './components';

interface ICalendar {
  variant: string;
}

export const Calendar = ({ variant }: ICalendar) => {
  const weekdaysCapitals =
    variant === CalendarVaiant.MINI
      ? ['M', 'T', 'W', 'T', 'F', 'S', 'S']
      : ['Mon', 'Tus', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const today = new Date();
  const [currentMonthIndex, setCurrentMonthIndex] = useState(0);

  const handleSwitchMonth = (direction: MonthSwitchDirection) => {
    setCurrentMonthIndex((prevIndex) =>
      direction === MonthSwitchDirection.NEXT ? prevIndex + 1 : prevIndex - 1
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
      calendar.push(<EmptyGridItem key={`empty-${i}`} variant={variant} />);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      calendar.push(
        <DayGridItem
          key={`day-${i}`}
          day={i}
          currentMonthIndex={currentMonthIndex}
          variant={variant}
        />
      );
    }

    return calendar;
  }, [currentMonthIndex]);

  /* =================================================== */
  /* :::::::::::::::: ADD TASK CALENDAR :::::::::::::::: */
  /* =================================================== */

  if (variant === CalendarVaiant.MINI) {
    return (
      <Box>
        <Box
          sx={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between',
            padding: '0 10px',
          }}
        >
          <Typography sx={{ cursor: 'pointer' }}>
            <NavigateBefore
              onClick={() => handleSwitchMonth(MonthSwitchDirection.PREV)}
            />
          </Typography>
          <Typography>{getMonthName(currentMonthIndex)}</Typography>
          <Typography sx={{ cursor: 'pointer' }}>
            <NavigateNext
              onClick={() => handleSwitchMonth(MonthSwitchDirection.NEXT)}
            />
          </Typography>
        </Box>
        <Grid container columns={7} width="200px">
          {weekdaysCapitals.map((day, index) => (
            <GridItem key={`weekday-${index}`} text={day} variant={variant} />
          ))}
          {renderDays}
        </Grid>
      </Box>
    );
  }

  /* =================================================== */
  /* :::::::::::::::: HOMEPAGE CALENDAR :::::::::::::::: */
  /* =================================================== */

  if (variant === CalendarVaiant.REGULAR) {
    return (
      <RegularCalendarWrapper>
        <RegularCalendarHeader>
          <Typography variant="h2" color={'#FFF'}>
            <span style={{ fontWeight: '600' }}>
              {getMonthName(currentMonthIndex).split(' ')[0]}
            </span>{' '}
            <span>{getMonthName(currentMonthIndex).split(' ')[1]}</span>
          </Typography>
          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button
              onClick={() => handleSwitchMonth(MonthSwitchDirection.PREV)}
            >
              <NavigateBefore />
            </Button>
            <Button
              onClick={() => handleSwitchMonth(MonthSwitchDirection.NEXT)}
            >
              <NavigateNext />
            </Button>
          </ButtonGroup>
        </RegularCalendarHeader>
        <Grid container columns={7}>
          {weekdaysCapitals.map((day, index) => (
            <GridItem key={`weekday-${index}`} text={day} variant={variant} />
          ))}
        </Grid>
        <Grid container columns={7} flex={1}>
          {renderDays}
        </Grid>
      </RegularCalendarWrapper>
    );
  }
};
