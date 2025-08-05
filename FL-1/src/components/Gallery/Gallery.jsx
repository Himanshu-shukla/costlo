import { horoscopeData } from "../../constants";
import "./Gallery.scss";
const Gallery = () => {
  return (
    <div className="activities-container">
      <h1 className="heading">Horoscope</h1>

      <div className="activities">
        {horoscopeData.map((activity, index) => (
          <div className="activity_card" key={activity.key || index}>
            <div className="activity_header">
              <h2>{activity.title}</h2>
            </div>

            <div className="activity_content">
              <div className="activity_description">
                <p>{activity.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>


  );
};

export default Gallery;
