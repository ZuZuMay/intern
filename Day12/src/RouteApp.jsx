import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import { Female } from "./Router/Female.jsx";
import { Male } from "./Router/Male.jsx";

const RouteApp = () => {
  return (
      <div>
        <ul>
          <li><Link to="/male">Male</Link></li>
          <li><Link to="/female">Female</Link></li>
        </ul>

        <div style={{ background: 'cyan', padding: 20 }}>
          <Routes>
            <Route path="/male" element={<Male />} />
            <Route path="/female" element={<Female />} />
          </Routes>
        </div>
      </div>
  );
};

export default RouteApp
