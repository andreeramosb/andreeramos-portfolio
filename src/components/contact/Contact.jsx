import { useForm, ValidationError } from '@formspree/react';
import { useEffect, useRef } from 'react';
import './contact.css';

const Contact = () => {
  const [state, handleSubmit] = useForm("xzzgdrrz");
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  useEffect(() => {
    if (state.succeeded) {
      if (emailRef.current) emailRef.current.value = "";
      if (messageRef.current) messageRef.current.value = "";
      alert('¡Gracias por tu mensaje! Me pondré en contacto contigo pronto.');
    }
  }, [state.succeeded]);

  return (
    <section className='contact-section-container'>
      <h2 className='contact-title'>Contact me 🖋️​ __ </h2>

      <div className='form-wrapper'>
        <form onSubmit={handleSubmit} className='contact-form'>
          <div className='form-group'>
            <label htmlFor="email">Email Address</label>
            <input
              ref={emailRef}
              id="email"
              type="email"
              name="email"
              placeholder="your@example.com"
              required
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
              className="form-error"
            />
          </div>

          <div className='form-group'>
            <label htmlFor="message">Message</label>
            <textarea
              ref={messageRef}
              id="message"
              name="message"
              rows="7"
              placeholder="Write your message here..."
              required
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
              className="form-error"
            />
          </div>

          <button
            type="submit"
            disabled={state.submitting}
            className='submit-btn'
          >
            {state.submitting ? 'Sending...' : 'Send Message'}
          </button>

          {state.succeeded && (
            <p className="form-status success-message">
              * Submitted successfully. ¡Gracias por tu mensaje!
            </p>
          )}
          {!state.succeeded && !state.submitting && state.errors.length === 0 && (
            <p className="form-status initial-message">
              * Rellena el formulario para enviarme un mensaje.
            </p>
          )}
          {state.errors.length > 0 && !state.submitting && (
            <p className="form-status error-message">
              * Hubo un error al enviar tu mensaje. Por favor, revisa los campos.
            </p>
          )}

        </form>
      </div>
    </section>
  );
}

export default Contact;