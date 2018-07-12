import React, { PropTypes } from 'react';
import Collapsible from 'react-collapsible';
import Trigger from '../utils/Trigger.jsx';
import ProgressCheck from '../utils/ProgressCheck.jsx';

const Inthetrade = (props) =>
<div className="single-chapter">

  <ProgressCheck checked={props.checked} user={props.user} chapterid={props.chapters[1].uniqueid}/> 
  <Collapsible className="chapter" trigger={<Trigger chapter={props.chapters[1]} />} >

    <p>
      This section will be very short because there really is only one thing you should be doing once you have opened a trade, <strong> walk away </strong>.
    </p>

    <p>When the trade is on, you should disappear from the computer room.</p>

    <img className="img-responsive" src="https://media.giphy.com/media/Ru9sjtZ09XOEg/giphy.gif" alt="Hi :)" />
    <br></br>
    <p>The problem with being in a trade and staring at every tick is that your mind will instantly go into paranoia/protection mode and somehow justify closing the trade. You mustn't forget why you opened the trade in the first place. </p>

    <p>It is fine to check in on the the trade every half-hour to see how the 15M candles are developing but other than that you should not even be thinking about it.</p>



  </Collapsible>

</div>

export default Inthetrade;
