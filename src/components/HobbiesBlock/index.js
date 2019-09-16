import React from "react";
import HobbiesListItem from "../HobbiesListItem";
import { Scrollbars } from 'react-custom-scrollbars';

import { HobbyBlock } from './styles';

const HobbiesBlock = props => {
  const { people, removeHobby, manId } = props;

  const elements = people.map((item) => {

    if(item.id == manId) {
      const itemProps = item.hobbies;

      return (
        <HobbyBlock key={item.id}>
          <HobbiesListItem
            manId={manId}
            hobbies={itemProps}
            removeHobby={removeHobby}
          />
        </HobbyBlock>
      );

    }
  });

  return (
    <Scrollbars style={{height: 120 }}>
      { elements }
    </Scrollbars>
  );
};

export default HobbiesBlock;