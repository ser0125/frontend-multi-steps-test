import StepsBar from '../src/components/StepsBar/StepsBar';
import PlanForm from '../src/components/forms/PlanForm/PlanForm';
import './PersonalInfo.sass';

function SelectPlan() {
  return (
    <main className="main">
      <StepsBar />
      <PlanForm />
    </main>
  );
}

export default SelectPlan;
