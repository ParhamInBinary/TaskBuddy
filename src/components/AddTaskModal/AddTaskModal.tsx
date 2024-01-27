import { Box, Button, Modal, TextField, Typography } from '@mui/material';
import { useState } from 'react';

import { useTaskContext } from '../../context';
import { Calendar } from '../Calendar';
import { TaskModal } from './AddTaskModalStyles';

export const AddTaskModal = () => {
  const { isTaskModalOpen, handleOpenTaskModal, setTasklist } =
    useTaskContext();

  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [date, setDate] = useState<Date>(new Date());

  const handleAddTask = (title: string, description: string, date: Date) => {
    const newTask = {
      title: title,
      description: description,
      date: date,
      isCompleted: false,
    };

    setTasklist((prev) => [...prev, newTask]);
    handleOpenTaskModal();
    setTitle('');
    setDescription('');
    setDate(new Date());
  };

  return (
    <Modal
      open={isTaskModalOpen}
      onClose={handleOpenTaskModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <TaskModal>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Add a task
        </Typography>
        <Box display="flex">
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <TextField
              id="filled-basic"
              label="Title"
              variant="filled"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <TextField
              id="filled-basic"
              label="Description"
              variant="filled"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Box>
          <Calendar />
        </Box>

        <Button onClick={handleOpenTaskModal}>Cancel</Button>
        <Button onClick={() => handleAddTask(title, description, date)}>
          Add
        </Button>
      </TaskModal>
    </Modal>
  );
};
