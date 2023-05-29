import { Button, Typography, useMediaQuery } from '@mui/material';
import './StepsBar.sass';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useForm } from '../../FormContext';

function StepsBar() {
  const [selected, setSelected] = useState(1);
  const {
    state: { steps },
    dispatch,
  } = useForm();
  const [stepsList, setStepList] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const mobileScreen = useMediaQuery('(max-width:960px)');

  useEffect(() => {
    if (steps) {
      setStepList(steps.map((step) => ({ ...step })));
    }
  }, [location]);

  const selectStep = (path) => {
    switch (path) {
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
  };

  useEffect(() => {
    selectStep(location.pathname);
  }, [location]);

  return (
    <>
      <section className="section">
        <div className="steps">
          {stepsList.map((step, index) => {
            return (
              <div className="stepSection" key={index + step.name}>
                <Button
                  variant={selected === index ? 'contained' : 'outlined'}
                  color="white"
                  disabled={step.disabled}
                  onClick={() => navigate(step.path)}
                  sx={{
                    borderRadius: '50%',
                    height: '50px',
                    minWidth: '50px',
                    width: '50px',
                    padding: '5px',
                    '&:disabled': {
                      color: 'rgb(253 253 253 / 40%)',
                      border: '1px solid rgb(253 253 253 / 40%)',
                    },
                  }}
                >
                  {index + 1}
                </Button>
                {!mobileScreen && (
                  <div className="stepInfo">
                    <Typography variant="body2" color="lightblue">
                      {step.name}
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 700 }}>
                      {step.description}
                    </Typography>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default StepsBar;
