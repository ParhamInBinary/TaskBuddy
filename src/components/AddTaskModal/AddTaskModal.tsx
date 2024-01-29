import { Box, Button, Modal, TextField, Typography } from '@mui/material';

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
        <Box display="flex" margin={'20px 0px'}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              marginRight: '10px',
            }}
          >
            <TextField
              label="Title"
              variant="outlined"
              value={tasktitle}
              onChange={(e) => setTaskTitle(e.target.value)}
            />
            <TextField
              label="Description"
              variant="outlined"
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
            />
            {errorMessage && (
              <Typography variant="body2" color="error">
                {errorMessage}
              </Typography>
            )}
          </Box>
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
