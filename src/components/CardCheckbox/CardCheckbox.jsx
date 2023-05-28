import { Button, Checkbox, Typography } from '@mui/material';
import './CardCheckbox.sass';

function CardCheckbox({ name, description, cost, checked, handleSelectAdd }) {
  return (
    <div className="cardContainerCheckBox">
      <Checkbox checked={checked} onChange={() => handleSelectAdd(name)} inputProps={{ 'aria-label': 'controlled' }} />
      <div className="cardDescriptionCheckBox">
        <Typography variant="body1" color="primary">
          {name}
        </Typography>
        <Typography variant="body2" color="grey">
          {description}
        </Typography>
      </div>
      <Typography variant="body2" color="#483EFF">
        ${cost}/mo
      </Typography>
    </div>
  );
}

export default CardCheckbox;
