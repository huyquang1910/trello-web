import Box from '@mui/material/Box';
import ListColumns from './BoardColumns/ListColumns';
function BoardContent() {
  
  return (
    <Box sx={{
      backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#2c3e50' : '#1565c0'),
      width: '100%',
      height: (theme) => theme.trello.boardContentHeight,
      padding:'5px 0'
    }}>
      <ListColumns/>
    </Box>
  )
}

export default BoardContent