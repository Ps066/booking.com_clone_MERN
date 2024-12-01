import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navContainer">
            <h3 className="logo">Booking.com</h3>
            <div className="navItems">
                <button className="navButtons">Register</button>
                <button className="navButtons">Login</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar