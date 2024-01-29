import { Grid, Typography } from '@mui/material';

import { CalendarVaiant } from './calendarEnums';
import { MiniCalendarWeekdays, RegularCalendarWeekdays } from './styles';
import { GridItemType } from './types';

export const GridItem = ({ text, variant }: GridItemType) => {
  return (
    <>
      {variant === CalendarVaiant.MINI ? (
        <Grid item xs={1} sm={1} md={1} lg={1} xl={1} sx={MiniCalendarWeekdays}>
          <Typography variant="caption">{text}</Typography>
        </Grid>
      ) : (
        <Grid
          item
          xs={1}
          sm={1}
          md={1}
          lg={1}
          xl={1}
          sx={RegularCalendarWeekdays}
        >
          <Typography variant="h6">{text}</Typography>
        </Grid>
      )}
    </>
  );
};
