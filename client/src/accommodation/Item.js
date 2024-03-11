import React, { useContext, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from "react-router-dom";



const Item = (props) => {
  const [extendAccommodation, setExtendAccommodation] = useState(false);
  const [dateFields, setDateFields] = useState(false);
  const [minPrice, setMinPrice] = useState();
  const [maxPrice, setMaxPrice] = useState();
  const [dates, setDates] = useState(false);
  const [isLoading, setIsLoading] = useState();
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [totalPrice, setTotalPrice] = useState();

  const extendAccommodationOptions = async () => {
    setExtendAccommodation(!extendAccommodation);
  }

  const openDateFields = async () => {
    setDateFields(!dateFields);
  }

  const priceArr = [];
  useEffect(() => {
  const prices = async () => {   
    props.pricelistInEuros.forEach(element => {
      priceArr.push(element.pricePerNight)
    });
    setMinPrice(Math.min(...priceArr));
    setMaxPrice(Math.max(...priceArr));
  }
  prices();
  }, []);

  const checkIntervalDates= (startDate, endDate) => {
   
    let accommodationDatesAvailable = props.availableDates;
    let accommodationPrices = props.pricelistInEuros;
    //let differenceInDays = Math.round(endDate.getTime() - startDate.getTime() / (1000 * 3600 * 24));
    let available= false;
    let price;
    accommodationDatesAvailable.forEach(dates => {
      if (new Date(startDate) >= new Date(dates.intervalStart) && new Date(endDate) <= new Date(dates.intervalEnd)){
          available = true;
        }   
  });
  return available;
}



  return (
    <React.Fragment>   
     <Card style={{ width: '50rem', marginBottom:"2rem" }}>
        <Card.Img variant="top" src={`${props.image}`}/>
        <Card.Body>
        <h3>{props.title}</h3>
          <div style={{display:"flex"}}>
          <div style={{marginRight:"3rem"}}>    
            <p>Maksimalan broj osoba: {props.capacity}</p>
            {props.beachDistanceInMeters && <p>Udaljenost od plaže: {props.beachDistanceInMeters} m</p>}
            <Button variant="primary" onClick={extendAccommodationOptions}> Extra information</Button>
            {extendAccommodation && props.airConditioning && <p>AirConditioning : Yes</p>}
            {extendAccommodation && !props.airConditioning && <p>AirConditioning : No</p>}
            {extendAccommodation && props.parkingSpace && <p>Parking Space : Yes</p>}
            {extendAccommodation && !props.parkingSpace && <p>Parking Space : No</p>}
            {extendAccommodation && props.pets && <p>Pets allowed : Yes</p>}
            {extendAccommodation && !props.pets && <p>Pets allowed : No</p>}
            {extendAccommodation && props.pool && <p>Pool : Yes</p>}
            {extendAccommodation && !props.pool && <p>Pool : No</p>}
            {extendAccommodation && props.wifi && <p>Wifi : Yes</p>}
            {extendAccommodation && !props.wifi && <p>Wifi : No</p>}
            {extendAccommodation && props.tv && <p>Tv : Yes</p>}
            {extendAccommodation && !props.tv && <p>Tv : No</p>}
            </div>
            <div>
            {!dateFields && <p>Smallest price: {minPrice}</p>}
            {!dateFields && <p>Highest price: { maxPrice} </p>}
            <Button variant="primary" onClick={openDateFields}> Choose dates</Button>
           {dateFields &&  <p>Start date</p> && <DatePicker selected={startDate} onChange={(startDate) => setStartDate(startDate)} />}
           {dateFields &&  <p>End date</p> && <DatePicker selected={endDate} onChange={(endDate) => setEndDate(endDate)} />}
         
           {startDate && endDate && checkIntervalDates(startDate, endDate) && 
            <Link
            to={`/`}
            state={{
              title: props.title,
              startDate: startDate,
              endDate: endDate,
              capacity: props.capacity,
              pricelistInEuros: props.pricelistInEuros,
            }}
          >
            <Button>Rezerviraj</Button>
          </Link>}
            </div>
            </div>
        </Card.Body>
        </Card>

      
    </React.Fragment>
  );
};

export default Item;
