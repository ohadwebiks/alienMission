import React, { FC } from 'react'
import { Mission } from '../../types/mission'
import MissionCard from './MissionCard'
import './MissionList.css'

interface MissionListInterface{
    missions: Mission[]
}

const MissionList: FC<MissionListInterface> = ({missions}) => {
  return (
    <div className='MissionList'>
        {missions.map((mission)=> <MissionCard mission = {mission}/>)}
    </div>
  )
}

export default MissionList