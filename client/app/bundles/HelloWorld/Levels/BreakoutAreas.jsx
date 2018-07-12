import React, { PropTypes } from 'react';
import Collapsible from 'react-collapsible';
import Trigger from '../utils/Trigger.jsx';
import ProgressCheck from '../utils/ProgressCheck.jsx';

const BreakoutAreas = (props) =>
<div className="single-chapter">

  <ProgressCheck checked={props.checked} user={props.user}  chapterid={props.chapters[3].uniqueid}/> 
  <Collapsible className="chapter" trigger={<Trigger chapter={props.chapters[3]} />} >

    <p>
      Before looking at the best times to trade, we must look at what a 24-hour day in the forex world looks like. Here's a visual depiction of the market's trading times.
    </p>

  </Collapsible>

</div>

export default BreakoutAreas;
