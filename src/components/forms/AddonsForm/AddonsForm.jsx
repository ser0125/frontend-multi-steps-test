import { Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import CardCheckbox from '../../CardCheckbox/CardCheckbox';
import HeaderForm from '../../HeaderForm/HeaderForm';
import { useForm } from '../../../FormContext';
import { useEffect, useState } from 'react';
import FooterForm from '../../FooterForm/FooterForm';

function AddonsForm() {
  const {
    state: {
      addons,
      plan: { billing },
    },
    dispatch,
  } = useForm();

  const navigate = useNavigate();

  const [addonsList, setAddonsList] = useState([]);

  useEffect(() => {
    if (addons) {
      setAddonsList(addons.map((add) => ({ ...add })));
    }
  }, []);

  const handleSelectAdd = (name) => {
    setAddonsList(
      addonsList.map((add) => {
        if (add.name === name) add.checked = !add.checked;
        return add;
      }),
    );
  };

  const goToSummary = () => {
    dispatch({
      type: 'storeAddons',
      payload: {
        addonsList,
      },
    });
    navigate('/summary');
  };

  return (
    <>
      <section className="infoForm">
        <HeaderForm
          title="Pick add-ons"
          description="
          Add-ons help enhance your gaming experience."
        />
        <div className="formContainer">
          {addonsList.length > 0 &&
            addonsList.map((addOn, index) => {
              return (
                <CardCheckbox key={index + addOn.name} {...addOn} handleSelectAdd={handleSelectAdd} billing={billing} />
              );
            })}
        </div>
        <FooterForm handleNextButton={goToSummary} previousPath="/plan" />
      </section>
    </>
  );
}

export default AddonsForm;
