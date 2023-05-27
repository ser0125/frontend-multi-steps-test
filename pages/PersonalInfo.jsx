import InfoForm from '../src/components/InfoForm';
import StepsBar from '../src/components/StepsBar';
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
