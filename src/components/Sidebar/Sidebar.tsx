import { Add, MoreVert } from '@mui/icons-material';

import { Button } from '@mui/material';
import { TaskType, useTaskContext } from '../../context';
import { AddTaskModal } from '../AddTaskModal';
import { Task } from '../Task';
import { ClearAllBtn, SidebarWrapper, TaskList } from './SidebarStyles';

export const Sidebar = () => {
  const { taskList, handleOpenTaskModal, handleClearAllTasks } =
    useTaskContext();

  return (
    <SidebarWrapper>
      <Button variant="contained">
        My tasks
        <MoreVert style={{ position: 'absolute', right: 0 }} />
      </Button>
      <TaskList>
        <>
          {taskList.map((task: TaskType, index: number) => (
            <Task
              key={index}
              title={task.title}
              description={task.description}
              date={task.date}
              isCompleted={task.isCompleted}
            />
          ))}
          <Button variant="contained" onClick={handleOpenTaskModal}>
            <Add />
          </Button>
        </>
      </TaskList>
      <ClearAllBtn onClick={handleClearAllTasks} variant="contained">
        Clear all
      </ClearAllBtn>
      <AddTaskModal />
    </SidebarWrapper>
  );
};
