import { Box, Modal, Typography } from '@mui/material';

import { TaskType, useCalendarContext, useTaskContext } from '../../context';
import { Task } from '../Task';

export const TaskPreview = () => {
  const { isTaskPreviewOpen, setIsTaskPreviewOpen, todaysTasks } =
    useCalendarContext();

  const { handleSelectTask, selectedTask, isTaskSelected } = useTaskContext();

  return (
    <Modal open={isTaskPreviewOpen} onClose={() => setIsTaskPreviewOpen(false)}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          padding: 2,
          borderRadius: '5px',
          background: '#FFF',
          //   width: '310px',
        }}
      >
        <Box>
          {todaysTasks.length > 0 && (
            <Typography variant="h5">{`Tasks for ${todaysTasks[0].date}`}</Typography>
          )}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            {todaysTasks.map((task: TaskType, index: number) => (
              <Task
                key={task.id}
                title={task.title}
                description={task.description}
                date={task.date}
                isCompleted={task.isCompleted}
                id={task.id}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};
