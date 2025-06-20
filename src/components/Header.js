import { LOGO_URL } from '../utils/contants';
export const Header = () => {
  return (
    <div className="header">
      {/* Logo */}
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
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

export default Header;
