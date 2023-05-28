import { Button, Input, TextField, Typography } from '@mui/material';
import './InfoForm.sass';

function InfoForm() {
  return (
    <>
      <section className="infoForm">
        <Typography variant="h1">Personal info</Typography>
        <Typography variant="h2">Please provide your name, email address, and phone number.</Typography>
        <div className="formInput">
          <Typography variant="body1" color="primary">
            Name
          </Typography>
          <TextField placeholder="e.g. Stephen King" variant="outlined" />
        </div>
        <div className="formInput">
          <Typography variant="body1">Email Address</Typography>
          <TextField placeholder="e.g. stephenking@lorem.com" variant="outlined" />
        </div>
        <div className="formInput">
          <Typography variant="body1">Phone Number</Typography>
          <TextField placeholder="e.g. +1 234 567 890" variant="outlined" />
        </div>
        <div className="nextStepContainer">
          <Button variant="contained">Next Step</Button>
        </div>
      </section>
    </>
  );
}

export default InfoForm;
