import { useState } from 'react';

function Blog() {
  const [formStatus, setFormStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xpwdkkwj', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json',
        },
      });

      if (response.ok) {
        setFormStatus('success');
        form.reset();
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }
  };

  return (
    <section id="blog" className="section section-blog">
      <div className="container">
        <h2 className="section-title">Fashion Blog</h2>
        <p className="section-text">Stay updated with the latest crochet fashion trends and tips.</p>
        <div className="subscribe-form-container">
          <h3 className="subscribe-title">Subscribe for New Product Updates</h3>
          <form onSubmit={handleSubmit} className="subscribe-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="form-input"
                placeholder="Enter your name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="form-input"
                placeholder="Enter your email"
              />
            </div>
            <button type="submit" className="button button-subscribe">Subscribe</button>
          </form>
          {formStatus === 'success' && (
            <p className="form-message form-success">Thank you for subscribing!</p>
          )}
          {formStatus === 'error' && (
            <p className="form-message form-error">Error submitting form. Please try again.</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Blog;