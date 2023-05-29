import { TextField, Typography, useMediaQuery } from '@mui/material';
import './FormInput.sass';

function FormInput({ label, name, value, placeholder, handleChangePersonalInfo, error }) {
  const mobileScreen = useMediaQuery('(max-width:960px)');
  return (
    <div className="formInput">
      <Typography variant={mobileScreen ? 'h6' : 'body1'} color="primary">
        {label}
      </Typography>
      <TextField
        value={value}
        onChange={(e) => handleChangePersonalInfo(e)}
        placeholder={placeholder}
        variant="outlined"
        name={name}
        InputProps={{
          sx: {
            '&:focus-within fieldset, &:focus-visible fieldset': {
              border: '1px solid #483EFF!important',
            },
          },
        }}
        inputProps={{
          style: {
            height: mobileScreen ? '7px' : '15px',
          },
        }}
        {...(error && {
          error: error.state,
          helperText: error.msg,
        })}
      />
    </div>
  );
}

export default FormInput;
