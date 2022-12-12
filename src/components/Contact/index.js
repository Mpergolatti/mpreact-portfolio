import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { validateEmail } from '../../utils/helper';

const Contact = () => {
  const [errorMessage, setErrorMessage] = useState('')
  const handleRegistration = (data) => console.log(data);
  const handleError = (errors) => {};

  const { register, handleSubmit, formState: { errors } } = useForm({ 
    mode: 'onBlur',
    defaultValues: {
      name: '',
      email: '',
      message: ''
    }
  });

  const registerOptions = {
    name: { required: 'Name is required' },
    email: { required: 'Email is required' },
    message: {
      required: 'Message is required',
      minLength: {
        value: 25,
        message: 'Message must contain at least 25 characters'
      }
    }
  };

  const handleChange = (e) => {
    if (e.target.email === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.')
      } else {
        setErrorMessage('')
      }
    }
  }
  return (
    <form onSubmit={handleSubmit(handleRegistration, handleError)}>
      <div>
        <label>Name</label>
        <input name='name' type='text'
          {...register('name', registerOptions.name) }/>
        <small className='text-danger'>
          {errors?.name && errors.name.message}
        </small>
      </div>

      <div>
        <label>Email</label>
        <input type='email' name='email' 
          {...register('email', registerOptions.email, { required: true, validate: handleChange })}
        />
        <small className='text-danger'>
          {errors?.email && errors.email.message}
        </small>
      </div>

      <div>
        <label htmlFor='message'>Message</label>
        <textarea  name='message' rows='5' 
          {...register('message', registerOptions.message)}
        />
        <small className='text-danger'>
          {errors?.message && errors.message.message}
        </small>
      </div>

        { errorMessage && (
          <div>
            <p className='error-text'>{errorMessage}</p>
          </div>  
        )}

      <button>Submit</button>
    </form>
  );
  
};
export default Contact;