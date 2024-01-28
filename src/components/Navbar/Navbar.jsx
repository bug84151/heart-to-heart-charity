import "./Navbar.scss"

const Navbar = () => {
  return (
    <div className="navbar">
      <img src="assets/Logo.png" alt="Logo" className="logo" />
      <div className="menu">
        <a href="">Home</a>
        <a href="">About us</a>
        <a href="">Services</a>
        <a href="">Conact us</a>
      </div>
      <div className="cta">
        <button>Donate</button>
        <button>Volunteer</button>
      </div>
    </div>
  );
}

export default Navbar