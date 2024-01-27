import { Grid, Typography } from '@mui/material';

import { CalendarVaiant } from './calendarEnums';
import { GridItemType } from './types';

export const EmptyGridItem = ({ variant }: GridItemType) => {
  if (variant === CalendarVaiant.MINI) {
    return (
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
        sx={{ textAlign: 'center' }}
      >
        <Typography variant="caption"></Typography>
      </Grid>
    );
  }
};
