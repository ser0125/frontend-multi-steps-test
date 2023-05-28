import { Button, Typography } from '@mui/material';
import './StepsBar.sass';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

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
  const [selected, setSelected] = useState(1);
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case '/':
        setSelected(0);
        break;
      case '/plan':
        setSelected(1);
        break;
      case '/addons':
        setSelected(2);
        break;
      default:
        setSelected(3);
        break;
    }
  }, [location]);
  return (
    <>
      <section className="section">
        <div className="steps">
          {STEPS.map((step, index) => {
            return (
              <div className="stepSection" key={index + step.name}>
                {selected === index ? (
                  <Button
                    variant="contained"
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
                ) : (
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
                )}

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
