import React, { FC } from 'react'
import { Soldier } from '../../types/Soldier'
import './SoldierCard.css'
import { Box, Typography } from '@mui/material';

interface SoldiersCardInterface {
    soldier: Soldier; 
  }

  const SoldiersCard: FC<SoldiersCardInterface> = ({soldier}) => {
    const divColor = ()=>{
      if(soldier.energy < 50)
        return 'background.customRed';
      if(soldier.energy <= 80)
        return 'background.customYellow';
    else
        return 'primary.main'
    }
    
  return (
    <Box sx={{backgroundColor: divColor()}} className='SoldierCard'>
        <Box className='SoldierCardDetails'>
            <Typography>
                <header>
                <h4>{soldier.name}</h4>
                </header>
                <h4>energy: {soldier.energy}</h4>
                <h4>health: {soldier.health}</h4>
            </Typography>

        </Box>
        </Box>
  )
}

export default SoldiersCard