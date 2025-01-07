import * as React from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};



function getStyles(name: string, personName: string[], theme: Theme) {

  return {
    fontWeight: personName.includes(name)
      ? theme.typography.fontWeightMedium
      : theme.typography.fontWeightRegular,
  };
}

interface SelectSoldierProps{
    setChoosenSoldeir: (name: string)=>void
}

const SelectSoldier: React.FC<SelectSoldierProps> = ({setChoosenSoldeir}) =>{
  const theme = useTheme();
  const [personName, setPersonName] = React.useState<string[]>([]);
  const [soldiersNames,setSoldiersName] = React.useState<string[]>([])
  const { data} = useSelector((state: RootState) => state.soldiers);



  React.useEffect(()=>{
    const names = data.map((soldier)=>soldier.name)
    setSoldiersName([...names])
  },[])


  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-name-label">Name</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          value={personName}
          //@ts-ignore
          onChange={(e)=>{setChoosenSoldeir(e.target.value); setPersonName(e.target.value)}}
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
        >
          {soldiersNames.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default SelectSoldier;
