import { Button, Input, Switch, TextField, Typography } from '@mui/material';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import './PlanForm.sass';
import { Link } from 'react-router-dom';
import CardIcon from '../../CardIcon/CardIcon';

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
        <Typography variant="h2" sx={{ paddingTop: '10px' }}>
          You have the option of monthly or yearly billing.
        </Typography>
        <div className="planContainer">
          {plans.map((plan, index) => {
            return <CardIcon key={index + plan.name} {...plan} />;
          })}
        </div>
        <div className="switchContainer">
          <Typography>Monthly</Typography>
          <Switch checked={true} onChange={() => {}} inputProps={{ 'aria-label': 'controlled' }} />
          <Typography>Yearly</Typography>
        </div>
        <div className="buttonContainer">
          <div>
            <Link to="/">
              <Button color="grey">Go Back</Button>
            </Link>
          </div>
          <div>
            <Link to="/addons">
              <Button variant="contained">Next Step</Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default PlanForm;
