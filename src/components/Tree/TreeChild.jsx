import React, {Fragment} from 'react'

const TreeChild = props => {
  return(
    <ul hidden>
      {props.item.map((item, key) =>
        <Fragment key={key}>
          <li>
            {Array.isArray(item.children) && <TreeChild item={item.children} />}
            <span>{item.name}</span>
          </li>
        </Fragment>
      )}
    </ul>
  )
};

export default TreeChild;