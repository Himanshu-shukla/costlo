import "./Contact.scss";
import { useRef, useState } from "react";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { BACKEND_URL } from "../../config";
import axios from "axios";

const Contact = () => {
  const formRef = useRef();
  const [dob, setDob] = useState(null);
  const [tob, setTob] = useState(null);

  const toastOptions = {
    position: "bottom-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      dob: dob ? dob.toISOString().split("T")[0] : "", // YYYY-MM-DD
      tob: tob ? `${tob.getHours().toString().padStart(2, "0")}:${tob
        .getMinutes()
        .toString()
        .padStart(2, "0")}` : "", // HH:mm
      pob: formData.get("pob"),
      message: formData.get("message"),
    };

    try {
      await axios.post(`${BACKEND_URL}/send-user-details`, data);
      toast.success("Mail sent successfully!", toastOptions);
      formRef.current.reset();
      setDob(null);
      setTob(null);
    } catch (err) {
      console.error(err);
      toast.error("Unable to send mail!", toastOptions);
    }
  };

  return (
    <>
      <div className="contact">
        <h1 className="heading">Contact</h1>
        <div className="contact_1">
          <div className="contact_1_text">
            <div className="contact_1_element">
              <h3>Phone Number</h3>
              <p>302 588 5883</p>
            </div>
            <div className="contact_1_element">
              <h3>Email</h3>
              <p>sbarya@live.com</p>
            </div>
            <div className="contact_1_element">
              <h3>Address</h3>
              <p>
                Satya Bandhu Arya
                <br />
                9 Briars Ln, Greenville, DE 19807
              </p>
            </div>
          </div>

          <div className="contact_form">
            <form ref={formRef} onSubmit={sendEmail}>
              <input
                type="text"
                placeholder="Full Name"
                name="name"
                required
                autoComplete="off"
              />

              <input
                type="email"
                placeholder="Email"
                name="email"
                required
                autoComplete="off"
              />

              <input
                type="text"
                placeholder="Phone Number"
                name="phone"
                required
                autoComplete="off"
                pattern="[1-9]{1}[0-9]{9}"
                title="Enter 10-digit phone number"
                inputMode="numeric"
              />

              {/* ✅ Date of Birth */}
              <DatePicker
                selected={dob}
                onChange={(date) => setDob(date)}
                placeholderText="Date of Birth"
                dateFormat="yyyy-MM-dd"
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
                 className="form-input"
              />

              {/* ✅ Time of Birth */}
              <DatePicker
                selected={tob}
                onChange={(date) => setTob(date)}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                timeCaption="Time of Birth"
                dateFormat="HH:mm"
                placeholderText="Time of Birth"
                 className="form-input"
              />

              {/* ✅ Place of Birth */}
              <input
                type="text"
                placeholder="Place of Birth"
                name="pob"
                required
                autoComplete="off"
              />

              <textarea rows={4} placeholder="Message" name="message" />

              <button>Submit</button>
            </form>
          </div>
        </div>

        <div className="contact_2">
          <div className="contact_2_map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6132.784037774987!2d-75.593096!3d39.775757!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6fc4b986b183f%3A0x2e4759f9dc227666!2s9%20Briars%20Ln%2C%20Greenville%2C%20DE%2019807%2C%20USA!5e0!3m2!1sen!2sin!4v1752582885808!5m2!1sen!2sin"
              width="600"
              height="450"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      <ToastContainer transition={Bounce} />
    </>
  );
};

export default Contact;
