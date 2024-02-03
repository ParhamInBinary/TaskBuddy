import { PropsWithChildren, createContext, useContext, useState } from 'react';
import { MonthSwitchDirection } from '../components';

interface CalendarContextType {
  handleSwitchMonth: (direction: MonthSwitchDirection) => void;
  getMonthName: (index: number) => string;
  currentMonthIndex: number;
  today: Date;
}

export const CalendarContext = createContext({} as CalendarContextType);

export const useCalendarContext = () => useContext(CalendarContext);

export const CalendarProvider = ({ children }: PropsWithChildren) => {
  const today = new Date();
  const [currentMonthIndex, setCurrentMonthIndex] = useState(0);

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

  return (
    <CalendarContext.Provider
      value={{ handleSwitchMonth, getMonthName, currentMonthIndex, today }}
    >
      {children}
    </CalendarContext.Provider>
  );
};
