// Pranayama.jsx
import { useState } from "react";
import "./Pranayama.scss";

const Pranayama = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    dateOfBirth: "",
    education: "",
    profession: "",
    majorHealthConcerns: "",
    minorHealthConcerns: "",
    hobbies: "",
    socialHabits: "",
    sports: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  return (
    <div className="pranayama-container">
      <div className="pranayama-content">
        <header className="pranayama-header">
          <h1>Pranayama: Basic Yogic Breathing</h1>
          <p className="subtitle">Introduction - Module I</p>
        </header>

        <section className="objective-section">
          <h2>Objective of Pranayama</h2>
          <p>The primary objective is to create and maintain harmony between physical, psychic and spiritual bodies of the individual.</p>
        </section>

        <section className="how-section">
          <h2>How of Yogic Breathing: Pranayama</h2>
          <p>By training the holistic respiratory apparatus to breath in a deep, slow, smooth, and rhythmic manner for higher proficiency on a gross level and on a subtle level condition the autonomous nervous system to react to anger, anxiety etc. without panic and rationally.</p>
          
          <div className="benefits-container">
            <h3>A few Benefits:</h3>
            <ul className="benefits-list">
              <li>Rejuvenate and Re-energize</li>
              <li>Deep, slow, uniform and rhythmic breathing</li>
              <li>↓ Stress and Anxiety</li>
              <li>↑ Oxygen content in blood</li>
              <li>↓ Respiratory & Heart rates</li>
              <li>↓ and stabilize Blood Pressure</li>
              <li>↑ Control over emotions, anger & ↓ panic</li>
              <li>↑ Focus and concentration</li>
              <li>Experience peace, inner harmony and quietude</li>
              <li>Facilitate overall relaxation</li>
            </ul>
          </div>
        </section>

        <section className="description-section">
          <p>To achieve the stated objectives of pranayama the individual is trained to breathe in a slow, uniform and rhythmic manner to utilize the lungs' capacities more efficiently on a gross level and to regulate the energy level in the consciousness act at the subtle level. It also raises the individuals' autonomous nervous system not to overreact to anxiety, emergency situations etc. With the proper training of pranayama larger parts of lungs are utilized as opposed to a few in the normal routine.</p>
          
          <div className="learning-container">
            <h3>You will learn:</h3>
            <ul className="learning-list">
              <li>Introduction - the basics of Yogic Breathing</li>
              <li>Yogic Breathing techniques to reduce Stress and Anxiety</li>
              <li>Prana and Respiration</li>
              <li>Importance and reference of Prana in Scriptures</li>
              <li>Awareness of Breath</li>
              <li>Important attributes of Breath</li>
              <li>Respiration vs Deep breathing vs Yogic Breathing</li>
              <li>Identify the four essential Phases of Breathing cycle</li>
              <li>Learn and Practice basic Yogic Breathing techniques</li>
              <li>Mudras and Bandhas as related to Yogic Breathings</li>
              <li>Introduction to Kriyas – Agni Sara</li>
              <li>Introduction to five types of Prana Vayus and Swara Yoga</li>
              <li>Introduction to advanced Yogic Breathing techniques</li>
            </ul>
          </div>
        </section>

        <section className="course-info">
          <div className="info-card">
            <h3>Course Information</h3>
            <div className="info-details">
              <p><strong>Cost:</strong> $400 for 13 sessions</p>
              <p><strong>Start Date:</strong> March 12 and 13</p>
              <p><strong>Schedule:</strong> Every Sunday 7:30 to 8:30 (time may change)</p>
              <p><strong>Maximum Enrollment:</strong> 40 (first come first serve basis)</p>
              <p><strong>Free Introductory Class:</strong> March 6th at the same time, open and free to all</p>
              <p><strong>Additional Times:</strong> Soon classes will be starting at 9:00 and 10:30 EST to accommodate curious learners from other time zones</p>
            </div>
          </div>
        </section>

        <section className="form-section">
          <h2>Please fill out below form to Participate</h2>
          <form onSubmit={handleSubmit} className="registration-form">
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group address-group">
              <label>Complete Mailing Address</label>
              <input
                type="text"
                name="street"
                placeholder="Street Address"
                value={formData.street}
                onChange={handleChange}
                required
              />
              <div className="address-row">
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="state"
                  placeholder="State"
                  value={formData.state}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="zip"
                  placeholder="ZIP Code"
                  value={formData.zip}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="dateOfBirth">Date of Birth / Age</label>
              <input
                type="text"
                id="dateOfBirth"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="education">Highest Degree (education)</label>
              <input
                type="text"
                id="education"
                name="education"
                value={formData.education}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="profession">Profession</label>
              <input
                type="text"
                id="profession"
                name="profession"
                value={formData.profession}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="majorHealthConcerns">Major Health Concerns (under active management by a physician)</label>
              <textarea
                id="majorHealthConcerns"
                name="majorHealthConcerns"
                value={formData.majorHealthConcerns}
                onChange={handleChange}
                rows="4"
              />
            </div>

            <div className="form-group">
              <label htmlFor="minorHealthConcerns">Minor Health Concerns (other, such as anxiety, irritability, anger etc.)</label>
              <textarea
                id="minorHealthConcerns"
                name="minorHealthConcerns"
                value={formData.minorHealthConcerns}
                onChange={handleChange}
                rows="4"
              />
            </div>

            <div className="form-group">
              <label htmlFor="hobbies">Hobbies and special interests</label>
              <textarea
                id="hobbies"
                name="hobbies"
                value={formData.hobbies}
                onChange={handleChange}
                rows="4"
              />
            </div>

            <div className="form-group">
              <label htmlFor="socialHabits">Social/compulsive Habits (Smoking, Alcohol, Caffein or Any Other)</label>
              <textarea
                id="socialHabits"
                name="socialHabits"
                value={formData.socialHabits}
                onChange={handleChange}
                rows="4"
              />
            </div>

            <div className="form-group">
              <label htmlFor="sports">Sports/ Recreational Means</label>
              <textarea
                id="sports"
                name="sports"
                value={formData.sports}
                onChange={handleChange}
                rows="4"
              />
            </div>

            <div className="disclaimer">
              <p><strong>Disclaimer:</strong> This course/ training is not intended to be a substitute for professional medical diagnosis or treatment. Please seek the advice of your physician or other qualified licensed health provider regarding any medical condition. Individual results may vary.</p>
            </div>

            <button type="submit" className="submit-button">Submit</button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Pranayama;