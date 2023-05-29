import { Typography, useMediaQuery } from '@mui/material';
import './ThankForm.sass';
import CheckIcon from '@mui/icons-material/Check';

function ThankForm() {
  const mobileScreen = useMediaQuery('(max-width:960px)');
  return (
    <>
      <section className="thankForm">
        <div className="checkMarkContainer">
          <div className="checkMarkContainerIcon">
            <CheckIcon htmlColor="#E96170" />
          </div>
        </div>
        <Typography variant={mobileScreen ? 'h3' : 'h1'} color="primary" sx={{ padding: '10px', fontWeight: 700 }}>
          Thank you!
        </Typography>
        <Typography variant="body1">
          Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support,
          please feel free to email us at support@loremgaming.com.
        </Typography>
      </section>
    </>
  );
}

export default ThankForm;
