import { Box, Grid, Typography } from '@mui/material';

import { useTaskContext } from '../../../context';
import { CalendarVaiant } from './calendarEnums';
import { IsTodayGridItemStyle, RegularDayGridItemStyle } from './styles';
import { GridItemType } from './types';

export const DayGridItem = ({
  day,
  currentMonthIndex,
  variant,
}: GridItemType) => {
  const { setTaskDate } = useTaskContext();

  const today = new Date();
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

    setTaskDate!(selectedDate);
  };

  return (
    <>
      {variant === CalendarVaiant.MINI ? (
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
              color: isToday ? 'red' : 'black',
            }}
          >
            {day}
          </Typography>
        </Grid>
      ) : (
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
            <Typography
              variant="body1"
              sx={{ color: isToday ? 'red' : '#FFF' }}
            >
              {day}
            </Typography>
          )}
        </Grid>
      )}
    </>
  );
};
