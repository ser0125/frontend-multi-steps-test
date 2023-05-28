import { Button, Typography } from '@mui/material';
import './CardIcon.sass';

function CardIcon({ icon, name, cost, backgroundColor }) {
  return (
    <div className="cardContainer">
      <div className="cardIcon" style={{ backgroundColor: backgroundColor }}>
        {icon}
      </div>
      <Typography variant="h3" color="primary">
        {name}
      </Typography>
      <Typography variant="body1" color="grey" sx={{ paddingTop: '8px' }}>
        ${cost}/mo
      </Typography>
    </div>
  );
}

export default CardIcon;
