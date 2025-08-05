import { facilitiesData } from "../../constants";
import "./Facilities.scss";

const Facilities = () => {
  return (
    <div className="facilities">
      <h2 className="heading">Astrology</h2>
      {/* <p className="sub_heading">
        School Facilities.
        <br />
        Designed to inspire learning and well-being.
      </p> */}


      <div className="facilities_container">
        <div className="facilities_section">
          {facilitiesData.map((text) => (
            <div className="facilities" key={text.key}>
              <h2>{text.heading}</h2>
              <p>{text.text}</p>
            </div>
          ))}
        </div>
      </div>


      
    </div>
  );
};

export default Facilities;

