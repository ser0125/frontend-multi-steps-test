import { Button, Typography } from '@mui/material';
import './InfoForm.sass';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../../../FormContext';
import { useState } from 'react';
import FormInput from '../../FormInput/FormInput';
import HeaderForm from '../../HeaderForm/HeaderForm';

const formInputs = [
  {
    label: 'Name',
    name: 'name',
    placeholder: 'e.g. Stephen King',
    required: true,
  },
  {
    label: 'Email Address',
    name: 'email',
    placeholder: 'e.g. stephenking@lorem.com',
    required: true,
  },
  {
    label: 'Phone Number',
    name: 'phone',
    placeholder: 'e.g. +1 234 567 890',
    required: true,
  },
];

function InfoForm() {
  const navigate = useNavigate();
  const { state, dispatch } = useForm();
  const [infoForm, setInfoForm] = useState({
    name: { value: state.personalInfo?.name, error: false },
    email: { value: state.personalInfo?.email, error: false },
    phone: { value: state.personalInfo?.phone, error: false },
  });

  const handleChangePersonalInfo = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setInfoForm((prevState) => ({
      ...prevState,
      [name]: {
        error: false,
        value,
      },
    }));
  };

  const checkPersonalInfo = () => {
    if (validRequiredFields()) {
      dispatch({
        type: 'storePersonalInfo',
        payload: { name: infoForm.name.value, email: infoForm.email.value, phone: infoForm.phone.value },
      });
      navigate('/plan');
    }
  };

  const validRequiredFields = () => {
    let isValid = true;
    formInputs.forEach((input) => {
      if (input.required && !infoForm[input.name].value) {
        setInfoForm((prevState) => ({
          ...prevState,
          [input.name]: {
            ...prevState[input.name],
            error: true,
          },
        }));
        isValid = false;
      }
    });
    return isValid;
  };

  return (
    <>
      <section className="infoForm">
        <HeaderForm
          title="Personal info"
          description="
          Please provide your name, email address, and phone number."
        />
        <div className="formContainer">
          {formInputs.map((input, index) => (
            <FormInput
              key={index + input.name}
              {...input}
              value={infoForm[input.name].value}
              handleChangePersonalInfo={handleChangePersonalInfo}
              error={infoForm[input.name].error}
            />
          ))}
          <div className="nextStepContainer">
            <Button variant="contained" onClick={() => checkPersonalInfo()}>
              Next Step
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

export default InfoForm;
