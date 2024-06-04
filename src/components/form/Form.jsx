import React, { useEffect, useState } from 'react';
import { Container, InputEmail, InputNumber, StyledBtn } from './Form.styled';
import { getUser } from 'api/getUser';
import {
  handleError,
  handleSucces,
  validFormData,
  addHyphensToNumber,
  removeHyphens,
} from 'utils';

export const Form = ({ setData, isLoad }) => {
  const [values, setValues] = useState({ email: '' });
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  //Control loading status for app
  useEffect(() => {
    isLoad(isLoading);
  }, [isLoad, isLoading]);

  //Requst to back end
  useEffect(() => {
    if (!formData.email) return;
    const getUserByEmail = async user => {
      try {
        setIsLoading(true);

        const result = await getUser(user);

        setData(result.data.user);

      } catch (error) {
        if (error.message === 'canceled') {
          handleSucces(
            "Hold on a sec! We're canceling the previous request and starting the new one."
          );
        } else {
          handleError(error.response.data.msg)
        };
      } finally {
        setValues({ email: '' });
        setIsLoading(false);
      }
    };

    getUserByEmail(formData);
  }, [formData, setData]);

  //Submit form
  const onSabmitForm = e => {
    e.preventDefault();

    const errors = validFormData(values);
    setErrors(errors);
return setFormData(values);
  };

  //Set state from inputs and valid data input
  const handleChange = event => {
    let { name, value } = event.target;

    if (name === 'number') value = removeHyphens(value)

    setValues(prevValues => ({ ...prevValues, [name]: value}));
    setErrors({});
  };  

  return (
    <form onSubmit={onSabmitForm}>
      <Container>
        <h2>Contacts Form</h2>
        <label htmlFor="email">Email:</label>
        <InputEmail
          type="email"
          id="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          $isError={!!errors.email}
          required
        />{' '}
        {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
        <br />
        <label htmlFor="number">Number (Optional):</label>
        <InputNumber
          type="text"
          id="number"
          name="number"
          value={addHyphensToNumber(values.number) || ''}
          onChange={handleChange}
          placeholder="XX-XX-XX"
          $isError={!!errors.number}
        />
        {errors.number && <span style={{ color: 'red' }}>{errors.number}</span>}
        <br />
        <StyledBtn type="submit">Submit</StyledBtn>
      </Container>
    </form>
  );
};
