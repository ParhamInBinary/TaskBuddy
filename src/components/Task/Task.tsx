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
        boxShadow:
          '0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)',
      }}
      onClick={() => handleSelectTask(id)}
    >
      <Box>
        <Typography variant="body1" fontWeight="600">
          {title}
        </Typography>
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
        {isTaskSelected && selectedTask?.id === id && (
          <Delete
            sx={{ color: '#FF1818' }}
            onClick={() => handleDeleteTask(id)}
          />
        )}
      </Box>
    </Box>
  );
};
