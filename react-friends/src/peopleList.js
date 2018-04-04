import React from 'react';

export const PeopleList = props => {
  console.log("people", props.peopleProp[0]);
  return (
      <div>
        {props.peopleProp.map((p) => (
          <div className={props.Container}>
            <h1 className={props.name}>name: {p.first_name} {" "} {p.last_name}</h1>
            <h3 className={props.email}>email: {p.email}</h3>
          </div>
        ))}
      </div>
  );
}
