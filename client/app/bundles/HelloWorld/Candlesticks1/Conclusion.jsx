import React, { PropTypes } from 'react';
import Collapsible from 'react-collapsible';
import Trigger from '../utils/Trigger.jsx';
import ProgressCheck from '../utils/ProgressCheck.jsx';

const Conclusion = (props) => {
  return(
    <div className="single-chapter">

      <ProgressCheck checked={props.checked} user={props.user}  chapterid={props.chapters[3].uniqueid}/> 
      <Collapsible className="chapter" trigger={<Trigger chapter={props.chapters[3]} />} >

        <p>
          The key to reading candlesticks is not to memorize, but to understand. In order to really take advantage of the powerful tool that is a candlestick, the trader must interpret what is really going on behind the scenes.
        </p>

        <p>There are some "patterns" that will seem repetitive and it is fine to learn those, just as long as the trader understands that these patterns by themselves don't mean anything. They must be taken into context with the rest of the story. </p>

        <p>You can read about <a href="/candlestick-formations">candle formations</a> in an upcoming section and learn to decipher what the charts are telling us.</p>


      </Collapsible>

    </div>


    )
}
export default Conclusion;
