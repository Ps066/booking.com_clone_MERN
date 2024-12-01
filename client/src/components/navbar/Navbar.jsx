import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navContainer">
            <span className="logo">Booking.com</span>
            <div className="navItems">
                <button className="navButtons">Register</button>
                <button className="navButtons">Login</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar