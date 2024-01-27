import { Add, MoreVert } from '@mui/icons-material';

import { TaskType, useTaskContext } from '../../context';
import { AddTaskModal } from '../AddTaskModal';
import { Task } from '../Task';
import {
  CategoryBtn,
  ClearAllBtn,
  SidebarWrapper,
  TaskList,
} from './SidebarStyles';

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
          {taskList.map((task: TaskType, index: number) => (
            <Task
              key={index}
              title={task.title}
              description={task.description}
              date={task.date}
              isCompleted={task.isCompleted}
            />
          ))}
          <Add style={{ margin: 5 }} onClick={handleOpenTaskModal} />
        </>
      </TaskList>
      <ClearAllBtn onClick={handleClearAllTasks}>Clear all</ClearAllBtn>
      <AddTaskModal />
    </SidebarWrapper>
  );
};
