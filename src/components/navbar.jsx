function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        Trip<span>x.</span>
      </div>

      {/* Menu */}
      <ul className="nav-links">
        <li>Home</li>
        <li>Tour</li>
        <li>About</li>
        <li>Service</li>
      </ul>

      {/* Button */}
      <button className="nav-btn">Book Now</button>
    </nav>
  );
}

export default Navbar;
