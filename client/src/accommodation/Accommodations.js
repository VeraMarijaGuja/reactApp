import React, { useEffect, useState, useContext } from "react";
import List from './List';
import FilterAccommodation from "./FIlterAccommodation";
import FilterAmenities from "./FilterAmenities";

const Accommodations = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
    const [loadedAccommodations, setLoadedAccommodations] = useState();
    const [capacityFilterValue, setCapacityFilterValue] = useState('all');
    const [amenitiesFilterValue, setAmenitiesFilterValue] = useState('all');
    let filteredByCapacity = loadedAccommodations;
    useEffect(() => {
      const fetchData = async () => {
        setIsLoading(true);
        try {
          const response = await fetch("http://localhost:3002/accommodations", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
             
            },
          });
          const responseData = await response.json();
          responseData.forEach(element => {
            console.log('---', element);
          });
          //console.log('---',responseData);
          if (!response.ok) {
            throw new Error("error while fetching accommodations");
          }
          setLoadedAccommodations(responseData);
        } catch (error) {
          setError(error.message);
        }
        setIsLoading(false);
      };
      console.log(loadedAccommodations);
      
      fetchData();
    }, []);
    

    if (capacityFilterValue !== "all" && amenitiesFilterValue !=="all") {
      filteredByCapacity = loadedAccommodations.filter(a => {
        if(amenitiesFilterValue == "airConditioning"){
          return a.capacity == capacityFilterValue && a.amenities.airConditioning == true;
        }
        if(amenitiesFilterValue == "parkingSpace"){
          return a.capacity == capacityFilterValue && a.amenities.parkingSpace == true;
        }
        if(amenitiesFilterValue == "pets"){
          return a.capacity == capacityFilterValue && a.amenities.pets == true;
        }
        if(amenitiesFilterValue == "pool"){
          return a.capacity == capacityFilterValue && a.amenities.pool == true;
        }
        if(amenitiesFilterValue == "wifi"){
          return a.capacity == capacityFilterValue && a.amenities.wifi == true;
        }
        if(amenitiesFilterValue == "tv"){
          return a.capacity == capacityFilterValue && a.amenities.tv == true;
        }
       
    });
  }
 
    const onFilterValueSelected = (filterValue) => {
        setCapacityFilterValue(filterValue);
    }

    const onFilterAmenitiesValueSelected = (filterValue) => {
        setAmenitiesFilterValue(filterValue);
    }


    return (
      <React.Fragment>
        <div className="main-users">
        <FilterAccommodation filterValueSelected={onFilterValueSelected}></FilterAccommodation>
        <FilterAmenities filterValueSelected={onFilterAmenitiesValueSelected}></FilterAmenities>
        {!isLoading && loadedAccommodations && <List items={filteredByCapacity} />}
        </div>
      </React.Fragment>
    );
  };
  
  export default Accommodations;