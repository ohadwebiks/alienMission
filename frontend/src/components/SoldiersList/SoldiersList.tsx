import React, { FC } from 'react'
import { Soldier } from '../../types/Soldier'
import SoldiersCard from './SoldiersCard'
import { Slider } from '@mui/material'
import './SoldierList.css'

interface SoldiersListInterface{
    allSoldiers: Soldier[]
}
const SoldiersList: FC<SoldiersListInterface> = ({allSoldiers}) => {
  return (
    <div className='SoldierList'>{allSoldiers.map((sol)=><SoldiersCard soldier = {sol}/>)}</div>
 
  )
}

export default SoldiersList