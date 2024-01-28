import { Box, Grid, Typography } from '@mui/material';

import { CalendarVaiant } from './calendarEnums';
import { IsTodayGridItemStyle, RegularDayGridItemStyle } from './styles';
import { GridItemType } from './types';

export const DayGridItem = ({
  day,
  currentMonthIndex,
  variant,
}: GridItemType) => {
  const today = new Date();
  const isToday =
    today.getDate() === day &&
    today.getMonth() === today.getMonth() + currentMonthIndex!;

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
      >
        <Typography
          variant="caption"
          sx={{ color: isToday ? 'red' : 'inherit' }}
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
