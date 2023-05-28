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
                  <Typography variant="body2" color="grey">
                    Change
                  </Typography>
                </Link>
              </div>
              <div>
                <Typography variant="body1" color="primary" sx={{ fontWeight: 700 }}>
                  ${plan.cost}/mo
                </Typography>
              </div>
            </div>
            <hr />
            <div className="addSummaryContainer">
              {addons.map((add) => {
                return (
                  add.checked && (
                    <div className="addSummary">
                      <Typography variant="body2" color="grey">
                        {add.name}
                      </Typography>
                      <Typography variant="body1" color="primary">
                        ${add.cost}/mo
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
            Total (per month)
          </Typography>
          <Typography variant="body1" color="primary">
            $
            {plan.cost +
              addons.reduce((prev, current) => {
                if (current.checked) {
                  prev += current.cost;
                }
                return prev;
              }, 0)}
            /mo
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
              <Button variant="contained">Next Step</Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default SummaryForm;
