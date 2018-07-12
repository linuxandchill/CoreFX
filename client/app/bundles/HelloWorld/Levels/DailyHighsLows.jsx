import React, { PropTypes } from 'react';
import Collapsible from 'react-collapsible';
import Trigger from '../utils/Trigger.jsx';
import ProgressCheck from '../utils/ProgressCheck.jsx';

const DailyHighsLows = (props) =>
<div className="single-chapter">

  <ProgressCheck checked={props.checked} user={props.user}  chapterid={props.chapters[2].uniqueid}/> 
  <Collapsible className="chapter" trigger={<Trigger chapter={props.chapters[2]} />} >

    <p>
      The highs/ lows of every trading day can be found using a chart indicator. You can of course do it without an indicator but it's tougher to differentiate sometimes if it's not entirely clear.
    </p>

      <p> Contact our support team and we'll get you set up with one.</p>

    <p>Just like supp/res & moving averages, the highs/lows of the previous trading day are a very popular place for retail traders to place their stop & breakout orders. Therefore, it is a very popular place for bank manipulation.</p>

    <p>If you are adamant about finding the highs/lows of the previous day without an indicator all you have to do it figure out where the day started/ended and find the highest/lowest point of that time period.</p>

  </Collapsible>

</div>
export default DailyHighsLows;
