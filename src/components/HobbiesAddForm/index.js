import React, { useState } from 'react'

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Dropdown from 'react-dropdown'
import DateField from '@material-ui/core/TextField';

import { AddHobbies } from './styles'

import shortid from "shortid";

const initial = {
  id :shortid.generate(),
  name: '',
  passion: '',
  year: '',
};

const HobbiesAddForm = props => {

  const {addHobby, show} = props,
        [state, setState] = useState(initial),
        [errorClass, setErrorClass] = useState(''),
        options = ['Low', 'Medium', 'High'];

  const onChange = (e, key) => {
    setState({...state,[key] : e.target.value })

    if (state.name.length >= 2 && rv_name.test(state.name)) {
      setErrorClass('')
    }
  };

  const onSelect = (e, key) => {
    setState({...state,[key] : e.value })
  };

  const rv_name = /^([A-zА-я'])*$/;

  const onSubmit = e => {
    e.preventDefault();

    if (rv_name.test(state.name) && state.name.length >= 2 && state.passion.length && state.year.length && show) {
      addHobby(state);
      setState(initial);
    } else {
      warnEmptyFieldOpen()
    }

    if (!rv_name.test(state.name)){
      setErrorClass('error ')
    }

  };

  const [open, setOpen] = React.useState(false);
  const [openNew, setOpenNew] = React.useState(false);

  const warnEmptyFieldOpen = () => {
    if(show) {
      setOpenNew(true);
    }
  };
  const warnEmptyFieldClose = () => {
    setOpenNew(false);
  };
  const warnSelectUserOpen = () => {
    if(!show) {
      setOpen(true);
    }
  };
  const warnSelectUserClose = () => {
    setOpen(false);
  };


  return (
    <AddHobbies onSubmit={onSubmit}>
      <div className="wrap">
        <Dropdown
          className="select"
          options={options}
          onChange={(e) => onSelect(e, 'passion')}
          value={state.passion}
          placeholder="Select passion level"
        />

        <input type="text"
               className={`${errorClass}input`}
               onChange={(e) => onChange(e, 'name')}
               value={state.name}
               placeholder="Enter user hobby"/>

        <DateField
          type="date"
          value={state.year}
          onChange={(e) => onChange(e, 'year')}
          className="input"
        />

      </div>
      <button onClick={warnSelectUserOpen} type={"submit"} className="btn btn_add">Add</button>

      <Dialog className="popup" open={openNew}>
        <h3>Please fill in all fields</h3>
        <p>Or Enter valid Hobby Name <small>(only letters)</small></p>
        <Button onClick={warnEmptyFieldClose} className="btn" color="primary" variant="contained">Ok</Button>
      </Dialog>

      <Dialog className="popup" open={open}>
        <h2>Please select some User</h2>
        <Button onClick={warnSelectUserClose} className="btn" color="primary" variant="contained">Ok</Button>
      </Dialog>
    </AddHobbies>
  );

}
export default HobbiesAddForm;