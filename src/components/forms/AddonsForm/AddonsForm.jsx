import { Button, Input, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import CardCheckbox from '../../CardCheckbox/CardCheckbox';
import HeaderForm from '../../HeaderForm/HeaderForm';

const addOns = [
  {
    name: 'Online service',
    cost: 1,
    description: 'Access to multiplayer games',
    checked: true,
  },
  {
    name: 'Larger storage',
    cost: 2,
    description: 'Extra 1TB of cloud save',
    checked: true,
  },
  {
    name: 'Customizable profile',
    cost: 2,
    description: 'Custom theme on your profile',
    checked: false,
  },
];

function AddonsForm() {
  return (
    <>
      <section className="infoForm">
        <HeaderForm
          title="Pick add-ons"
          description="
          Add-ons help enhance your gaming experience."
        />
        <div className="formContainer">
          {addOns.map((addOn) => {
            return <CardCheckbox {...addOn} />;
          })}
        </div>
        <div className="buttonContainer">
          <div>
            <Link to="/addons">
              <Button color="grey">Go Back</Button>
            </Link>
          </div>
          <div>
            <Link to="/summary">
              <Button variant="contained">Next Step</Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default AddonsForm;
