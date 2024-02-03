import { PropsWithChildren, createContext, useContext, useState } from 'react';
import { MonthSwitchDirection } from '../components';
import { useTaskContext } from './TaskContext';
import { TaskType } from './types';

interface CalendarContextType {
  handleSwitchMonth: (direction: MonthSwitchDirection) => void;
  getMonthName: (index: number) => string;
  currentMonthIndex: number;
  today: Date;
  handlePreviewTaskOnDay: (dayString: string) => void;
  todaysTasks: [] | TaskType[];
  isTaskPreviewOpen: boolean;
  setIsTaskPreviewOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CalendarContext = createContext({} as CalendarContextType);

export const useCalendarContext = () => useContext(CalendarContext);

export const CalendarProvider = ({ children }: PropsWithChildren) => {
  const { taskList } = useTaskContext();

  const today = new Date();
  const [currentMonthIndex, setCurrentMonthIndex] = useState<number>(0);
  const [todaysTasks, setTodaysTasks] = useState<TaskType[] | []>([]);
  const [isTaskPreviewOpen, setIsTaskPreviewOpen] = useState<boolean>(false);

  const handleSwitchMonth = (direction: MonthSwitchDirection) => {
    setCurrentMonthIndex((prevIndex) =>
      direction === MonthSwitchDirection.NEXT ? prevIndex + 1 : prevIndex - 1
    );
  };

  const getMonthName = (index: number) => {
    const date = new Date();
    date.setMonth(date.getMonth() + index);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
  };

  const handlePreviewTaskOnDay = (dayString: string) => {
    console.log(dayString);
    const todaysTasksArray = taskList.filter((task) => task.date === dayString);

    console.log(todaysTasksArray);
    if (todaysTasksArray.length < 1) return;

    setTodaysTasks(todaysTasksArray);
    setIsTaskPreviewOpen(true);
  };

  return (
    <CalendarContext.Provider
      value={{
        handleSwitchMonth,
        getMonthName,
        currentMonthIndex,
        today,
        handlePreviewTaskOnDay,
        todaysTasks,
        isTaskPreviewOpen,
        setIsTaskPreviewOpen,
      }}
    >
      {children}
    </CalendarContext.Provider>
  );
};
