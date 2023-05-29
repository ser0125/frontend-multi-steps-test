import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import './FooterForm.sass';

function FooterForm({ handleNextButton, previousPath, nextText = 'Next Step', nextColor = 'primary' }) {
  return (
    <div className="buttonContainer">
      <div>
        <Link to={previousPath}>
          <Button
            color="grey"
            sx={{
              '&:hover': {
                color: '#022959',
              },
            }}
          >
            Go Back
          </Button>
        </Link>
      </div>
      <div>
        <Button variant="contained" onClick={handleNextButton} color={nextColor}>
          {nextText}
        </Button>
      </div>
    </div>
  );
}

export default FooterForm;
