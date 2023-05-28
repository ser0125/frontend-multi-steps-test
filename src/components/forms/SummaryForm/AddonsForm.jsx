import { Button, Input, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useForm } from '../../../FormContext';

function SummaryForm() {
  const { state } = useForm();
  console.log(state);
  return (
    <>
      <section className="infoForm">
        <Typography variant="h1">Finishing up</Typography>
        <Typography variant="h2" sx={{ paddingTop: '10px' }}>
          Double-check everything looks OK before confirming.
        </Typography>
        <div className="formContainer">
          <div>
            <div>
              <Typography variant="body1" color="primary">
                Plan Selected (Toogle Detail)
              </Typography>
              <Link to="/plan">
                <Typography variant="body2" color="grey">
                  Change
                </Typography>
              </Link>
            </div>
            <Typography variant="body2" color="grey">
              Add On Selected
            </Typography>
            <hr />
          </div>
        </div>
        <Typography variant="body2" color="grey">
          Total (per month)
        </Typography>
        <div className="buttonContainer">
          <div>
            <Link to="/plan">
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
