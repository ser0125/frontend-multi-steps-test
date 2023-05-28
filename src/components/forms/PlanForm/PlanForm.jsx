import { Button, Input, Switch, TextField, Typography } from '@mui/material';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import './PlanForm.sass';
import { Link } from 'react-router-dom';
import CardIcon from '../../CardIcon/CardIcon';
import HeaderForm from '../../HeaderForm/HeaderForm';
import { useState } from 'react';
import { useForm } from '../../../FormContext';

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
  const {
    state: { plan },
    dispatch,
  } = useForm();
  const [isChecked, setIsChecked] = useState(plan?.billing === 'Yearly' ? true : false);
  const [planSelected, setPlanSelected] = useState(plan?.subscription);

  const handlePlanSelect = (name) => {
    setPlanSelected(name);
  };

  const goToAddons = () => {
    dispatch({
      type: 'storePlanInfo',
      payload: { subscription: planSelected, billing: isChecked === true ? 'Yearly' : 'Monthly' },
    });
    navigate('/addons');
  };
  return (
    <>
      <section className="infoForm">
        <HeaderForm
          title="Select your plan"
          description="
          You have the option of monthly or yearly billing."
        />
        <div className="planContainer">
          {plans.map((plan, index) => {
            return (
              <CardIcon
                key={index + plan.name}
                {...plan}
                handlePlanSelect={handlePlanSelect}
                planSelected={planSelected}
              />
            );
          })}
        </div>
        <div className="switchContainer">
          <Typography>Monthly</Typography>
          <Switch
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
            inputProps={{ 'aria-label': 'controlled' }}
          />
          <Typography>Yearly</Typography>
        </div>
        <div className="buttonContainer">
          <div>
            <Link to="/">
              <Button color="grey">Go Back</Button>
            </Link>
          </div>
          <div>
            <Button variant="contained" onClick={() => goToAddons()}>
              Next Step
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

export default PlanForm;
