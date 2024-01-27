import { Grid, Typography } from '@mui/material';

export const EmptyGridItem = () => (
  <Grid item xs={1} sm={1} md={1} lg={1} xl={1} sx={{ textAlign: 'center' }}>
    <Typography variant="caption"></Typography>
  </Grid>
);
