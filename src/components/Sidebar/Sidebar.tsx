import { Add, MoreVert } from '@mui/icons-material';
import { Button } from '@mui/material';

import { TaskType, useTaskContext } from '../../context';
import { AddTaskModal } from '../AddTaskModal';
import { Task } from '../Task';
import {
  ClearAllBtn,
  SidebarWrapper,
  TaskList,
  TaskListContainer,
} from './SidebarStyles';

export const Sidebar = () => {
  const { taskList, handleOpenTaskModal, handleClearAllTasks } =
    useTaskContext();

  return (
    <SidebarWrapper>
      <TaskListContainer>
        <Button variant="contained">
          My tasks
          <MoreVert style={{ position: 'absolute', right: 0 }} />
        </Button>
        <TaskList>
          <>
            {taskList.map((task: TaskType, index: number) => (
              <Task
                key={task.id}
                title={task.title}
                description={task.description}
                date={task.date}
                isCompleted={task.isCompleted}
                id={task.id}
                // handleSelectTask={handleSelectTask}
                // selectedTask={selectedTask}
                // isTaskSelected={isTaskSelected}
              />
            ))}
          </>
        </TaskList>
        <Button variant="contained" onClick={handleOpenTaskModal}>
          <Add />
        </Button>
      </TaskListContainer>
      <ClearAllBtn onClick={handleClearAllTasks} variant="contained">
        Clear all
      </ClearAllBtn>
      <AddTaskModal />
    </SidebarWrapper>
  );
};
