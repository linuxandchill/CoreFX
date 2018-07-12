import React, { PropTypes } from 'react';
import Collapsible from 'react-collapsible'; 

const Trigger = (props) => 
<div> 
  <Collapsible key="props.key" className="chapter" trigger={props.chapterName}> 
    <p>{props.chapterContent}</p> 
    {
    props.chapterImage && 
    <img src={props.chapterImage} alt="xyz" className="img-responsive"/>
    }
  </Collapsible> 
</div> 

export default Trigger; 
