import React, { useEffect } from 'react'
import { RootState,AppDispatch } from '../../redux/store';
import {fetchmission} from '../../redux/missionSlice';
import {useDispatch,useSelector} from 'react-redux'
import MissionList from '../../components/MissionsList/MissionList';



const MissionsListPage = () => {
   const dispatch: AppDispatch = useDispatch();
      const { data, loading, error } = useSelector((state: RootState) => state.missions);


      useEffect(()=>{
        dispatch(fetchmission())
      },[])

  return (
    <div className='page'>
      <MissionList missions={data}/>
    </div>
  )
}

export default MissionsListPage