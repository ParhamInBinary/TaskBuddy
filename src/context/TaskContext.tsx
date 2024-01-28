import { PropsWithChildren, createContext, useContext, useState } from 'react';

import { useLocalStorageState } from '../hooks';
import { TaskType } from './types';

interface TaskContextType {
  taskList: [] | TaskType[];
  isTaskModalOpen: boolean;
  handleClearAllTasks: () => void;
  handleOpenTaskModal: () => void;
  tasktitle: string;
  setTaskTitle: React.Dispatch<React.SetStateAction<string>>;
  taskDescription: string;
  setTaskDescription: React.Dispatch<React.SetStateAction<string>>;
  errorMessage: string;
  taskDate: string;
  setTaskDate: React.Dispatch<React.SetStateAction<string>>;
  handleAddTask: (title: string, description: string, date: string) => void;
  setTasklist: React.Dispatch<React.SetStateAction<TaskType[]>>;
  handleSelectTask: (taskId: number) => void;
  selectedTask: TaskType | null;
  isTaskSelected: boolean;
  handleDeleteTask: (taskId: number) => void;
}

export const TaskContext = createContext({} as TaskContextType);

export const useTaskContext = () => useContext(TaskContext);

export const TaskProvider = ({ children }: PropsWithChildren) => {
  const [taskList, setTasklist] = useLocalStorageState(
    [] as TaskType[],
    'taskList'
  );
  const [isTaskModalOpen, setIsTaskModalOpen] = useState<boolean>(false);
  const [tasktitle, setTaskTitle] = useState<string>('');
  const [taskDescription, setTaskDescription] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [isTaskSelected, setIsTaskSelected] = useState<boolean>(false);
  const [selectedTask, setSelectedTask] = useState<null | TaskType>(null);

  const todayDateString = new Date().toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  const [taskDate, setTaskDate] = useState<string>(todayDateString);

  const handleAddTask = (title: string, description: string, date: string) => {
    // Input validation
    if (!title.trim() || !description.trim()) {
      setErrorMessage('Please enter a title and/or description.');
      return;
    }

    // Sanitize input to prevent scripting attacks
    const sanitizedTitle = title.replace(/<\/?[^>]+(>|$)/g, '');
    const sanitizedDescription = description.replace(/<\/?[^>]+(>|$)/g, '');

    const newTask: TaskType = {
      id: Math.floor(Math.random() * 999999999),
      title: sanitizedTitle,
      description: sanitizedDescription,
      date: date,
      isCompleted: false,
    };

    setTasklist([...taskList, newTask]);

    handleOpenTaskModal();
    setTaskTitle('');
    setTaskDescription('');
    setTaskDate(todayDateString);
    setErrorMessage('');
  };

  const handleOpenTaskModal = () => {
    setIsTaskModalOpen(!isTaskModalOpen);
  };

  const handleClearAllTasks = () => {
    setTasklist([]);
  };

  const handleSelectTask = (taskId: number) => {
    const task = taskList.find((t: TaskType) => t.id === taskId);

    if (!task) {
      console.error(`Task with ID ${taskId} not found.`);
      return;
    }

    if (isTaskSelected && selectedTask?.id === taskId) {
      setSelectedTask(null);
      setIsTaskSelected(false);
    } else {
      setSelectedTask(task);
      setIsTaskSelected(true);
    }
  };

  const handleDeleteTask = (taskId: number) => {
    const task = taskList.find((t: TaskType) => t.id === taskId);

    if (!task) {
      console.error(`Task with ID ${taskId} not found.`);
      return;
    }

    setTasklist(taskList.filter((t: TaskType) => t.id !== task.id));
  };

  return (
    <TaskContext.Provider
      value={{
        taskList,
        isTaskModalOpen,
        handleClearAllTasks,
        handleOpenTaskModal,
        tasktitle,
        setTaskTitle,
        taskDescription,
        setTaskDescription,
        errorMessage,
        taskDate,
        setTaskDate,
        handleAddTask,
        setTasklist,
        handleSelectTask,
        selectedTask,
        isTaskSelected,
        handleDeleteTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
