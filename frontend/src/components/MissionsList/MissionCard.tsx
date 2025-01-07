import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import { Mission } from '../../types/mission';
import { Box } from '@mui/material';
import SelectSoldier from './SelectSoldier';


interface MissionCardInterface{
    mission: Mission
}


const MultiActionAreaCard:React.FC<MissionCardInterface> = ({mission})=> {

    const [showSelect, setShowSelect] = React.useState<boolean>(false)
    const [choosenSoldeir, setChoosenSoldeir] = React.useState<string>('')

    const handleWithConfirmButton = ()=>{
        console.log(mission)
        console.log(choosenSoldeir)
        setShowSelect(false)
    }


  return (
    <Card sx={{ minWidth: 345,maxWidth: 345}}>
      <CardActionArea>
        <CardContent>
            <Box>
          <Typography gutterBottom variant="h5" component="div">
            {mission.name}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {mission.description}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {mission.status}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {mission.planet}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', minHeight: '20px'}}>
            {mission.soldiers}
          </Typography>
          </Box>
          <Box>
            {showSelect && <SelectSoldier setChoosenSoldeir={setChoosenSoldeir}/>}
          </Box>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {!showSelect ? <Button onClick={()=>{setShowSelect(true)}} sx={{'&.MuiButton-textPrimary': {
    color: 'black',
    '&:hover': {
      backgroundColor: 'lightgreen',
    },}}} size="small" color="primary">
          Assign soldier
        </Button>:
        <Button onClick={handleWithConfirmButton} sx={{'&.MuiButton-textPrimary': {
            color: 'black',
            '&:hover': {
              backgroundColor: 'lightgreen',
            },}}} size="small" color="primary">
                  confirm
                </Button>}


        {showSelect && <Button onClick={()=>{setShowSelect(false)}} sx={{'&.MuiButton-textPrimary': {
    color: 'black',
    '&:hover': {
      backgroundColor: 'lightgreen',
    },}}} size="small" color="primary">
          close
        </Button>}
      </CardActions>
    </Card>
  );
}

export default MultiActionAreaCard;