import React, { useContext } from 'react';
import { UserContext } from './Usecomponent/ComponentA'; // or a separate file if refactored

const ComponentD = () => {
  const { user } = useContext(UserContext); // ✅ Use context properly

  return (
    <div>
      <h1>ComponentD</h1>
      <h2>{`Bye ${user}`}</h2> {/* ✅ Now 'user' is defined */}
    </div>
  );
};

export default ComponentD;
