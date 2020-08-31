import React, {Fragment} from 'react';
import TreeChild from "./TreeChild";
import './Tree.scss';

export interface ITreeProps {
  data: {
    children?: {};
    expanded?: boolean;
    name: string;
  }[];
  icons?: {
    close: string;
    open: string;
  };
}

const Tree: React.FC<ITreeProps> = (props) => {

  const toggle = (e:React.MouseEvent<HTMLElement>) => {
    const element = e.target as HTMLElement;
    if (element.tagName !== "SPAN") {
      return;
    }
    if(element && element.parentNode){
      let childrenContainer = element.parentNode.querySelector('ul');
      if (!childrenContainer) return;
      childrenContainer.hidden = !childrenContainer.hidden;
      childrenContainer.classList.toggle('open');
    }

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