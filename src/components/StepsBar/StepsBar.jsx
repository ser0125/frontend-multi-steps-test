import { Button, Typography } from '@mui/material';
import './StepsBar.sass';

const STEPS = [
  {
    name: 'STEP 1',
    description: 'YOUR INFO',
  },
  {
    name: 'STEP 2',
    description: 'SELECT PLAN',
  },
  {
    name: 'STEP 3',
    description: 'ADD-ONS',
  },
  {
    name: 'STEP 4',
    description: 'SUMMARY',
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
                <Button
                  variant="outlined"
                  sx={{
                    color: 'white',
                    borderColor: 'white',
                    borderRadius: '50%',
                    height: '50px',
                    minWidth: '50px',
                    width: '50px',
                    padding: '5px',
                  }}
                >
                  {index + 1}
                </Button>
                <div className="stepInfo">
                  <Typography variant="body2">{step.name}</Typography>
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
