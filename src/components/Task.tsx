import { Box, Button, Typography } from '@mui/material';

interface ITask {
    title: string;
    description: string;
    date: Date;
    status: string;

}

export const Task = ({ title, description, date, status}: ITask) => {
  return (
    <Box>
      <Box>
        <Typography>Title</Typography>
        <Typography>Description</Typography>
        <Typography>Date</Typography>
      </Box>
      <Box>
        <Button></Button>
      </Box>
    </Box>
  );
};
