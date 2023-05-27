import { Button } from '@mui/material';
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
      <section className="sidebar">
        {STEPS.map((step, index) => {
          return (
            <div key={index + step.name}>
              <Button variant="outlined">{index}</Button>
            </div>
          );
        })}
      </section>
    </>
  );
}

export default StepsBar;
