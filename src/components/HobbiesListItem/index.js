import React from "react";

const HobbiesListItem = props => {
  const { hobbies, removeHobby, manId } = props;
  const elements = hobbies.map((item) => {

    const hobbyId = item.id;

    return (
      <li key={hobbyId} className="hobbies-list-item">
        <p className="col">{ item.passion }</p>
        <p className="col">{ item.name }</p>
        <p className="col">{ item.year }</p>
        <button className="btn btn_remove" onClick={ () => removeHobby (manId, hobbyId) }/>
      </li>
    );

  });


  return (
    <>{ elements }</>
  );


};

export default HobbiesListItem;