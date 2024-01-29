import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from 'react';
import { v4 as uuidv4 } from 'uuid';

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
  handleAddTask: (title: string, description: string, date: string) => void;
  setTasklist: React.Dispatch<React.SetStateAction<TaskType[]>>;
  handleSelectTask: (taskId: string) => void;
  selectedTask: TaskType | null;
  isTaskSelected: boolean;
  handleDeleteTask: (taskId: string) => void;
  handleCompleteTask: (
    taskId: string,
    e: React.MouseEvent<SVGSVGElement>
  ) => void;
  handleSelectTaskDate: (selectedDate: string) => void;
  isDateSelected: boolean;
  handleOpenForTaskEdit: (taskId: string) => void;
  handleConfirmEditTask: (taskId: string) => void;
}

export const TaskContext = createContext({} as TaskContextType);

export const useTaskContext = () => useContext(TaskContext);

export const TaskProvider = ({ children }: PropsWithChildren) => {
  const [taskList, setTasklist] = useLocalStorageState(
    [] as TaskType[],
    'taskList'
  );
  const [isTaskModalOpen, setIsTaskModalOpen] = useState<boolean>(false);
  const [taskTitle, setTaskTitle] = useState<string>('');
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
  const [isDateSelected, setIsDateSelected] = useState<boolean>(false);

  const useFindTask = (taskId: string) => {
    const task = taskList.find((t: TaskType) => t.id === taskId);

    if (!task) {
      console.error(`Task with ID ${taskId} not found.`);
      return;
    }

    return task;
  };

  const resetModalAndTaskSelect = () => {
    setTaskTitle('');
    setTaskDescription('');
    setTaskDate(todayDateString);
    setIsDateSelected(false);
    setErrorMessage('');
    setIsTaskSelected(false);
    setSelectedTask(null);
  };

  const handleSelectTaskDate = (selectedDate: string) => {
    setTaskDate(selectedDate);
    setIsDateSelected(true);
  };

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
      id: uuidv4(),
      title: sanitizedTitle,
      description: sanitizedDescription,
      date: date,
      isCompleted: false,
    };

    setTasklist([...taskList, newTask]);

    handleOpenTaskModal();
  };

  const handleOpenTaskModal = () => {
    setIsTaskModalOpen(!isTaskModalOpen);
    resetModalAndTaskSelect();
  };

  const handleClearAllTasks = () => {
    setTasklist([]);
  };

  const handleSelectTask = (taskId: string) => {
    const task = useFindTask(taskId);
    if (task?.isCompleted) return;

    if (isTaskSelected && selectedTask?.id === taskId) {
      setSelectedTask(null);
      setIsTaskSelected(false);
    } else {
      setSelectedTask(task!);
      setIsTaskSelected(true);
    }
  };

  const handleDeleteTask = (taskId: string) => {
    const task = useFindTask(taskId);

    setTasklist(taskList.filter((t: TaskType) => t.id !== task?.id));
  };

  const handleCompleteTask = (
    taskId: string,
    e: React.MouseEvent<SVGSVGElement>
  ) => {
    e.stopPropagation();

    // Find the index of the task in taskList
    const taskIndex = taskList.findIndex((t) => t.id === taskId);

    if (taskIndex === -1) {
      console.error(`Task with ID ${taskId} not found.`);
      return;
    }

    // Update the task with the updated isCompleted value
    const updatedTaskList = [...taskList];
    updatedTaskList[taskIndex] = {
      ...updatedTaskList[taskIndex],
      isCompleted: !updatedTaskList[taskIndex].isCompleted,
    };

    // Update the taskList state with the updated task
    setTasklist(updatedTaskList);
    setSelectedTask(null);
    setIsTaskSelected(false);
  };

  const handleOpenForTaskEdit = (taskId: string) => {
    const task = useFindTask(taskId);
    if (task?.isCompleted) return;

    setTaskTitle(task!.title);
    setTaskDescription(task!.description);
    setTaskDate(task!.date);
    setSelectedTask(task!);
    setIsDateSelected(true);
    setIsTaskModalOpen(true);
  };

  const handleConfirmEditTask = (taskId: string) => {
    // Find the index of the task in taskList
    const taskIndex = taskList.findIndex((t) => t.id === taskId);

    if (taskIndex === -1) {
      console.error(`Task with ID ${taskId} not found.`);
      return;
    }

    // Update the task with the updated values
    const updatedTaskList = [...taskList];
    updatedTaskList[taskIndex] = {
      ...updatedTaskList[taskIndex],
      title: taskTitle,
      description: taskDescription,
      date: taskDate,
    };

    // Update the taskList state with the updated task
    setTasklist(updatedTaskList);
    handleOpenTaskModal();
  };

  return (
    <TaskContext.Provider
      value={{
        taskList,
        isTaskModalOpen,
        handleClearAllTasks,
        handleOpenTaskModal,
        tasktitle: taskTitle,
        setTaskTitle,
        taskDescription,
        setTaskDescription,
        errorMessage,
        taskDate,
        handleAddTask,
        setTasklist,
        handleSelectTask,
        selectedTask,
        isTaskSelected,
        handleDeleteTask,
        handleCompleteTask,
        handleSelectTaskDate,
        isDateSelected,
        handleOpenForTaskEdit,
        handleConfirmEditTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
