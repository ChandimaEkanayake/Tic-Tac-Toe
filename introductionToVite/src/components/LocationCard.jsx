import { IconMapPin } from "@tabler/icons-react";
import "./LocationCard.css";
const LocationCard = () => {
  return (
    <div className="location-card">
      <div className="location-image">
        <img 
          src="https://cdn.britannica.com/47/80547-050-8B316D38/Field-green-tea-Mount-Fuji-Shizuoka-prefecture.jpg"
          alt="Mount Fuji"
        />
      </div>
      
      <div className="location-content">
        <div className="location-header">
          <div className="location-country">
            <IconMapPin className="pin-icon" />
            <span>JAPAN</span>
            <a href="#" className="maps-link">
              View on Google Maps
            </a>
          </div>
          <h2>Mount Fuji</h2>
        </div>
        
        <div className="location-date">
          12 Jan, 2021 - 24 Jan, 2021
        </div>
        
        <p className="location-description">
          Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). 
          Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.
        </p>
      </div>
    </div>
  );
};

export default LocationCard;