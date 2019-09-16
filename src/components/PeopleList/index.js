import React from "react";
import PeopleListItem from '../PeopleListItem';
import { Scrollbars } from 'react-custom-scrollbars';

import { PeopleItem } from './styles';

const PeopleList = props => {

  const { people, removePeople, onToggleOpen } = props;

  const elements = people.map((item) => {

    const { id, ...itemProps } = item;

    return (
        <PeopleItem key={item.id}>
          <PeopleListItem
            { ...itemProps }
            removePeople={() => removePeople(id)}
            onToggleOpen={() => onToggleOpen(id)}/>
        </PeopleItem>
    );
  });

  return (
    <Scrollbars style={{height: 120 }}>
      <ul>{ elements }</ul>
    </Scrollbars>
  );
};

export default PeopleList;