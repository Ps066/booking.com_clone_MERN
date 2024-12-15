import "./mailComponent.css"

const MailComponent = () => {
  return (
    <div className="mail">
        <h1 className="mailTitle">Save time, Save Money!</h1>
        <span className="mailDesc">Sign Up and we'll send the best deals for you.</span>
        <div className="mailInputContainer">
            <input type="text" placeholder="Your Email" />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default MailComponent