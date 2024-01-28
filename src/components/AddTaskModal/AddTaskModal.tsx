import { Box, Button, Modal, TextField, Typography } from '@mui/material';
import { useState } from 'react';

import { useTaskContext } from '../../context';
import { Calendar, CalendarVaiant } from '../Calendar';
import { TaskModal } from './AddTaskModalStyles';

export const AddTaskModal = () => {
  const { isTaskModalOpen, handleOpenTaskModal, setTasklist } =
    useTaskContext();

  const todayDateString = new Date().toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  const [tasktitle, setTaskTitle] = useState<string>('');
  const [taskDescription, setTaskDescription] = useState<string>('');
  const [taskDate, setTaskDate] = useState<string>(todayDateString);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleAddTask = (title: string, description: string, date: string) => {
    // Input validation
    if (!title.trim() || !description.trim()) {
      setErrorMessage('Please enter a title and/or description.');
      return;
    }

    // Sanitize input to prevent scripting attacks
    const sanitizedTitle = title.replace(/<\/?[^>]+(>|$)/g, '');
    const sanitizedDescription = description.replace(/<\/?[^>]+(>|$)/g, '');

    const newTask = {
      title: sanitizedTitle,
      description: sanitizedDescription,
      date: date,
      isCompleted: false,
    };

    setTasklist((prev) => [...prev, newTask]);
    handleOpenTaskModal();
    setTaskTitle('');
    setTaskDescription('');
    setTaskDate(todayDateString);
    setErrorMessage('');
  };

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
        <Box display="flex">
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
          <Calendar variant={CalendarVaiant.MINI} setTaskDate={setTaskDate} />
        </Box>

        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button
            onClick={handleOpenTaskModal}
            variant="outlined"
            color="error"
          >
            Cancel
          </Button>
          <Button
            onClick={() => handleAddTask(tasktitle, taskDescription, taskDate)}
            variant="contained"
          >
            Add
          </Button>
        </Box>
      </TaskModal>
    </Modal>
  );
};
