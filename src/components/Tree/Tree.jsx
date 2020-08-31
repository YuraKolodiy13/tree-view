import React from 'react';
import TreeChild from "./TreeChild";
import './Tree.scss'

const Tree = props => {

  const toggle = (e) => {
    if (e.target.tagName !== 'SPAN') {
      return;
    }
    let childrenContainer = e.target.parentNode.querySelector('ul');
    if (!childrenContainer) return;
    childrenContainer.hidden = !childrenContainer.hidden;
  };

  return (

    <div className='tree' onClick={toggle}>
      {console.log(props.data, 'props.data')}
      {props.data.map((item, key) =>
        <ul key={key}>
          <li>
            {Array.isArray(item.children) && <TreeChild item={item.children}/>}
            <span>{item.name}</span>
          </li>
        </ul>
      )}
    </div>
  )
};

export default Tree;