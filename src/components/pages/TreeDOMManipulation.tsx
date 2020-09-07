import React from "react";
import {data} from "../App/data";
import Tree from "../Tree/Tree";

const TreeDOMManipulation = () => {

  const toggleClick = (e:React.MouseEvent<HTMLElement>) => {
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

  const icons = {
    close: 'fas fa-door-closed',
    open: 'fas fa-door-open'
  };

  return(
    <div className='treeWrap'>
      <h2>Tree DOM manipulation</h2>
      <Tree
        data={data}
        icons={icons}
        toggleClick={toggleClick}
      />
    </div>
  )
};

export default TreeDOMManipulation;