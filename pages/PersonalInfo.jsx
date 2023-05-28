import InfoForm from '../src/components/forms/InfoForm/InfoForm';
import StepsBar from '../src/components/StepsBar/StepsBar';
import './PersonalInfo.sass';

function PersonalInfo() {
  return (
    <main className="main">
      <StepsBar />
      <InfoForm />
    </main>
  );
}

export default PersonalInfo;
