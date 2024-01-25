import { Add, MoreVert } from '@mui/icons-material';

import { TaskType, useTaskContext } from '../context';
import {
  CategoryBtn,
  ClearAllBtn,
  SidebarWrapper,
  TaskList,
} from './SidebarStyles';
import { Task } from './Task';

export const Sidebar = () => {
  const { taskList, handleOpenTaskModal, handleClearAllTasks } =
    useTaskContext();

  return (
    <SidebarWrapper>
      <CategoryBtn>
        My tasks
        <MoreVert style={{ position: 'absolute', right: 0 }} />
      </CategoryBtn>
      <TaskList>
        <>
          {taskList.map((task: TaskType) => (
            <Task
              title={task.title}
              description={task.description}
              date={task.date}
              status={task.status}
            />
          ))}
          <Add style={{ margin: 5 }} onClick={handleOpenTaskModal} />
        </>
      </TaskList>
      <ClearAllBtn onClick={handleClearAllTasks}>Clear all</ClearAllBtn>
    </SidebarWrapper>
  );
};
