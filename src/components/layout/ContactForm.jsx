const getformToken = process.env.REACT_APP_GETFORM_TOKEN;

const ContactForm = () => {
  return (
    <form
      className="contact-form"
      action={`https://getform.io/f/${getformToken}`}
      method="POST"
    >
      <div className="form-fieldset">
        <label htmlFor="contact-name">Name</label>
        <input id="contact-name" type="text" name="name" required />
      </div>
      <div className="form-fieldset">
        <label htmlFor="contact-email">Email</label>
        <input id="contact-email" type="email" name="email" required />
      </div>
      <div className="form-fieldset">
        <label htmlFor="contact-message">Message</label>
        <textarea id="contact-message" name="message" required />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
