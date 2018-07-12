import React, { PropTypes } from 'react';
import Collapsible from 'react-collapsible';
import Trigger from '../utils/Trigger.jsx';
import ProgressCheck from '../utils/ProgressCheck.jsx';
import ProVideo from '../utils/ProVideo.jsx';

const Conclusion = (props) =>
<div className="single-chapter">

  <ProgressCheck checked={props.checked} user={props.user} chapterid={props.chapters[3].uniqueid}/> 
  <Collapsible className="chapter" trigger={<Trigger chapter={props.chapters[3]} />} >

    <p>
      So that's it! That's how the big money manipulates the market. Simple, right?
    </p>
        <div>
          <ProVideo is_pro_user={props.is_pro_user} embedcode='<iframe src="//ft.wistia.net/embed/iframe/7ie553ksne" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width="620" height="349"></iframe>'/>
        </div>
        <br></br>
    <p>The success of your forex trading career depends on your ability to spot this sort of action. It won't always look as apparent as it did in the examples demonstrated in this lesson, but it is definitely something that traders can track and take advantage of.</p>

    <p>Here's an example with all of the phases marked on the chart: </p>
    <img className="img-responsive" src="https://i.imgur.com/r5Ih63Y.png" alt="Hi :)" />
    <p className="text-center">EUR/USD</p>
    <br></br>

    <p>We know that: </p>
    <ol className='inner-list'>
      <li>Banks compress and build a position.</li>
      <li>They shake out retail traders in order to get enough supply for their position.</li>
      <li>They thrust in their desired direction.</li>
    </ol>

    <p>The bottom line is that <strong>we don't need to know exactly what the banks are doing.</strong> With just the tiny bit of information that they leave behind we can track their moves and join them.</p>

    <p>Go ahead and take a look on your charts and see if you can spot any forms of manipulation.</p>

    <p><strong> All of the examples shown use 15M candles. </strong></p>

  </Collapsible>

</div>

export default Conclusion;
