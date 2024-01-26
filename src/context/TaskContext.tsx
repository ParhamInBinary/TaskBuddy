import { PropsWithChildren, createContext, useContext, useState } from 'react';

import { TaskType } from './types';

interface TaskContextType {
  taskList: [] | TaskType[];
  setTasklist: React.Dispatch<React.SetStateAction<[] | TaskType[]>>;
  isTaskModalOpen: boolean;
  setIsTaskModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleClearAllTasks: () => void;
  handleOpenTaskModal: () => void;
}

export const TaskContext = createContext({} as TaskContextType);

export const useTaskContext = () => useContext(TaskContext);

export const TaskProvider = ({ children }: PropsWithChildren) => {
  const [taskList, setTasklist] = useState<[] | TaskType[]>([]);
  const [isTaskModalOpen, setIsTaskModalOpen] = useState<boolean>(false);

  const handleOpenTaskModal = () => {
    setIsTaskModalOpen(!isTaskModalOpen);
  };

  const handleClearAllTasks = () => {
    setTasklist([]);
  };

  return (
    <TaskContext.Provider
      value={{
        taskList,
        setTasklist,
        isTaskModalOpen,
        setIsTaskModalOpen,
        handleClearAllTasks,
        handleOpenTaskModal,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
