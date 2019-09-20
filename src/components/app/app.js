import React, { useState } from "react";

import PeopleList     from '../PeopleList';
import HobbiesBlock   from '../HobbiesBlock';
import PeopleAddForm  from '../PeopleAddForm';
import HobbiesAddForm from '../HobbiesAddForm';


import shortid from 'shortid'

import { Wrap, Hobbies, People } from './styles'


const App = () => {

  const state = {
    peopleData: [
      {

        name: "John",
        open: false,
        id: shortid.generate(),
        hobbies: [
          { id: shortid.generate(), passion: "Low", name: "Football", year: "2014" },
          { id: shortid.generate(), passion: "Med", name: "Coding", year: "2016" },
          { id: shortid.generate(), passion: "High", name: "Listening", year: "2007" }

        ]
      }, {

        name: "Peter",
        open: false,
        id: shortid.generate(),
        hobbies: [
          { id: shortid.generate(), passion: "Med", name: "Coding", year: "2016" },
          { id: shortid.generate(), passion: "Low", name: "Football", year: "2014" }

        ]
      }, {

        name: "Markus",
        open: false,
        id: shortid.generate(),
        hobbies: [
          { id: shortid.generate(), passion: "High", name: "Listening", year: "2007" },
          { id: shortid.generate(), passion: "Low", name: "Football", year: "2014" },
          { id: shortid.generate(), passion: "Med", name: "Coding", year: "2016" }

        ]
      }],

    showHobbies: null,
  };

  const [people, setPeople] = useState(state.peopleData);
  const [showHobbies, setShowHobbies] = useState(state.showHobbies);

  const removeHobby = (manId, hobbyId) => {
    const thisUser = people.filter((el) => el.id === manId);
    const newHobbies = thisUser[0].hobbies.filter((item) => item.id !== hobbyId);
    const newUsers = people.filter((el) => {
      el.hobbies = el.id === manId ? newHobbies : '';
      return el;
    });
    setPeople([...newUsers])
  };

  const addPeople = ( name ) => {
    const newItem = {
      name,
      open: false,
      id: shortid.generate(),
      hobbies: []
    };
    setPeople([...people, newItem])
  };

  const removePeople = ( id ) => {
    const newUsers = people.filter((el) => el.id !== id);
    setPeople( [...newUsers] )
  };

  const addHobby = ( state ) => {
    const newPeople = people.map(user => user.id === showHobbies ? { ...user, hobbies: [...user.hobbies, state] } : user);
    setPeople( [...newPeople] )
  };

  const onToggleOpen = ( id ) => {
    people.map(user => user.id === id ? user.open = true : user.open = false);
    setShowHobbies( id );
  };
  return (
    <Wrap>
      <People>
        <PeopleAddForm addPeople={ addPeople }/>
        <PeopleList
          people={ people }
          removePeople={ removePeople }
          onToggleOpen={ onToggleOpen }/>
      </People>
      <Hobbies>
        <HobbiesAddForm addHobby={ addHobby } show={ showHobbies }/>
        <HobbiesBlock
          people={ people }
          removeHobby={ removeHobby }
          manId={ showHobbies }
        />
      </Hobbies>
    </Wrap>
  );
}

export default App;