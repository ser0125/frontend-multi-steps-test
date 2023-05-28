import { Typography } from '@mui/material';

function HeaderForm({ title, description }) {
  return (
    <>
      <Typography variant="h1">{title}</Typography>
      <Typography variant="h2" sx={{ paddingTop: '10px' }}>
        {description}
      </Typography>
    </>
  );
}

export default HeaderForm;
