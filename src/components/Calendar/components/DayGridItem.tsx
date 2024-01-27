import { Grid, Typography } from '@mui/material';

import { GridItemType } from './types';

export const DayGridItem = ({ day, currentMonthIndex }: GridItemType) => {
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
