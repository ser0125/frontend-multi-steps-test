import { Button, Typography } from '@mui/material';
import './StepsBar.sass';
import { Link } from 'react-router-dom';

const STEPS = [
  {
    name: 'STEP 1',
    description: 'YOUR INFO',
    path: '/',
  },
  {
    name: 'STEP 2',
    description: 'SELECT PLAN',
    path: '/plan',
  },
  {
    name: 'STEP 3',
    description: 'ADD-ONS',
    path: '/addons',
  },
  {
    name: 'STEP 4',
    description: 'SUMMARY',
    path: '/summary',
  },
];

function StepsBar() {
  return (
    <>
      <section className="section">
        <div className="steps">
          {STEPS.map((step, index) => {
            return (
              <div className="stepSection" key={index + step.name}>
                <Link to={step.path}>
                  <Button
                    variant="outlined"
                    color="white"
                    sx={{
                      borderRadius: '50%',
                      height: '50px',
                      minWidth: '50px',
                      width: '50px',
                      padding: '5px',
                    }}
                  >
                    {index + 1}
                  </Button>
                </Link>
                <div className="stepInfo">
                  <Typography variant="body2" color="lightblue">
                    {step.name}
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: 700 }}>
                    {step.description}
                  </Typography>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default StepsBar;
