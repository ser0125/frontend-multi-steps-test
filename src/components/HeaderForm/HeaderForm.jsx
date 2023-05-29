import { Typography, useMediaQuery } from '@mui/material';

function HeaderForm({ title, description }) {
  const mobileScreen = useMediaQuery('(max-width:960px)');
  return (
    <>
      <Typography variant={mobileScreen ? 'h3' : 'h1'}>{title}</Typography>
      <Typography variant={mobileScreen ? 'body1' : 'h4'} color="grey" sx={{ paddingTop: '10px' }}>
        {description}
      </Typography>
    </>
  );
}

export default HeaderForm;
