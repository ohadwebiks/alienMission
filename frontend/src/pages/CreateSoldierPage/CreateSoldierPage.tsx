import React, { FC } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button } from '@mui/material';
import './CreateSoldierPage.css'

import { useDispatch,} from 'react-redux';
import { addSoldier } from '../../redux/soldierSlice';
import { AppDispatch } from '../../redux/store';



const CreateSoldierPage: FC = () => {
  const { control, handleSubmit } = useForm();
  const dispatch: AppDispatch = useDispatch();

  const onSubmit = (data : any) => {
    dispatch(addSoldier(data))
  };

  return (
    <form className='page CreateSoldierPage' onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="name"
        control={control}
        defaultValue=""
        rules={{
          required: 'name is required', 
        }}
        render={({ field,fieldState }) => <TextField error={!!fieldState.error} {...field} label="name" />}
      />
      <Controller
        name="health"
        control={control}
        defaultValue=""
        rules={{
          required: 'health is required', // הודעת שגיאה אם השדה ריק
          validate: (value) =>
            value >= 0 && value <= 100 || 'Energy must be between 0 and 100', // תנאי האימות
        }}
        render={({ field,fieldState }) => <TextField error={!!fieldState.error} {...field} label="health" />}
      />
      <Controller
        name="energy"
        control={control}
        defaultValue=""
        rules={{
          required: 'Energy is required', // הודעת שגיאה אם השדה ריק
          validate: (value) =>
            value >= 0 && value <= 100 || 'Energy must be between 0 and 100', // תנאי האימות
        }}
        render={({ field,fieldState }) => <TextField  error={!!fieldState.error} {...field} label="energy" />}
      />
      <Controller
        name="temperature"
        control={control}
        defaultValue=""
        rules={{
          required: 'temperature is required', // הודעת שגיאה אם השדה ריק
          validate: (value) =>
            value >= -100 && value <= 100 || 'Energy must be between 0 and 100', // תנאי האימות
        }}
        render={({ field,fieldState }) => <TextField error={!!fieldState.error} {...field} label="temperature" />}
      />
      <Controller
        name="radiation"
        control={control}
        defaultValue=""
        rules={{
          required: 'temperature is required', // הודעת שגיאה אם השדה ריק
          validate: (value) =>
            value >= 0 && value <= 10 || 'Energy must be between 0 and 100', // תנאי האימות
        }}
        render={({ field,fieldState }) => <TextField error={!!fieldState.error} {...field} label="radiation" />}
      />
      
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default CreateSoldierPage;
