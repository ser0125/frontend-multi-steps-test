import './InfoForm.sass';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../../../FormContext';
import { useState } from 'react';
import FormInput from '../../FormInput/FormInput';
import HeaderForm from '../../HeaderForm/HeaderForm';
import FooterForm from '../../FooterForm/FooterForm';

const formInputs = [
  {
    label: 'Name',
    name: 'name',
    placeholder: 'e.g. Stephen King',
    type: 'text',
    required: true,
  },
  {
    label: 'Email Address',
    name: 'email',
    placeholder: 'e.g. stephenking@lorem.com',
    type: 'email',
    required: true,
  },
  {
    label: 'Phone Number',
    name: 'phone',
    type: 'number',
    placeholder: 'e.g. +1 234 567 890',
    required: true,
  },
];

const isEmail = (email) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

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
        error: {
          state: false,
          msg: '',
        },
        value,
      },
    }));
  };

  const goToPlan = () => {
    if (validateFormFields()) {
      dispatch({
        type: 'storePersonalInfo',
        payload: { name: infoForm.name.value, email: infoForm.email.value, phone: infoForm.phone.value },
      });
      navigate('/plan');
    }
  };

  const validateFormFields = () => {
    return validateRequiredFields() && validateEmail();
  };

  const validateRequiredFields = () => {
    let isValid = true;
    formInputs.forEach((input) => {
      if (input.required && !infoForm[input.name].value) {
        setInfoForm((prevState) => ({
          ...prevState,
          [input.name]: {
            ...prevState[input.name],
            error: {
              state: true,
              msg: 'This field is required',
            },
          },
        }));
        isValid = false;
      }
    });
    return isValid;
  };

  const validateEmail = () => {
    let isValid = true;
    if (!infoForm.email.error.state && !isEmail(infoForm.email.value)) {
      setInfoForm((prevState) => ({
        ...prevState,
        email: {
          ...prevState.email,
          error: {
            state: true,
            msg: 'Invalid email, Please check if the email was misspelled',
          },
        },
      }));
      isValid = false;
    }
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
          <FooterForm onlyNextButton={true} handleNextButton={goToPlan} />
        </div>
      </section>
    </>
  );
}

export default InfoForm;
