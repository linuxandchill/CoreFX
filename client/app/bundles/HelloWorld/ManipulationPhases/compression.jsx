import React, { PropTypes } from 'react';
import Collapsible from 'react-collapsible';
import Trigger from '../utils/Trigger.jsx';
import ProgressCheck from '../utils/ProgressCheck.jsx';
import ProVideo from '../utils/ProVideo.jsx';

const Compression = (props) =>
<div className="single-chapter">

  <ProgressCheck checked={props.checked} user={props.user} chapterid={props.chapters[0].uniqueid}/> 
  <Collapsible className="chapter" trigger={<Trigger chapter={props.chapters[0]} />} >

    <p>
      This phases consists of what might be called a "range". It is during this phase that large institutions are building their position.
    </p>
        <div>
          <ProVideo is_pro_user={props.is_pro_user} embedcode='<iframe src="//fast.wistia.net/embed/iframe/hvl789lt02" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width="620" height="349"></iframe>'/>
        </div>
        <br></br>

    <p>At this point there is no way to predict what the ultimate direction will be once the range breaks but we do know that we can be expecting a move soon.</p>
    <img className="img-responsive" src="https://i.imgur.com/IV6F2h7.png" alt="Hi :)" />
    <p className="text-center">EUR/USD</p>
    <br></br>

    <p><strong> All of the examples shown use 15M candles. </strong></p>
  </Collapsible>

</div>

export default Compression;
