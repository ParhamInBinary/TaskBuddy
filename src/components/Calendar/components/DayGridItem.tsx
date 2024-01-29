import { Box, Grid, Typography } from '@mui/material';

import { useTaskContext } from '../../../context';
import { CalendarVaiant } from './calendarEnums';
import {
  IsTodayGridItemStyle,
  MiniDayGridItemStyle,
  RegularDayGridItemStyle,
} from './styles';
import { GridItemType } from './types';

export const DayGridItem = ({
  day,
  currentMonthIndex,
  variant,
}: GridItemType) => {
  const { taskDate, isDateSelected, handleSelectTaskDate } = useTaskContext();

  const today = new Date();
  const isToday =
    today.getDate() === day &&
    today.getMonth() === today.getMonth() + currentMonthIndex!;

  const thisGridDayString = new Date(
    new Date().setMonth(currentMonthIndex!, day)
  ).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  const isThisDaySelected =
    isDateSelected && taskDate === thisGridDayString ? true : false;

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
          sx={{
            ...MiniDayGridItemStyle,
            background: isThisDaySelected ? 'blue' : isToday ? 'red' : 'none',
            color: isThisDaySelected || isToday ? '#FFF' : 'black',
          }}
          onClick={() => handleSelectTaskDate(thisGridDayString)}
        >
          <Typography variant="caption">{day}</Typography>
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
