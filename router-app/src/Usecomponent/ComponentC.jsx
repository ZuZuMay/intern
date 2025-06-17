import React, { useContext } from 'react';
import { UserContext } from './Usecomponent/ComponentA'; // or '../UserContext' if separated
import ComponentD from './Usecomponent/ComponentD';

const ComponentC = () => {
  const { user } = useContext(UserContext); // ✅ Get value from context

  return (
    <div>
      <h1>ComponentC</h1>
      <h2>{`Hello ${user}`}</h2> {/* ✅ Proper string formatting */}
      <ComponentD />
    </div>
  );
};

export default ComponentC;
