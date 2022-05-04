import Container from './layout/Container';
import ContactForm from './layout/ContactForm';
import ParagraphArray from './shared/ParagraphArray';

const Contact = ({ contact }) => {
  return (
    <section id="contact">
      <Container>
        <h2>Contact</h2>
        <ParagraphArray textArray={contact} />
        <div className="breakout-info">
          <ContactForm />
        </div>
      </Container>
    </section>
  );
};

export default Contact;
