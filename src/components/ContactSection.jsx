import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    email: "",
    phone: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload

    const phoneRegex = /^[6-9]\d{9}$/;

    if (!phoneRegex.test(formData.phone)) {
      setError("Please enter a valid 10-digit mobile number");
      return;
    }

    setError("");
    console.log("Form Data:", formData);
    alert("Form submitted successfully ✅");
  };

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

            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <input
                type="number"
                name="age"
                placeholder="Age"
                className="mb-3"
                value={formData.age}
                onChange={handleChange}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                className="mb-3"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone number"
                className="mb-2"
                value={formData.phone}
                onChange={handleChange}
                required
              />

              {error && <p style={{ color: "red" }}>{error}</p>}

              <button type="submit" className="btn btn-primary w-100 mt-3">
                Get in touch
              </button>
            </form>
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
