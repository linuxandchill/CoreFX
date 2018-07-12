import React, { PropTypes } from 'react';
import Collapsible from 'react-collapsible';
import Trigger from '../utils/Trigger.jsx';
import ProgressCheck from '../utils/ProgressCheck.jsx';

const Brokers = (props) =>
<div className="single-chapter">

  <ProgressCheck chapterid={props.chapters[0].uniqueid}/> 
  <Collapsible className="chapter" trigger={<Trigger chapter={props.chapters[0]} />} >

    <p>
      Before looking at the best times to trade, we must look at what a 24-hour day in the forex world looks like. Here's a visual depiction of the market's trading times.
    </p>

  </Collapsible>

</div>

export default Brokers;
