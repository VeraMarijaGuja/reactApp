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
    setExtendAccommodation(true);
  }
  return (
    <React.Fragment>
      <div className="accommodations-list-main">
        { <ul style={{ listStyleType: "none" }} className="accommodations-list">
          {props.items.map((accommodation) => (
            <li>
                 <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={`${accommodation.image}`}/>
        <Card.Body>
            <h3>{accommodation.title}</h3>
            <p>Maksimalan broj osoba: {accommodation.capacity}</p>
            {accommodation.beachDistanceInMeters && <p>Udaljenost od plaže: {accommodation.beachDistanceInMeters} m</p>}
            <Button variant="primary" onClick={extendAccommodationOptions}> Proširi</Button>
            {extendAccommodation && 
            <p>AirConditioning : {accommodation.amenities.airConditioning}</p> &&
            <p>Parking space : {accommodation.amenities.parkingSpace}</p> &&
            <p>Pets allowed : {accommodation.amenities.pets}</p> &&
            <p>Pool : {accommodation.amenities.pool}</p> &&
            <p>Wifi : {accommodation.amenities.wifi}</p> &&
            <p>Tv : {accommodation.amenities.tv}</p>}
        </Card.Body>
        </Card>
        
            </li>
          ))}
        </ul> }
      </div>
    </React.Fragment>
  );
};

export default List;
