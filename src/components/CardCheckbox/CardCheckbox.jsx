import { Button, Checkbox, Typography } from '@mui/material';
import './CardCheckbox.sass';

function CardCheckbox({ name, description, cost, checked, handleSelectAdd, billing }) {
  return (
    <div className={`cardContainerCheckBox ${checked ? 'checked' : ''}`} onClick={() => handleSelectAdd(name)}>
      <Checkbox checked={checked} color="secondary" inputProps={{ 'aria-label': 'controlled' }} />
      <div className="cardDescriptionCheckBox">
        <Typography variant="body1" color="primary">
          {name}
        </Typography>
        <Typography variant="body2" color="grey">
          {description}
        </Typography>
      </div>
      <Typography variant="body2" color="#483EFF">
        ${cost}/{billing === 'Yearly' ? 'yr' : 'mo'}
      </Typography>
    </div>
  );
}

export default CardCheckbox;
