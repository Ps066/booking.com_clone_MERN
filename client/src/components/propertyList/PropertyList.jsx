import { faArrowAltCircleRight, faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./propertyList.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const PropertyList = () => {
  return (
    <div className='propertyScrollView'>
      <div className='properties'>
        <div className='propertyItems'>
          <img
            src='https://plus.unsplash.com/premium_photo-1678297269980-16f4be3a15a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D'
            alt=''
            className='propertyImg'
          />
          <div className='propertyText'>
            <h1>Hotels</h1>
            <h2>233 properties</h2>
          </div>
        </div>
        <div className='propertyItems'>
          <img
            src='https://plus.unsplash.com/premium_photo-1678297269980-16f4be3a15a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D'
            alt=''
            className='propertyImg'
          />
          <div className='propertyText'>
            <h1>Hotels</h1>
            <h2>233 properties</h2>
          </div>
        </div>
        <div className='propertyItems'>
          <img
            src='https://plus.unsplash.com/premium_photo-1678297269980-16f4be3a15a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D'
            alt=''
            className='propertyImg'
          />
          <div className='propertyText'>
            <h1>Hotels</h1>
            <h2>233 properties</h2>
          </div>
        </div>
        <div className='propertyItems'>
          <img
            src='https://plus.unsplash.com/premium_photo-1678297269980-16f4be3a15a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D'
            alt=''
            className='propertyImg'
          />
          <div className='propertyText'>
            <h1>Hotels</h1>
            <h2>233 properties</h2>
          </div>
        </div>
        <div className='propertyItems'>
          <img
            src='https://plus.unsplash.com/premium_photo-1678297269980-16f4be3a15a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D'
            alt=''
            className='propertyImg'
          />
          <div className='propertyText'>
            <h1>Hotels</h1>
            <h2>233 properties</h2>
          </div>
        </div>
      </div>

      <div className="leftScrollerButton">
        <FontAwesomeIcon icon={faArrowLeft} scale={1.2}/>
      </div>
      <div className="rightScrollerButton">
        <FontAwesomeIcon icon={faArrowRight} scale={1.2}/>
      </div>
    </div>
  );
};

export default PropertyList;
