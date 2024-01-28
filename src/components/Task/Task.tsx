import { Delete, RadioButtonUnchecked } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import { TaskType, useTaskContext } from '../../context';

interface ITask {
  id: number;
  title: string;
  description: string;
  date: string;
  isCompleted: boolean;
  handleSelectTask: (taskId: number) => void;
  selectedTask: TaskType | null;
  isTaskSelected: boolean;
}

export const Task = ({
  id,
  title,
  description,
  date,
  isCompleted,
  handleSelectTask,
  selectedTask,
  isTaskSelected,
}: ITask) => {
  const { handleDeleteTask } = useTaskContext();

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        background: '#F4F4F4',
        padding: '5px',
        borderRadius: '4px',
      }}
      onClick={() => handleSelectTask(id)}
    >
      <Box>
        <Typography variant="body1">{title}</Typography>
        {isTaskSelected && selectedTask?.id === id && (
          <Typography variant="subtitle2">{description}</Typography>
        )}
        <Typography variant="caption">{date}</Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <RadioButtonUnchecked sx={{ color: '#1976d2' }} />
        <Delete
          sx={{ color: '#FF1818' }}
          onClick={() => handleDeleteTask(id)}
        />
      </Box>
    </Box>
  );
};
