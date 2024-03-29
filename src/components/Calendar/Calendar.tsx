import { NavigateBefore, NavigateNext } from '@mui/icons-material';
import { Box, Button, ButtonGroup, Grid, Typography } from '@mui/material';
import { useMemo } from 'react';

import { useCalendarContext } from '../../context';
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
  const { getMonthName, handleSwitchMonth, currentMonthIndex, today } =
    useCalendarContext();

  const weekdaysCapitals =
    variant === CalendarVaiant.MINI
      ? ['M', 'T', 'W', 'T', 'F', 'S', 'S']
      : ['Mon', 'Tus', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

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

  return (
    <>
      {variant === CalendarVaiant.MINI ? (
        /* =================================================== */
        /* :::::::::::::::: ADD TASK CALENDAR :::::::::::::::: */
        /* =================================================== */

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
            {weekdaysCapitals.map((day: string, index: number) => (
              <GridItem key={`weekday-${index}`} text={day} variant={variant} />
            ))}
            {renderDays}
          </Grid>
        </Box>
      ) : (
        /* =================================================== */
        /* :::::::::::::::: HOMEPAGE CALENDAR :::::::::::::::: */
        /* =================================================== */

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
            {weekdaysCapitals.map((day: string, index: number) => (
              <GridItem key={`weekday-${index}`} text={day} variant={variant} />
            ))}
          </Grid>
          <Grid container columns={7} flex={1}>
            {renderDays}
          </Grid>
        </RegularCalendarWrapper>
      )}
    </>
  );
};
