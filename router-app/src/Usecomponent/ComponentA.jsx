import React, { useState, createContext } from 'react';
import ComponentB from './Usecomponent/ComponentB';

// Create the context
//export const UserContext = createContext();

const ComponentA = () => {
  const [user, setUser] = useState("BroCode"); // Correct useState usage

  return (
    <>
      <h1>ComponentA</h1>
      <h2>{`Hello ${user}`}</h2> {/* Add space after 'Hello' for readability */}
      <UserContext.Provider value={{ user, setUser }}>
        <ComponentB />
      </UserContext.Provider>
    </>
  );
};

export default ComponentA;
