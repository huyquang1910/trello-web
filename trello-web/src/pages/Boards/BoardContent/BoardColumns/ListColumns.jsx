
import Box from '@mui/material/Box';
import Column from './Column/Column';
import {Button} from '@mui/material';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
function ListColumns() {
    return (
        <Box sx={{
            background: 'inherit',
            width: '100%',
            height: '100%',
            display: 'flex',
            overflowX: 'auto',
            overflowY: 'hidden',
            '&::-webkit-scrollbar-track': {
                margin: 2
            },

        }}>
          <Column/>
          <Column/>
          <Column/>

          {/* Box Add new Column */}
          <Box sx={{
            minWidth: '200px',
            maxWidth: '200px',
            marginX: 2,
            borderRadius: '6px',
            height:'fit-content',
            backgroundColor: '#ffffff3d'
          }}>
            <Button 
            startIcon={<NoteAddIcon/>}
            sx={{color: 'white',
              width: '100%',
              justifyContent: 'flex-start',
              paddingLeft:2.5,
              paddingY: 1
            }}
            >
              Add new column
            </Button>
          </Box>
        </Box>
    )
}

export default ListColumns