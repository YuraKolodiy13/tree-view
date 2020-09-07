import React, {useState} from "react";
import {data} from "../App/data";
import Tree from "../Tree/Tree";
import {IApp} from "../App/App";

const TreeRecursive = () => {

  const [state, setState] = useState<IApp[]>(data);

  const toggleClick = (e:any) => {
    const res = [...state];
    const currentEl = e.target?.textContent;

    const cb = (item:any) => {
      if(currentEl === item.name){
        item.expanded = item.expanded ? !item.expanded : true;
      }
      item.children && item.children.forEach(cb);
    };
    res.forEach(cb);
    setState(res);

  };

  return(
    <div className='treeWrap'>
      <h2>Tree Recursive</h2>
      <Tree
        data={state}
        toggleClick={toggleClick}
      />
    </div>
  )
};

export default TreeRecursive;