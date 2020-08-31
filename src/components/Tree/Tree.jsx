import React, {Fragment} from 'react';
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
    childrenContainer.classList.toggle('open');
  };

  return (

    <div className={`tree ${!props.icons ? 'without-icons' : ''}`} onClick={toggle}>
      {props.data.map((item, key) =>
        <ul key={key}>
          <li>
            {Array.isArray(item.children) && (
              <TreeChild item={item.children} expanded={item.expanded} icons={props.icons}/>
            )}
            <span>
              {props.icons && Array.isArray(item.children) && (
                <Fragment>
                  <i className={`open-icon ${props.icons.open}`}/>
                  <i className={`close-icon ${props.icons.close}`}/>
                </Fragment>
              )}
              {item.name}
            </span>
          </li>
        </ul>
      )}
    </div>
  )
};

export default Tree;