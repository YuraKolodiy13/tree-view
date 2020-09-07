import React, {Fragment} from 'react';

export interface ITreeChildProps {
  expanded?: boolean;
  item: {
    children?: {};
    expanded?: boolean;
    name: string;
  }[];
  icons?: {
    close: string;
    open: string;
  };
  path: string;
  toggleClick: (e: any ) => void;
  createObjectWithKeys?: (e: any ) => void;
  initialObj?: any;
  expandedObj?: any;
  objExpanded?: boolean;
}

const TreeChild: React.FC<ITreeChildProps> = (props) => {

  const isOpen = props.expandedObj && Object.keys(props.expandedObj).length ? props.objExpanded : props.expanded;

  return(
    <ul hidden={!isOpen} className={isOpen ? 'open' : ''}>
      {props.item.map((item, index ) =>
        <Fragment key={index}>
          {props.expandedObj && !Object.keys(props.expandedObj).length && props.createObjectWithKeys && props.createObjectWithKeys({[`${props.path}-${index}`]: item.expanded})}
          <li>
            {Array.isArray(item.children) && (
                <TreeChild
                    path={`${props.path}-${index}`}
                    item={item.children}
                    expanded={item.expanded}
                    icons={props.icons}
                    toggleClick={props.toggleClick}
                    createObjectWithKeys={props.createObjectWithKeys}
                    initialObj={props.initialObj}
                    objExpanded={props.expandedObj && props.expandedObj[`${props.path}-${index}`]}
                    expandedObj={props.expandedObj}
                />
            )}
            <span
              data-number={`${props.path}-${index}`}
              data-children={!!item.children}
              onClick={(e) => props.toggleClick(e)}
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
        </Fragment>
      )}
    </ul>
  )
};

export default TreeChild;