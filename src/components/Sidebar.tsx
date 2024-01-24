import { Box } from '@mui/material';

import { useState } from 'react';
import {
  CategoryBtn,
  SidebarHeader,
  SidebarWrapper,
  TaskModalBtn,
} from './SidebarStyles';

export const Sidebar = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [taskList, setTasklist] = useState<[] | string[]>([]);

  const handleAddTask = () => {
    setTasklist((prev) => [...prev, inputValue]);
    setInputValue('');
  };
  return (
    <SidebarWrapper>
      <SidebarHeader>
        <CategoryBtn>My tasks</CategoryBtn>
        <TaskModalBtn onClick={handleAddTask}>+</TaskModalBtn>
      </SidebarHeader>
      <Box>
        {taskList.map((task) => (
          <p>{task}</p>
        ))}
      </Box>
    </SidebarWrapper>
  );
};
