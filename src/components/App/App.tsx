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
          name: "test-3",
        },
        {
          name: "test-223",
        }
      ]
    },
    {
      name: "test-4",
      expanded: true,
      children:
          [
            {
              name: "test-5",
              expanded: true,
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

  const icons = {
    close: 'fas fa-folder',
    open: 'fas fa-folder-open'
  };

  return (
      <div className="App">
        <Tree
          data={data}
          icons={icons}
        />
      </div>
  );
}

export default App;
