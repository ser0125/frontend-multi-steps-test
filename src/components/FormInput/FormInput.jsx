import { TextField, Typography } from '@mui/material';
import './FormInput.sass';

function FormInput({ label, name, value, placeholder, handleChangePersonalInfo, error }) {
  return (
    <div className="formInput">
      <Typography variant="body1" color="primary">
        {label}
      </Typography>
      <TextField
        value={value}
        onChange={(e) => handleChangePersonalInfo(e)}
        placeholder={placeholder}
        variant="outlined"
        name={name}
        inputProps={{ style: { height: '15px' } }}
        {...(error && {
          error,
          helperText: 'This field is required',
        })}
      />
    </div>
  );
}

export default FormInput;
