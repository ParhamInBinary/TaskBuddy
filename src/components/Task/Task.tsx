import {
  CheckCircle,
  Delete,
  Edit,
  RadioButtonUnchecked,
} from '@mui/icons-material';
import { Box, Typography } from '@mui/material';

import { useTaskContext } from '../../context';

interface ITask {
  id: string;
  title: string;
  description: string;
  date: string;
  isCompleted: boolean;
}

export const Task = ({ id, title, description, date, isCompleted }: ITask) => {
  const {
    handleDeleteTask,
    handleCompleteTask,
    handleOpenForTaskEdit,
    handleSelectTask,
    selectedTask,
    isTaskSelected,
  } = useTaskContext();

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        background: '#F4F4F4',
        opacity: !isCompleted ? 1 : 0.4,
        padding: '5px',
        borderRadius: '4px',
        boxShadow:
          '0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)',
      }}
      onClick={() => handleSelectTask(id)}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          overflow: 'scroll',
        }}
      >
        <Box sx={{ display: 'flex' }}>
          <Box sx={{ overflow: 'scroll' }}>
            <Typography
              variant="body1"
              fontWeight="600"
              sx={{ display: 'flex', alignItems: 'start' }}
            >
              {title}
            </Typography>
          </Box>
          <Edit
            onClick={() => handleOpenForTaskEdit(id)}
            sx={{
              fontSize: 17,
              marginLeft: '5px',
              cursor: !isCompleted ? 'pointer' : 'default',
              opacity: 0.4,
            }}
          />
        </Box>
        <Box sx={{ overflow: 'scroll' }}>
          {isTaskSelected && selectedTask?.id === id && (
            <Typography variant="subtitle2">{description}</Typography>
          )}
        </Box>
        <Typography variant="caption">{date}</Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        {!isCompleted ? (
          <RadioButtonUnchecked
            sx={{ color: '#1976d2' }}
            onClick={(e) => handleCompleteTask(id, e)}
          />
        ) : (
          <CheckCircle
            sx={{ color: '#38D900' }}
            onClick={(e) => handleCompleteTask(id, e)}
          />
        )}
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
