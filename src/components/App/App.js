import React from 'react';
import './App.css';
import Tree from "../Tree/Tree";

const App = () => {
  const data = [
    {
      name: "test-1"
    },
    {
      name: "test-2",
      children: [
        {
          name: "test-3"
        }
      ]
    },
    {
      name: "test-4",
      children:
        [
          {
            name: "test-5",
            children: [
              {
                name: "test-13",
                children: [
                  {
                    name: "test-23"
                  }
                ]
              }
            ]
          },
          {
            name: "test-6"
          }
        ]
    },
    {
      name: "test-7"
    },
  ];

  return (
    <div className="App">
      <Tree data={data}/>
    </div>
  );
}

export default App;
