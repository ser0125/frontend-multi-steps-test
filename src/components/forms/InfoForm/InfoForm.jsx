import { Button, Input, TextField, Typography } from '@mui/material';
import './InfoForm.sass';
import { Link } from 'react-router-dom';

function InfoForm() {
  return (
    <>
      <section className="infoForm">
        <Typography variant="h1">Personal info</Typography>
        <Typography variant="h2" sx={{ paddingTop: '10px' }}>
          Please provide your name, email address, and phone number.
        </Typography>
        <div className="formContainer">
          <div className="formInput">
            <Typography variant="body1" color="primary">
              Name
            </Typography>
            <TextField placeholder="e.g. Stephen King" variant="outlined" inputProps={{ style: { height: '15px' } }} />
          </div>
          <div className="formInput">
            <Typography variant="body1">Email Address</Typography>
            <TextField
              placeholder="e.g. stephenking@lorem.com"
              variant="outlined"
              inputProps={{ style: { height: '15px' } }}
            />
          </div>
          <div className="formInput">
            <Typography variant="body1">Phone Number</Typography>
            <TextField
              placeholder="e.g. +1 234 567 890"
              variant="outlined"
              inputProps={{ style: { height: '15px' } }}
            />
          </div>
          <div className="nextStepContainer">
            <Link to="/plan">
              <Button variant="contained">Next Step</Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default InfoForm;
