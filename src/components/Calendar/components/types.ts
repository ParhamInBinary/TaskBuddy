export type GridItemType = {
  variant: string;
  text?: string;
  day?: number;
  currentMonthIndex?: number;
  setTaskDate?: React.Dispatch<React.SetStateAction<string>>
};
