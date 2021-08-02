import React from 'react'
import { FormContainer, FormMin } from './Form.style'
import { GrSend } from 'react-icons/gr'

import { useForm, ValidationError } from '@formspree/react';

const Form = () => {
  const [state, handleSubmit] = useForm("xleaplry");
  if (state.succeeded) {
      return <FormContainer>
                <FormMin>
                    <p>¡Gracias por tu opinión! <br/><br/> Tu mensaje se ha enviado con éxito 👍🏻</p>
                </FormMin>
            </FormContainer>;
  }
  return (
    <FormContainer>
        <form action="https://formspree.io/f/xleaplry" method="POST" onSubmit={handleSubmit}>
            <label htmlFor="email">
                Enviame tu opinión
            </label>
            <input
                id="email"
                type="email" 
                name="email"
                placeholder="Email..."
            />
            <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
            />
            <textarea
                id="message"
                name="message"
            />
            <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
            />
            <button type="submit" disabled={state.submitting}>
                Enviar <GrSend/>
            </button>
        </form>
    </FormContainer>
  );
}

export default Form;
