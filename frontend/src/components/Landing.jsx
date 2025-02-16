import { Link } from "react-router-dom";
import "./landing.css"; // Import CSS file

export default function Landing() {
  return (
    <div className="landing-container">
      {/* Main Content */}
      <div className="landing-content">
        <h1 className="landing-title">Choose Bevanda Mobile Bar for Your Event</h1>

        {/* Image Section */}
        <div className="image-section">
          <img src="/assets/BevandaLeft.jpg" alt="Bevanda Left" className="landing-image" />
          <img src="/assets/BevandaMiddle.jpg" alt="Bevanda Middle" className="landing-image" />
          <img src="/assets/BevandaRight.jpg" alt="Bevanda Right" className="landing-image" />
        </div>

        {/* Call to Action Box */}
        <div className="cta-box">
          <p className="cta-text">VIEW BUNDLE MENU LIST</p>
          <Link to="/booking" className="cta-button">BOOK NOW</Link>
        </div>
      </div>
    </div>
  );
}
