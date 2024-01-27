import { Grid, Typography } from '@mui/material';

import { GridItemType } from './types';

export const GridItem = ({ text }: GridItemType) => (
  <Grid
    item
    xs={1}
    sm={1}
    md={1}
    lg={1}
    xl={1}
    sx={{ width: '1px', textAlign: 'center', color: '#000' }}
  >
    <Typography variant="caption">{text}</Typography>
  </Grid>
);
