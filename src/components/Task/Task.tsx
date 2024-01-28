import { Box, Button, Typography } from '@mui/material';

interface ITask {
  title: string;
  description: string;
  date: string;
  isCompleted: boolean;
}

export const Task = ({ title, description, date, isCompleted }: ITask) => {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    month: 'short', // Abbreviated month name (e.g., "Jan")
    year: 'numeric', // Four-digit year (e.g., "2024")
    day: '2-digit', // Two-digit day of the month (e.g., "02")
    weekday: 'short', // Abbreviated weekday name (e.g., "Mon")
  });

  return (
    <Box>
      <Box>
        <Typography>{title}</Typography>
        <Typography>{description}</Typography>
        <Typography>{formattedDate}</Typography>
      </Box>
      <Box>
        <Button></Button>
      </Box>
    </Box>
  );
};
