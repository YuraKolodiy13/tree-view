import React from 'react';
import './App.css';
import TreeDOMManipulation from "../pages/TreeDOMManipulation";
import TreeObjectPaths from "../pages/TreeObjectPaths";
import TreeRecursive from "../pages/TreeRecursive";

export interface IApp {
    children?: {};
    expanded?: boolean;
    name: string;
  }

const App = () => {
  return (
      <div className="App container">
        <TreeDOMManipulation/>
        <TreeRecursive/>
        <TreeObjectPaths/>
      </div>
  );
};

export default App;
