import React, {Fragment} from 'react';
import TreeChild from "./TreeChild";
import './Tree.scss';
import {IApp} from '../App/App'

export interface ITreeProps {
  data: IApp[];
  icons?: {
    close: string;
    open: string;
  };
  toggleClick: (e: any ) => void;
  keysHandler?: (e: any ) => void;
  expandedObj?: any;
  createObjectWithKeys?: (e: any ) => void;
  initialObj?: any;
}

const Tree: React.FC<ITreeProps> = (props) => {

  return (
    <div className={`tree ${!props.icons ? 'without-icons' : ''}`}>
      {props.data.map((item, index) =>
        <ul key={index}>
          {props.expandedObj && !Object.keys(props.expandedObj).length && props.createObjectWithKeys && props.createObjectWithKeys({[index]: item.expanded})}
          <li>
            {Array.isArray(item.children) && (
              <TreeChild
                path={`${index}`}
                item={item.children}
                expanded={item.expanded}
                icons={props.icons}
                toggleClick={props.toggleClick}
                createObjectWithKeys={props.createObjectWithKeys}
                initialObj={props.initialObj}
                objExpanded={props.expandedObj && props.expandedObj[index]}
                expandedObj={props.expandedObj}
              />
            )}
            <span
              onClick={(e) => props.toggleClick(e)}
              data-number={index}
              data-children={!!item.children}
            >
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