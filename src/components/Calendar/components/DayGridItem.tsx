import { Box, Grid, Typography } from '@mui/material';

import { CalendarVaiant } from './calendarEnums';
import { IsTodayGridItemStyle, RegularDayGridItemStyle } from './styles';
import { GridItemType } from './types';

export const DayGridItem = ({
  day,
  currentMonthIndex,
  variant,
  setTaskDate,
}: GridItemType) => {
  const today = new Date();
  // const thisDay = new Date(
  //   today.getFullYear(),
  //   today.getMonth() + currentMonthIndex!,
  //   day
  // ).toLocaleDateString('en-US', {
  //   month: 'short',
  //   day: 'numeric',
  //   year: 'numeric',
  // });

  const isToday =
    today.getDate() === day &&
    today.getMonth() === today.getMonth() + currentMonthIndex!;

  const handleSetTaskDate = () => {
    const date = new Date();
    date.setMonth(date.getMonth() + currentMonthIndex!);
    date.setDate(day!);

    const selectedDate = date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });

    console.log(selectedDate)
    setTaskDate!(selectedDate);
  };

  if (variant === CalendarVaiant.MINI) {
    return (
      <Grid
        item
        xs={1}
        sm={1}
        md={1}
        lg={1}
        xl={1}
        sx={{ textAlign: 'center', cursor: 'pointer' }}
        onClick={handleSetTaskDate}
      >
        <Typography
          variant="caption"
          sx={{
            color: isToday ? 'red' : 'inherit',
          }}
        >
          {day}
        </Typography>
      </Grid>
    );
  }

  if (variant === CalendarVaiant.REGULAR) {
    return (
      <Grid
        item
        xs={1}
        sm={1}
        md={1}
        lg={1}
        xl={1}
        sx={RegularDayGridItemStyle}
      >
        {isToday ? (
          <Box sx={IsTodayGridItemStyle}>
            <Typography variant="body1">{day}</Typography>
          </Box>
        ) : (
          <Typography variant="body1" sx={{ color: isToday ? 'red' : '#FFF' }}>
            {day}
          </Typography>
        )}
      </Grid>
    );
  }
};
