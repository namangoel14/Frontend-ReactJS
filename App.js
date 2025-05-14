import React from 'react';
import ReactDOM from 'react-dom/client';

/*  Low level planning for food ordering Application
 * Header
 * - Logo
 * - Navigation Items (About, Home etc.)
 * Body
 * - Search
 * - Location
 * - RestaurantContainer
 *   - RestaurantCard
 *      - cuisins
 *      - star rating
 *      - delivery timing
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

// restaurant-card component inside the body for our Food App

const RestaurantCard = () => {
  return (
    <div className="res-card" style={{ backgroundColor: '#f0f0f0' }}>
      <img
        className="res-logo"
        alt="res-logo"
        style={{ borderRadius: '10px' }}
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2025/2/11/79f3aab9-72aa-4870-83ff-c042af5e0860_c9b188a1-85ca-42f5-a32a-908093921b13.jpg"
      />
      <h3>Desi street food</h3>
      <h4>Briyani, North Indian, Asian Food</h4>
      <h4>4.4 stars</h4>
      <h4>40-45 mins</h4>
    </div>
  );
};

// Body Component for out Food App

const Body = () => {
  return (
    <div className="body">
      <div className="actions">
        <button className="search">
          <div>Search</div>
        </button>
        <button className="location">
          <div>Location</div>
        </button>
      </div>
      <div className="res-container">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
};

// Top level Component for our food App
const LayoutApp = () => {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<LayoutApp />);
