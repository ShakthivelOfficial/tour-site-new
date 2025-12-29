const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="container">
        <div className="row contact-card">

          {/* LEFT SIDE – FORM */}
          <div className="col-md-6 form-side">
            <h2>Chat to our team</h2>
            <p className="subtitle">
              Need help with something? Get in touch with our friendly team.
            </p>

            <div className="row">
              <div className="col-md-6 mb-3">
                <input type="text" placeholder="First name" />
              </div>
              <div className="col-md-6 mb-3">
                <input type="text" placeholder="Last name" />
              </div>
            </div>

            <input type="number" placeholder="Age" className="mb-3" />
            <input type="email" placeholder="email" className="mb-3" />
            <input type="tel" placeholder="Phone number" className="mb-4" />


            <button className="btn btn-primary w-100 mt-4">
              Get in touch
            </button>
          </div>

          {/* RIGHT SIDE – IMAGE */}
          <div className="col-md-6 image-side">
            <div className="overlay"></div>
            <div className="image-text">
              <h5>
                Nature helps us relax, focus better, and reconnect with ourselves.
              </h5>
              <p>— TripX Experiences</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
