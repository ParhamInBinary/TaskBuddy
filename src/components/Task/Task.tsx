import { Box, Button, Typography } from '@mui/material';

interface ITask {
  title: string;
  description: string;
  date: string;
  isCompleted: boolean;
}

export const Task = ({ title, description, date, isCompleted }: ITask) => {

  return (
    <Box>
      <Box>
        <Typography>{title}</Typography>
        <Typography>{description}</Typography>
        <Typography>{date}</Typography>
      </Box>
      <Box>
        <Button></Button>
      </Box>
    </Box>
  );
};
