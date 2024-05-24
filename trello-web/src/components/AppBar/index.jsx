import { useState } from 'react';
import ModeSelect from '~/components/ModeSelect'
import Box from '@mui/material/Box';
import AppsIcon from '@mui/icons-material/Apps';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { Typography } from '@mui/material';
import Workspaces from './Menus/Workspaces';
import Recent from './Menus/Recent';
import Starred from './Menus/Starred';
import Templates from './Menus/Templates';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Badge from '@mui/material/Badge';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Tooltip from '@mui/material/Tooltip';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Profiles from './Menus/Profiles';
import AddBoxIcon from '@mui/icons-material/AddBox';
import InputAdornment from '@mui/material/InputAdornment';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import CloseIcon from '@mui/icons-material/Close';

function AppBar() {
  const [searchValue, setSearchValue] = useState('')

  return (
    <Box sx={{

      width: '100%',
      height: (theme) => theme.trello.appBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 2,
      paddingX: 2,
      overflowX: 'auto',
      backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#2c3e50' : '#1565c0')
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <AppsIcon sx={{ color: 'white' }} />
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <AccountBalanceWalletIcon sx={{ color: 'white' }} />
          <Typography variant='span' sx={{ fontSize: '1.2 rem', fontWeight: 'bold', color: 'white' }}>Trello </Typography>
        </Box>
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
          <Workspaces />
          <Recent />
          <Starred />
          <Templates />
          <Button variant="outlined" startIcon={<AddBoxIcon />} sx={{ color: 'white', border: 'none', '& :hover': 'none' }}
          >Create</Button>
        </Box>


      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <TextField
          id="outlined-search"
          label="Search ..."
          type="text"
          size='small'
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)
          }
          InputProps={
            {
              startAdornment: (
                <InputAdornment position="start">
                  <ManageSearchIcon sx={{ color: 'white' }} />
                </InputAdornment>
              ),
              endAdornment: (

                <CloseIcon 
                onClick= {() => setSearchValue('')}
                sx={{ color: searchValue?'white':'transparent', fontSize: 'small', cursor: 'pointer' }} />

              )

            }
          }

          sx={{
            minWidth: '120px',
            maxWidth: '170px',
            '& label': {
              color: 'white'
            },
            '& input': {
              color: 'white'
            },
            '& label.Mui-focused': {
              color: 'white'
            },

            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'white'
              },
              '&:hover fieldset': {
                borderColor: 'white'
              },
              '&.Mui-focused fieldset': {
                borderColor: 'white'
              }

            }

          }} />

        <ModeSelect />

        <Tooltip title="Notifications">
          <Badge color="warning" variant="dot" sx={{ cursor: 'pointer' }} >
            <NotificationsNoneIcon sx={{ color: 'white' }} />
          </Badge>
        </Tooltip>
        <Tooltip title="Help" >

          <HelpOutlineIcon sx={{ color: 'white',cursor: 'pointer' }} />

        </Tooltip>
        <Profiles />
      </Box>

    </Box>
  )
}

export default AppBar