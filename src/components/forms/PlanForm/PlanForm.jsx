import { Button, Input, Switch, TextField, Typography } from '@mui/material';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import './PlanForm.sass';
import Card from '../../Card/Card';

const plans = [
  {
    name: 'Arcade',
    cost: 9,
    icon: <SmartToyIcon color="white" />,
    backgroundColor: '#FFAF7E',
  },
  {
    name: 'Advanced',
    cost: 12,
    icon: <VideogameAssetIcon color="white" />,
    backgroundColor: '#F9818E',
  },
  {
    name: 'Pro',
    cost: 15,
    icon: <SportsEsportsIcon color="white" />,
    backgroundColor: '#483EFF',
  },
];

function PlanForm() {
  return (
    <>
      <section className="infoForm">
        <Typography variant="h1">Select your plan</Typography>
        <Typography variant="h2">You have the option of monthly or yearly billing.</Typography>
        <div className="planContainer">
          {plans.map((plan) => {
            return <Card {...plan} />;
          })}
        </div>
        <div className="switchContainer">
          <Typography>Monthly</Typography>
          <Switch checked={true} onChange={() => {}} inputProps={{ 'aria-label': 'controlled' }} />
          <Typography>Yearly</Typography>
        </div>
        <div className="buttonContainer">
          <div>
            <Button color="grey">Go Back</Button>
          </div>
          <div>
            <Button variant="contained">Next Step</Button>
          </div>
        </div>
      </section>
    </>
  );
}

export default PlanForm;
