import { Button, Typography } from '@mui/material';
import './Card.sass';

function Card({ icon, name, cost, backgroundColor }) {
  console.log(icon);
  return (
    <div className="cardContainer">
      <div className="cardIcon" style={{ backgroundColor: backgroundColor }}>
        {icon}
      </div>
      <Typography variant="h3" color="primary">
        {name}
      </Typography>
      <Typography variant="body1" color="grey">
        ${cost}/mo
      </Typography>
    </div>
  );
}

export default Card;
