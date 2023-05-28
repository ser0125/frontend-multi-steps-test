import { Button, Typography } from '@mui/material';
import './CardIcon.sass';

function CardIcon({ icon, name, cost, backgroundColor, handlePlanSelect, planSelected, checked }) {
  return (
    <div
      data-testid={`custom-card-container-${name}`}
      className={`cardContainer ${planSelected === name ? `${name}-selected` : ''}`}
      onClick={() => handlePlanSelect(name)}
    >
      <div className="cardIcon" style={{ backgroundColor: backgroundColor }}>
        {icon}
      </div>
      <Typography variant="h3" color="primary">
        {name}
      </Typography>
      <Typography variant="body1" color="grey" sx={{ paddingTop: '8px' }}>
        ${checked ? cost * 10 : cost}/{checked ? 'yr' : 'mo'}
      </Typography>
      {checked && (
        <Typography variant="body2" color="primary">
          2 months free
        </Typography>
      )}
    </div>
  );
}

export default CardIcon;
