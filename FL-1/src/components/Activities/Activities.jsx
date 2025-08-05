// Activities.jsx
import { activityData } from "../../constants";
import "./Activities.scss";

const Activities = () => {
  return (
    <div className="activities-container">
      <h1 className="heading">Popular Services</h1> 
      
      <div className="activities">
        {activityData.map((activity, index) => (
          <div className="activity_card" key={activity.key || index}>
            <div className="activity_header">
              <h2>{activity.activity}</h2>
            </div>
            
            <div className="activity_content">
              <div className="activity_description">
                <p>{activity.description}</p>
              </div>
              
              <div className="activity_footer">
                <div className="activity_price">
                  {activity.price}
                </div>
                
                <button className="activity_button">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Activities;