import React from 'react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { useState } from 'react'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm'
import ThreeDRotation from '@mui/icons-material/ThreeDRotation'
import HomeIcon from '@mui/icons-material/Home'
import Button from '@mui/material/Button'
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';
import Box from '@mui/material/Box';
import {
  useColorScheme
} from '@mui/material/styles'
import {Container}  from '@mui/material'



function ModeSelect() {
    const { mode, setMode } = useColorScheme()
    const handleChange = (event) => {
      console.log(event);
      const selectMode= event.target.value;
      console.log(selectMode);
      setMode(selectMode);
      // setAge(event.target.value);
    };
  
    return (
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="label-select-dark-light-mode">Mode</InputLabel>
        <Select
          labelId="label-select-dark-light-mode"
          id="demo-select-small"
          value={mode}
          label="Mode"
          onChange={handleChange}
        >
          <MenuItem value='light'>
            <div style={{display: 'flex', alignItems:'center', gap: '8px'}}>
              <LightModeIcon fontSize='small'/>Light</div>
            
            </MenuItem>
          <MenuItem value='dark' >
            <Box sx={{display: 'flex', alignItems:'center', gap: 1}}>
              <DarkModeIcon fontSize='small'/>  Dark
            </Box>
            
            </MenuItem>
          <MenuItem value='system'>
          <Box sx={{display: 'flex', alignItems:'center', gap: 1}}>
            <SettingsBrightnessIcon fontSize='small'/> 
            System
            </Box>
            </MenuItem>
        </Select>
      </FormControl>
    );
  }
  
export default ModeSelect