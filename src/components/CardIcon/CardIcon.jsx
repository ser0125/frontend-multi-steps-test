import { Button, Typography, useMediaQuery } from '@mui/material';
import './CardIcon.sass';

function CardIcon({ icon, name, cost, backgroundColor, handlePlanSelect, planSelected, checked }) {
  const mobileScreen = useMediaQuery('(max-width:960px)');

  return (
    <div
      data-testid={`custom-card-container-${name}`}
      className={`cardContainer ${planSelected === name ? `${name}-selected` : ''}`}
      onClick={() => handlePlanSelect(name)}
    >
      <div className="cardIcon" style={{ backgroundColor: backgroundColor }}>
        {icon}
      </div>
      <div>
        <Typography variant="body1" color="primary">
          {name}
        </Typography>
        <Typography variant="body2" color="grey" sx={{ paddingTop: '8px' }}>
          ${checked ? cost * 10 : cost}/{checked ? 'yr' : 'mo'}
        </Typography>
      </div>
      {checked && (
        <div className={`${mobileScreen ? `mobileAddition` : ''}`}>
          <Typography variant="h6" color="primary">
            2 months free
          </Typography>
        </div>
      )}
    </div>
  );
}

export default CardIcon;
