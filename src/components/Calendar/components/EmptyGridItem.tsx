import { Grid, Typography } from '@mui/material';

import { CalendarVaiant } from './calendarEnums';
import { GridItemType } from './types';

export const EmptyGridItem = ({ variant }: GridItemType) => {
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
          sx={{ textAlign: 'center' }}
        >
          <Typography variant="caption"></Typography>
        </Grid>
      ) : (
        <Grid
          item
          xs={1}
          sm={1}
          md={1}
          lg={1}
          xl={1}
          sx={{ textAlign: 'center' }}
        >
          <Typography variant="caption"></Typography>
        </Grid>
      )}
    </>
  );
};
