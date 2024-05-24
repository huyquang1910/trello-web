import React from 'react'
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import FaceIcon from '@mui/icons-material/Face';
import DashboardIcon from '@mui/icons-material/Dashboard';
import VpnLockIcon from '@mui/icons-material/VpnLock';
import AddToDriveIcon from '@mui/icons-material/AddToDrive';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import FilterIcon from '@mui/icons-material/Filter';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import { Tooltip } from '@mui/material';
import Button from '@mui/material/Button';
import GroupAddIcon from '@mui/icons-material/GroupAdd';

const MENU_STYLES = {
  color: 'white',
  backgroundColor: 'tranparent',
  boder: 'none',
  paddingX: '5px',
  borderRadius: '4px',
  '& .MuiSvgIcon-root': {
    color: 'white'
  },
  '&:hover': {
    backgroundColor: 'primary.50',
  }
}

function BoardBar() {
  return (
    <Box
      sx={{
        width: '100%',
        height: (theme) => theme.trello.boardBarHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 2,
        paddingX: 2,
        overflowX: 'auto',
        borderBottom: '1px solid #fff',
        backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2')
      }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Chip
          sx={MENU_STYLES}
          icon={<DashboardIcon />}
          label="Trello Drop and Drag ReactJs"
          onClick={() => { }} />

        <Chip
          sx={MENU_STYLES}
          icon={<VpnLockIcon />}
          label="Public/ Private Workspace"
          onClick={() => { }} />

        <Chip
          sx={MENU_STYLES}
          icon={<AddToDriveIcon />}
          label="Add to Google Drive"
          onClick={() => { }} />

        <Chip
          sx={MENU_STYLES}
          icon={<ElectricBoltIcon />}
          label="Automation"
          onClick={() => { }} />

        <Chip
          sx={MENU_STYLES}
          icon={<FilterIcon />}
          label="Filters"
          onClick={() => { }} />

      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
      <Button 
      sx={{
        color:'white',
        borderColor:'white',
        '&:hover':{
          borderColor:'white'
        }
      }}
      variant="outlined" startIcon={<GroupAddIcon/>}>Invite</Button>

        <AvatarGroup max={4} total={10}
        sx={{
          gap: '10px',
          '& .MuiAvatar-root':{
            width: '32px',
            height:'32px',
            fontSize:'14px',
            border:'none'
          }
        }}>
          <Tooltip title='Avatar'>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />

          </Tooltip>
          <Tooltip title='Avatar'>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />

          </Tooltip>
          <Tooltip title='Avatar'>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />

          </Tooltip>
          <Tooltip title='Avatar'>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />

          </Tooltip>



        </AvatarGroup>
      </Box>

    </Box>
  )
}

export default BoardBar