import { Button, Input, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useForm } from '../../../FormContext';
import HeaderForm from '../../HeaderForm/HeaderForm';
import './SummaryForm.sass';

function SummaryForm() {
  const {
    state: { plan, addons, totalCost },
  } = useForm();
  return (
    <>
      <section className="infoForm">
        <HeaderForm
          title="Finishing up"
          description="
          Double-check everything looks OK before confirming."
        />
        <div className="formContainer">
          <div className="summaryContainer">
            <div className="planSummaryContainer">
              <div>
                <Typography variant="body1" color="primary">
                  {plan.subscription} ({plan.billing})
                </Typography>
                <Link to="/plan">
                  <Typography
                    variant="body2"
                    color="grey"
                    sx={{
                      '&:hover': {
                        color: '#483EFF',
                      },
                    }}
                  >
                    Change
                  </Typography>
                </Link>
              </div>
              <div>
                <Typography variant="body1" color="primary" sx={{ fontWeight: 700 }}>
                  ${plan.cost}/{plan.billing === 'Yearly' ? 'yr' : 'mo'}
                </Typography>
              </div>
            </div>
            <hr />
            <div className="addSummaryContainer">
              {addons.map((add, index) => {
                return (
                  add.checked && (
                    <div className="addSummary" key={index + add.name}>
                      <Typography variant="body2" color="grey">
                        {add.name}
                      </Typography>
                      <Typography variant="body1" color="primary">
                        ${add.cost}/{plan.billing === 'Yearly' ? 'yr' : 'mo'}
                      </Typography>
                    </div>
                  )
                );
              })}
            </div>
          </div>
        </div>
        <div className="totalSummary">
          <Typography variant="body2" color="grey">
            Total ({plan.billing === 'Yearly' ? 'per year' : 'per month'})
          </Typography>
          <Typography variant="h2" color="secondary" sx={{ fontWeight: 700 }}>
            $
            {plan.cost +
              addons.reduce((prev, current) => {
                if (current.checked) {
                  prev += current.cost;
                }
                return prev;
              }, 0)}
            /{plan.billing === 'Yearly' ? 'yr' : 'mo'}
          </Typography>
        </div>
        <div className="buttonContainer">
          <div>
            <Link to="/addons">
              <Button color="grey">Go Back</Button>
            </Link>
          </div>
          <div>
            <Link to="/thanks">
              <Button variant="contained" color="secondary">
                Confirm
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default SummaryForm;
