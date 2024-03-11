import React, { useEffect, useState, useContext } from "react";
import List from './List';

const Accommodations = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
    const [loadedAccommodations, setLoadedAccommodations] = useState();

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
  
      fetchData();
    }, []);
  
    const errorClearHandler = () => {
      setError(null);
    };
  
    return (
      <React.Fragment>
        <div className="main-users">
       
        {!isLoading && loadedAccommodations && <List items={loadedAccommodations} />}
        </div>
      </React.Fragment>
    );
  };
  
  export default Accommodations;