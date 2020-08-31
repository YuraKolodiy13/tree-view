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
}

const TreeChild: React.FC<ITreeChildProps> = (props) => {

  return(
    <ul hidden={!props.expanded} className={props.expanded ? 'open' : ''}>
      {props.item.map((item, key) =>
        <Fragment key={key}>
          <li>
            {Array.isArray(item.children) && <TreeChild item={item.children} expanded={item.expanded} icons={props.icons}/>}
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
        </Fragment>
      )}
    </ul>
  )
};

export default TreeChild;