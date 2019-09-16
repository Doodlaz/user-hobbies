import React, { Component, useState } from "react";

import PeopleList      from '../PeopleList';
import HobbiesBlock    from '../HobbiesBlock';
import PeopleAddForm     from '../PeopleAddForm';
import HobbiesAddForm     from '../HobbiesAddForm';




import shortid from 'shortid'

import { Wrap, Hobbies, People } from './styles'

export default class App extends Component {

  state = {

    peopleData: [
      {
        name: "John",
        open: false,
        id: shortid.generate(),
        hobbies: [
          { id: shortid.generate(), passion: "Low",   name: "Football",   year: "2014" },
          { id: shortid.generate(), passion: "Med",   name: "Coding",     year: "2016" },
          { id: shortid.generate(), passion: "High",  name: "Listening",  year: "2007" }
        ]
      },{
        name: "Peter",
        open: false,
        id: shortid.generate(),
        hobbies: [
          { id: shortid.generate(), passion: "Med",   name: "Coding",     year: "2016" },
          { id: shortid.generate(), passion: "Low",   name: "Football",   year: "2014" }
        ]
      }, {
        name: "Markus",
        open: false,
        id: shortid.generate(),
        hobbies: [
          { id: shortid.generate(), passion: "High",  name: "Listening",  year: "2007" },
          { id: shortid.generate(), passion: "Low",   name: "Football",   year: "2014" },
          { id: shortid.generate(), passion: "Med",   name: "Coding",     year: "2016" }
        ]
      }
    ],

    showHobbies: null,
  };
  removeHobby = ( manId, hobbyId) => {

    const
    thisUser = this.state.peopleData.filter((el) => el.id === manId),
    newHobbies = thisUser[0].hobbies.filter((item) => item.id !== hobbyId),
    newUsers = this.state.peopleData.filter((el) => {
      if(el.id === manId) {
        el.hobbies = newHobbies;
      }
      return el;
    });
    this.setState({ peopleData : newUsers });

  };

  addPeople = ( name ) => {
    const newItem =  {
      name,
      open: false,
      id: shortid.generate(),
      hobbies: []
    };
    this.setState(({peopleData}) => {
      const newArr = [...peopleData,
        newItem
      ];
      return { peopleData: newArr }
    });
  };

  addHobby = ( state ) => {
    const peopleData = this.state.peopleData.map(user => user.id === this.state.showHobbies ? { ...user, hobbies: [...user.hobbies, state]} : user);

    this.setState({ peopleData });
  };

  removePeople = ( id ) => {
    const newUsers = this.state.peopleData.filter((el) => el.id !== id);
    this.setState({ peopleData:newUsers });
  };



  onToggleOpen = (id) => {
    this.setState({ showHobbies: id });
    this.state.peopleData.map(user => user.id === id ? user.open = true : user.open = false);
  };

  render () {
    const { peopleData, showHobbies } = this.state;

    return (
      <Wrap>
        <People>
          <PeopleAddForm addPeople={this.addPeople}/>
          <PeopleList
            people={peopleData}
            removePeople={this.removePeople}
            onToggleOpen={this.onToggleOpen}/>
        </People>
        <Hobbies>
          <HobbiesAddForm addHobby={this.addHobby} show={showHobbies}/>
          <HobbiesBlock
            people={peopleData}
            removeHobby={this.removeHobby}
            manId={showHobbies}
            hobbyActive={this.hobbyActive}
          />
        </Hobbies>
      </Wrap>
    );
  }
}


