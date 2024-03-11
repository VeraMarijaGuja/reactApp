import React from "react";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  const state = location.state;
  console.log(state);
  let pricesAndDates = state.pricelistInEuros;
  let differenceInDays = Math.round((new Date(state.endDate).getTime() - new Date(state.startDate).getTime()) / (1000 * 60 * 60 * 24));
  console.log(differenceInDays);

  let price;
  pricesAndDates.forEach(dates => {
    if (new Date(state.startDate) >= new Date(dates.intervalStart) ){
        price = differenceInDays*dates.pricePerNight;
      }   
});
    return( 
      <React.Fragment>
      <p>Uspjesno ste rezervirali smjestaj: {state.title}</p>
      <p>U smjestaju moze boraviti  maksimalno osoba:  {state.capacity} </p>
      <p> Rezervirano za datume od: {new Date(state.startDate).toLocaleDateString()} do: {new Date(state.endDate).toLocaleDateString()}</p>
      <p>Ukupna cijena za smještaj je: {price} euros</p>
      </React.Fragment>
    
    
    );
  };
  
  export default Home;