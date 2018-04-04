import React from 'react';

export const PeopleList = props => {
  console.log("people", props.peopleProp[0]);
  return (
      <div>
        {props.peopleProp.map((p) => (
          <div className={props.Container}>
            <h1 className={props.name}>name: {p.first_name} {" "} {p.last_name}</h1>
            <h3> email: <span className={props.email}>{p.email}</span></h3>
          </div>
        ))}
      </div>
  );
}
