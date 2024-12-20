import { faBed, faCar, faPlane, faTaxi, faCalendarDays, faPerson } from '@fortawesome/free-solid-svg-icons'
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { DateRange } from 'react-date-range';
import { useState } from 'react';
import { format } from 'date-fns';


// css files
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

const Header = ({type}) => {
    // to handel the display of date screen pop up
    const [openDate, setOpenDate] = useState(false);

    //to set date 
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection',
        },
    ]);

    // to handel the display of the options
    const [openOptions,setOpenOptions] = useState(false);

    // to handel the search options

    const [options, setOptions] = useState({
        adult:1,
        children:0,
        room:1,
    })
    const handleOption = (name,operation) =>{
        setOptions(prev=>{return{
            ...prev, [name]: operation === "i" ? options[name] +1 : options[name]-1,
        }})
    }

  return (
    <div className="header">
        <div className={type === "list"? "headerContainer list" : "headerContainer"}>
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
            {type !== "list" && 
            <>
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
                    <span className="headerSearchText" onClick={()=>setOpenDate(!openDate)}>{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate,"dd/MM/yyyy")}`}</span>
                    {openDate && <DateRange
                        editableDateInputs={true}
                        onChange={(item) => setDate([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={date}
                        className="date"
                    />}
                </div>
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faPerson}  className='headerIcons' />
                    <span onClick={()=>setOpenOptions(!openOptions)} className="headerSearchText">{`${options.adult} adult , ${options.children} childrens , ${options.room} room`}</span>
                    {openOptions && <div className="options">
                        <div className="optionsItem">
                            <span className="optionText">Adult</span>
                            <div className="optionCounter">
                                <button 
                                    disabled={options.adult <= 1}
                                    className="optionCounterBtn" 
                                    onClick={()=>handleOption("adult","d")}
                                >-</button>
                                <span className="optionCounterNumber">{options.adult}</span>
                                <button className="optionCounterBtn" onClick={()=>handleOption("adult","i")}>+</button>
                            </div>
                        </div>
                        <div className="optionsItem">
                            <span className="optionText">Children</span>
                            <div className="optionCounter">
                                <button 
                                    disabled={options.children == 0}
                                    className="optionCounterBtn" 
                                    onClick={()=>handleOption("children","d")}
                                >-</button>
                                <span className="optionCounterNumber">{options.children}</span>
                                <button className="optionCounterBtn" onClick={()=>handleOption("children","i")}>+</button>
                            </div>
                        </div>
                        <div className="optionsItem">
                            <span className="optionText">Room</span>
                            <div className="optionCounter">
                                <button 
                                    disabled={options.room <= 1}
                                    className="optionCounterBtn" 
                                    onClick={()=>handleOption("room","d")}
                                >-</button>
                                <span className="optionCounterNumber">{options.room}</span>
                                <button className="optionCounterBtn" onClick={()=>handleOption("room","i")}>+</button>
                            </div>
                        </div>
                    </div>}
                </div>
                <div className="headerSearchItem">
                    <button className="headerBtn">Search</button>
                </div>
            </div>
            </>}
        </div>
    </div>
  )
}

export default Header