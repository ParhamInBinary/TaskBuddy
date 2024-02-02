import Input from '@mui/joy/Input';
import { Box, Button, Modal, Stack, Typography } from '@mui/material';

import { useTaskContext } from '../../context';
import { Calendar, CalendarVaiant } from '../Calendar';
import { TaskModal } from './AddTaskModalStyles';

export const AddTaskModal = () => {
  const {
    isTaskModalOpen,
    handleOpenTaskModal,
    tasktitle,
    setTaskTitle,
    taskDescription,
    setTaskDescription,
    errorMessage,
    taskDate,
    handleAddTask,
    handleConfirmEditTask,
    selectedTask,
    isTaskSelected,
  } = useTaskContext();

  return (
    <Modal
      open={isTaskModalOpen}
      onClose={handleOpenTaskModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <TaskModal>
        <Typography id="modal-modal-title" variant="h5">
          New task
        </Typography>
        <Box display="flex" margin={'20px 0px'} gap={2}>
          <Stack spacing={1}>
            <Input
              variant="soft"
              placeholder="Title"
              value={tasktitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              sx={{
                border: '1px solid #999999',
                '--Input-gap': '5px',
                '--Input-placeholderOpacity': 0.5,
                '--Input-focusedThickness': '1px',
                '--Input-minHeight': '50px',
                '--Input-paddingInline': '10px',
              }}
            />
            <Input
              variant="soft"
              placeholder="Description"
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
              sx={{
                border: '1px solid #999999',
                '--Input-gap': '5px',
                '--Input-placeholderOpacity': 0.5,
                '--Input-focusedThickness': '1px',
                '--Input-minHeight': '50px',
                '--Input-paddingInline': '10px',
              }}
            />
            {errorMessage && (
              <Typography variant="body2" color="error">
                {errorMessage}
              </Typography>
            )}
          </Stack>
          <Calendar variant={CalendarVaiant.MINI} />
        </Box>

        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button
            onClick={handleOpenTaskModal}
            variant="outlined"
            color="error"
          >
            Cancel
          </Button>
          {!isTaskSelected ? (
            <Button
              onClick={() =>
                handleAddTask(tasktitle, taskDescription, taskDate)
              }
              variant="contained"
            >
              Add
            </Button>
          ) : (
            <Button
              onClick={() => handleConfirmEditTask(selectedTask!.id)}
              variant="contained"
            >
              Edit
            </Button>
          )}
        </Box>
      </TaskModal>
    </Modal>
  );
};
