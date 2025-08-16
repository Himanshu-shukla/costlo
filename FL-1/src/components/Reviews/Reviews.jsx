import { reviewData } from "../../constants";
import "./Reviews.scss";

const Reviews = () => {
  return (
    <>
      <h2 className="heading">Daily Panchag</h2>

      <div className="panchagDiv">
        <p><b>New York, USA (15 July 2025)</b></p>
        <p><b>Tithi:</b> Krishna Panchami upto 13:11:44</p>
        <p>  <b>Month Amanta:</b> Ashadha</p>
        <p><b>Day:</b> Mangalavara | Samvat: 2082</p>
        <p><b>Nakshatra:</b> Poorva Bhadrapada upto 20:17:31</p>
        <p><b>Yoga:</b> Sobhana upto 26:26:58</p>
        <p><b>Karana:</b> Tetil upto 13:11:44, Gar upto 24:25:07</p>
        <p><b>Sun Rise:</b> 05:37:25 | Sun Set: 20:26:05</p>
      </div>
    </>

  );
};

export default Reviews;
