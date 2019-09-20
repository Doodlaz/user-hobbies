import React from "react";

const PeopleListItem = props => {

  const { name, removePeople, onToggleOpen, open } = props;

  let classNames = open ? 'open' : '';

  return (
    <>
      <p className={classNames} onClick={ onToggleOpen }>{ name }</p>
      <button className="btn btn_remove" onClick={ removePeople }/>
    </>
  )
}

export default PeopleListItem