import React from 'react';
import ReactDOM from 'react-dom/client';

/*  Low level planning for food ordering Applocation
 * Header
 * - Logo
 * - Navigation Items (About, Home etc.)
 * Body
 * - Search
 * - Location
 * - RestaurantContainer
 *   - RestaurantCard
 * Footer
 * - CopyRights
 * - Address
 * - Contact
 */

// Header Component for our Food App

const Header = () => {
  return (
    <div className="header">
      {/* Logo */}
      <div className="logo-container">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEGhTionX-UL2clxRFmubGb_LHiqLTooE0XQ&s"
        />
      </div>
      <div className="mood">
        <b>Happy Gut Happy You</b>
      </div>
      {/* Navigation Items */}
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About US</li>
          <li>Sign in</li>
          <li>
            <img
              className="cart"
              src="https://cdn-icons-png.freepik.com/256/14090/14090797.png?ga=GA1.1.243617205.1746776182&semt=ais_hybrid"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

// Top level Component for our food App
const LayoutApp = () => {
  return (
    <div className="App">
      <Header />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<LayoutApp />);
