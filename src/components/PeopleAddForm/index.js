import React, { useState } from 'react'

import { AddPeople } from './styles'

const PeopleAddForm = props => {

  const { addPeople } = props;

  const [name, setName] = useState('');

  const [errorClass, setErrorClass] = useState('');

  const rv_name = /^([A-zА-я'])*$/;

  const validation = (e, fieldName) => {
    setName(e.target.value);
    if (fieldName.length >= 2 && rv_name.test(fieldName)) {
      setErrorClass('')
    }
  }

  const onSubmit = e => {
    e.preventDefault();
    if (name.length >= 2 && rv_name.test(name)) {
      addPeople(name);
      setName('');
    } else {
      setErrorClass('error ')
    }
  };

  return (
    <AddPeople className="add-people" onSubmit={onSubmit}>
      <input type="text"
             className={`${errorClass}input`}
             onChange={(e) => validation(e, name)}
             value={name}
             placeholder="Enter user name"/>
      <button className="btn btn_add">Add</button>
    </AddPeople>
  );

}
export default PeopleAddForm;