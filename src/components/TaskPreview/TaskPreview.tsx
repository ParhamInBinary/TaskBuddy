import { Box, Modal, Typography } from '@mui/material';

import { TaskType, useCalendarContext } from '../../context';

export const TaskPreview = () => {
  const { isTaskPreviewOpen, setIsTaskPreviewOpen, todaysTasks } =
    useCalendarContext();

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
          background: '#999999',
          width: '310px',
        }}
      >
        <Box>
          {todaysTasks.length > 0 && (
            <Typography>{`Tasks for ${todaysTasks[0].date}`}</Typography>
          )}
          <Box>
            {todaysTasks.map((task: TaskType, index: number) => (
              <Box>{task.title}</Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};
