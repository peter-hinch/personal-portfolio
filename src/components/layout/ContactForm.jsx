const getformToken = process.env.REACT_APP_GETFORM_TOKEN;

const ContactForm = () => {
  return (
    <form action={`https://getform.io/f/${getformToken}`} method="POST">
      <div className="form-fieldset">
        <label htmlFor="contact-name">Name</label>
        <input id="contact-name" type="text" name="name" />
      </div>
      <div className="form-fieldset">
        <label htmlFor="contact-email">Email</label>
        <input id="contact-email" type="text" name="email" />
      </div>
      <div className="form-fieldset">
        <label htmlFor="contact-message">Message</label>
        <textarea id="contact-message" name="message" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
