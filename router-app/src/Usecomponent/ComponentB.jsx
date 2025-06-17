import React, { useContext } from 'react';
import { UserContext } from './Usecomponent/ComponentA';

const ComponentB = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h3>ComponentB</h3>
      <p>{`User from context: ${user}`}</p>
    </div>
  );
};

export default ComponentB;
