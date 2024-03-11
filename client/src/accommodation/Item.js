import React, { useContext, useState } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from "react-router-dom";


const Item = (props) => {
 
  const [isLoading, setIsLoading] = useState();
  const navigate = useNavigate();

/*   const removeError = () => {
    setError(null);
  }; */

  return (
    <React.Fragment>   
     
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>props.title</Card.Title>
        
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

       {/*  <div className="user-item__image">
          <img src={`http://localhost:3001/uploads/${props.picture}`} />
        </div> */}
        {/* <div className="user-item__about">
          <div className="user-item__info">
            <h2>{props.firstName + " " + props.lastName} </h2>
            <h3>
             {props.email}
            </h3>
            <h4>
              Profile created:{" "}
              <span>{new Date(props.profileCreated).toLocaleString()}</span>{" "}
            </h4>
          </div>

          <div className="user-item__Update">
            <Link
              to={`/editUser/${props.id}`}
              state={{
                userId: props.id,
                firstName: props.firstName,
                lastName: props.lastName,
                email: props.email,
                role: props.role,
                picture: props.picture,
                isActive: props.isActive,
              }}
            >
              <Button>Edit</Button>
            </Link>
            {auth.role !== "admin" && (
              <div className="user-item__Calories">
                <Link to={`/calories/${props.id}`}>
                  <Button>Calories Plan</Button>
                </Link>
              </div>
            )}
            { props.isActive && !adminProfileDelete &&  (
              <Button danger onClick={showDeleteWarningHandler}>
                DELETE
              </Button>
            )}
          </div>
        </div>
      </Card> */}
    </React.Fragment>
  );
};

export default Item;
