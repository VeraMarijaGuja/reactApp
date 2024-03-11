import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Item from "./Item";

const List = (props) => {

    const [extendAccommodation, setExtendAccommodation] = useState(false);
    const navigate = useNavigate();
    if (props.items.length === 0) {
        return (
        <div className="center">
            <Card>
            <h2>No accommodations found.</h2>
            </Card>
        </div>
        );
    }

/*   const navigateToCreateUser = () => {
    navigate("/user/new");
  }; */
  const extendAccommodationOptions = async () => {
    setExtendAccommodation(!extendAccommodation);
  }
  return (
    <React.Fragment>
      <div className="accommodations-list-main">
        { <ul style={{ listStyleType: "none" }} className="accommodations-list">
          {props.items.map((accommodation) => (
            <li style={{padding:"2rem"}}>
            <Item
              key={accommodation.id}
              id={accommodation.id}
              image={accommodation.image}
              title={accommodation.title}
              capacity={accommodation.capacity}
              beachDistanceInMeters={accommodation.beachDistanceInMeters}
              airConditioning={accommodation.amenities.airConditioning}
              parkingSpace={accommodation.amenities.parkingSpace}
              pets={accommodation.amenities.pets}
              pool={accommodation.amenities.pool}
              wifi={accommodation.amenities.wifi}
              tv={accommodation.amenities.tv}
              pricelistInEuros={accommodation.pricelistInEuros}
              availableDates={accommodation.availableDates}
            />
 
                 {/* <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={`${accommodation.image}`}/>
        <Card.Body>
            <h3>{accommodation.title}</h3>
            <p>Maksimalan broj osoba: {accommodation.capacity}</p>
            {accommodation.beachDistanceInMeters && <p>Udaljenost od plaže: {accommodation.beachDistanceInMeters} m</p>}
            <Button variant="primary" onClick={extendAccommodationOptions}> Extra information</Button>
            {extendAccommodation && accommodation.amenities.airConditioning && <p>AirConditioning : Yes</p>}
            {extendAccommodation && !accommodation.amenities.airConditioning && <p>AirConditioning : No</p>}
            {extendAccommodation && accommodation.amenities.parkingSpace && <p>Parking Space : Yes</p>}
            {extendAccommodation && !accommodation.amenities.parkingSpace && <p>Parking Space : No</p>}
            {extendAccommodation && accommodation.amenities.pets && <p>Pets allowed : Yes</p>}
            {extendAccommodation && !accommodation.amenities.pets && <p>Pets allowed : No</p>}
            {extendAccommodation && accommodation.amenities.pool && <p>Pool : Yes</p>}
            {extendAccommodation && !accommodation.amenities.pool && <p>Pool : No</p>}
            {extendAccommodation && accommodation.amenities.wifi && <p>Wifi : Yes</p>}
            {extendAccommodation && !accommodation.amenities.wifi && <p>Wifi : No</p>}
            {extendAccommodation && accommodation.amenities.tv && <p>Tv : Yes</p>}
            {extendAccommodation && !accommodation.amenities.tv && <p>Tv : No</p>}
        </Card.Body>
        </Card> */}
            </li>
      
          ))}
        </ul> }
      </div>
    </React.Fragment>
  );
};

export default List;
