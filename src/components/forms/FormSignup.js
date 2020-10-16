import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import '../styles/Form.css';

const FormSignup = ({ submitForm }) => {

  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );


  return (
    <div className='form-content-right'>
      <form  onSubmit={handleSubmit} className='form' noValidate>
       
        <div className='form-inputs'>
          <label className='form-label'>Nombre</label>
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Escribe tu nombre'
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Escribe tu email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Selecciona un plan</label>
          <br></br>
          <select name="package" className="form-input" id="package">
              <option value="">Selecciona</option>
              <option name="basic" type="text" value="Basic">Básico</option>
              <option name="standard" type="text" value="Standard">Standard</option>
              <option name="premium" type="text" value="Premium">Premium</option>
            </select>
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Mensaje</label>
          <textarea
          className='form-input textarea'
          type='text'
          name='message'
          placeholder='Escribe un mensaje'
          value={values.message}
          onChange={handleChange}
          >
          </textarea>
            {errors.message && <p>{errors.message}</p>}
        </div>
        
        
        
        <button className='form-input-btn' type='submit'>
          Enviar
        </button>
        
      </form>
    </div>
  );
};

export default FormSignup;
