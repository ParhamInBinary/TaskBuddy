import { Box } from '@mui/material';

import { Calendar, CalendarVaiant, Sidebar } from './components';

function App() {
  return (
    <Box display={'flex'}>
      <Sidebar />
      <Calendar variant={CalendarVaiant.REGULAR} />
    </Box>
  );
}

export default App;
