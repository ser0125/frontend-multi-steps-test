import { Button, Checkbox, Typography, useMediaQuery } from '@mui/material';
import './CardCheckbox.sass';

function CardCheckbox({ name, description, cost, checked, handleSelectAdd, billing }) {
  const mobileScreen = useMediaQuery('(max-width:960px)');

  return (
    <div className={`cardContainerCheckBox ${checked ? 'checked' : ''}`} onClick={() => handleSelectAdd(name)}>
      <Checkbox checked={checked} color="secondary" inputProps={{ 'aria-label': 'controlled' }} />
      <div className="cardDescriptionCheckBox">
        <Typography variant={mobileScreen ? 'body2' : 'body1'} color="primary">
          {name}
        </Typography>
        <Typography variant={mobileScreen ? 'h6' : 'body2'} color="grey">
          {description}
        </Typography>
      </div>
      <Typography variant={mobileScreen ? 'h6' : 'body2'} color="#483EFF">
        ${cost}/{billing === 'Yearly' ? 'yr' : 'mo'}
      </Typography>
    </div>
  );
}

export default CardCheckbox;
