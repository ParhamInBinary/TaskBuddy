import { Box } from '@mui/material';

import { Calendar, CalendarVaiant, Sidebar, TaskPreview } from './components';
import { useCalendarContext } from './context';

function App() {
  return (
    <Box display={'flex'}>
      <Sidebar />
      <Calendar variant={CalendarVaiant.REGULAR} />
      <TaskPreview />
    </Box>
  );
}

export default App;
