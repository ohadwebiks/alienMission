import React, { useEffect } from 'react'
import { RootState,AppDispatch } from '../../redux/store';
import {fetchSoldiers} from '../../redux/soldierSlice';
import {useDispatch,useSelector} from 'react-redux'
import SoldiersList from '../../components/SoldiersList/SoldiersList';

const SoldiersListPage = () => {
    const dispatch: AppDispatch = useDispatch();
    const { data, loading, error } = useSelector((state: RootState) => state.soldiers);

    useEffect(()=>{
        dispatch(fetchSoldiers());
    },[])
  return (
    <div className='page'>
        <SoldiersList allSoldiers={data}/>

    </div>
  )
}

export default SoldiersListPage