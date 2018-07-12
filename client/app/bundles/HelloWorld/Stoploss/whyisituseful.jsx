import React, { PropTypes } from 'react';
import Collapsible from 'react-collapsible';
import Trigger from '../utils/Trigger.jsx';
import ProgressCheck from '../utils/ProgressCheck.jsx';
import ProVideo from '../utils/ProVideo.jsx';

const Whyisituseful = (props) =>
<div className="single-chapter">

  <ProgressCheck checked={props.checked} user={props.user} chapterid={props.chapters[1].uniqueid}/> 
  <Collapsible className="chapter" trigger={<Trigger chapter={props.chapters[1]} />} >

    <p> <strong> Stop-loss orders are big banks' best friend. </strong></p>
        <div>
          <ProVideo is_pro_user={props.is_pro_user} embedcode='<iframe src="//fast.wistia.net/embed/iframe/5ta61trbzw" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width="620" height="349"></iframe>'/>
        </div>
        <br></br>
    <p>
      We now know that a stop order is one that closes or opens a position once prices crosses a defined level. How does this help us?
    </p>

    <p> We can infer that: </p>

    <ul className="inner-list">
      <li>In order to close a long, selling is required.</li>
      <li>In order to close a short, buying is required.</li>
    </ul>

    <p> Banks often artificially trigger stop orders in what has coloquially become known as the "stop-run". </p>

  </Collapsible>

</div>

export default Whyisituseful;
