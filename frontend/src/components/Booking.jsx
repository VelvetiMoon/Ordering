import { useState } from "react";
import "./booking.css"; // Import CSS file

export default function Booking() {
  const [pax, setPax] = useState(30);

  const prices = {
    30: 16500,
    50: 19500,
    80: 21000,
    100: 24500,
    150: 29500,
    200: 36500,
    450: 66500,
    500: 74500,
    1200: 186500,
  };

  const handleChange = (e) => {
    setPax(parseInt(e.target.value));
  };

  return (
    <div className="booking-container">
      <div className="booking-box">
        
        {/* Header */}
        <h2 className="booking-title">Unlimited Package</h2>

        {/* Grid Layout: Left (Drinks List) | Right (Pax & Price Table) */}
        <div className="booking-grid">
          
          {/* Left: Enlarged Drinks List */}
          <div className="booking-left">
            <div className="drink-columns">
              <div>
                <h3 className="drink-title">Cocktail</h3>
                <p>Shirley Temple, Margarita Blue, Margarita Red, Tequila Sunrise, Cuba Libre, Mojito, Gimlet, Blue Lagoon, Tom Collins, Kamikaze, Sex on the Beach</p>
              </div>
              <div>
                <h3 className="drink-title">Mocktail</h3>
                <p>Cinderella, Four Seasons, Shirley Temple Supreme, Appletini</p>
              </div>
              <div>
                <h3 className="drink-title">Shooters</h3>
                <p>Dirty Shirley, Daiquiri, Rainbow, Summer Shot, Amnesia, Blowjob, 4th of July, Red Headed</p>
              </div>
              <div>
                <h3 className="drink-title">Special Request</h3>
                <p>Lime Basil, Dry Martini, Manhattan, Perfect Manhattan, Cosmopolitan, Harvey Wallbanger, Brandy Alexander, White Russian, Black Russian, Negroni, Vodka Martini, Frozen Daiquiri, Mango Daiquiri</p>
              </div>
            </div>
            <p className="note-text">15% for reservation payable via GCash, BPI, PNB Land Bank, Metro Bank</p>
          </div>

          {/* Right: Smaller Pax & Price Section */}
          <div className="booking-right">
            <h3 className="pax-title">PAX</h3>
            
            {/* Dropdown Selection */}
            <select value={pax} onChange={handleChange} className="pax-dropdown">
              {Object.entries(prices).map(([key, value]) => (
                <option key={key} value={key}>
                  {key} pax - ₱{value.toLocaleString()}
                </option>
              ))}
            </select>

            {/* Price Display */}
            <h3 className="price-title">PRICE</h3>
            <p className="price-text">₱{prices[pax].toLocaleString()}</p>

            {/* Confirm Button */}
            <button className="confirm-button">
              CONFIRM
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
