import { faBed, faCar, faPlane, faTaxi, faCalendarDays, faPerson } from '@fortawesome/free-solid-svg-icons'
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { DateRange } from 'react-date-range';
import { useState } from 'react';

// css files
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

const Header = () => {
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: null,
          key: 'selection'
        }
      ]);

  return (
    <div className="header">
        <div className="headerContainer">
            <div className="headerList">
                <div className="headerListItems active">
                    <FontAwesomeIcon icon={faBed} />
                    <span>Stays</span>
                </div>
                <div className="headerListItems">
                    <FontAwesomeIcon icon={faPlane} />
                    <span>Flights</span>
                </div>
                <div className="headerListItems">
                    <FontAwesomeIcon icon={faCar} />
                    <span>Car rentals</span>
                </div>
                <div className="headerListItems">
                    <FontAwesomeIcon icon={faBed} />
                    <span>Stays</span>
                </div>
                <div className="headerListItems">
                    <FontAwesomeIcon icon={faTaxi} />
                    <span>Airport taxis</span>
                </div>
            </div>
            <h1 className="headerTitle">A lifetime of discounts? It's Genius.</h1>
            <p className="headerDesc">
                Get reward for your travels - unloack instant savings of 10% or more with a free Booking account.
            </p>
            <button className="headerBtn">Sign in / Register</button>
            <div className="headerSearch">
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faBed}  className='headerIcons' />
                    <input 
                        type="text"
                        placeholder='Where are you going?'
                        className='headerSearchInput'
                    />
                </div>
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faCalendarDays}  className='headerIcons' />
                    <span className="headerSearchText">date to date</span>
                    <DateRange
                        editableDateInputs={true}
                        onChange={item => setDate([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={date}
                    />
                </div>
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faPerson}  className='headerIcons' />
                    <span className="headerSearchText">2 adults 2 children 1 room</span>
                </div>
                <div className="headerSearchItem">
                    <button className="headerBtn">Search</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header