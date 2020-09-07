import React, {useState} from "react";
import {data} from "../App/data";
import Tree from "../Tree/Tree";

const TreeObjectPaths = () => {

  const [expandedObj, setKeys] = useState<object>({});

  let initialObj:any = {};
  const createObjectWithKeys = (value: object) => {
    initialObj = {...initialObj, ...value}
  };

  const icons = {
    close: 'fas fa-folder',
    open: 'fas fa-folder-open'
  };

  const keysHandler = (value: object) => {
    setKeys({...expandedObj, ...value})
  };

  const toggleClick = (e:any) => {
    if(e.target.dataset.children === 'false') return;

    let newObj: any = Object.keys(expandedObj).length > 0 ? {...expandedObj} : {...initialObj};
    newObj[e.target.dataset.number] = !newObj[e.target.dataset.number];
    setKeys(newObj);

  };

  return(
    <div className='treeWrap'>
      <h2>Tree object paths</h2>
      <Tree
        data={data}
        icons={icons}
        toggleClick={toggleClick}
        expandedObj={expandedObj}
        keysHandler={keysHandler}
        createObjectWithKeys={createObjectWithKeys}
        initialObj={initialObj}
      />
    </div>
  )
};

export default TreeObjectPaths;