function Contact() {
  return (
    <section id="contact" className="section section-contact">
      <div className="container">
        <h2 className="section-title">Contact Us</h2>
        <p className="section-text">
          Reach out at <a href="mailto:oscararthur768@gmail.com" className="contact-link">oscararthur768@gmail.com</a> or connect with us on social media!
        </p>
        <div className="social-media">
          <a href="https://www.facebook.com/heartyfashion" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.tiktok.com/@heartyfashion" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fab fa-tiktok"></i>
          </a>
          <a href="https://www.instagram.com/heartyfashion" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;