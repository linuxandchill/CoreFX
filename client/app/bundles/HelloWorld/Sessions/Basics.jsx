import React, { PropTypes } from 'react';
import Collapsible from 'react-collapsible';
import Trigger from '../utils/Trigger.jsx';
import ProgressCheck from '../utils/ProgressCheck.jsx';
import ProVideo from '../utils/ProVideo.jsx';

const Basics = (props) =>
<div className="single-chapter">
      <ProgressCheck checked={props.checked} user={props.user} chapterid={props.chapters[0].uniqueid}/> 
  <Collapsible className="chapter" trigger={<Trigger chapter={props.chapters[0]} />} >

    <p>Trading sessions in forex are particularly important because they allows us to get a view into exactly when banks manipulate.</p>

    <p>
      {props.chapters[0].chapterContent}
      <img src={'https://media.dailyfx.com/illustrations/2009/10/14/2009-10-14-0111-Forex_Market_Hours_body_hours.png'} alt="Nothing here" className="img-responsive"/>
    </p>
    <p> You can find services that show you when markets around the world are opening/ closing.<br></br> Check out this one for example: <a href="https://www.forexmarkethours.com/"> Forex Market Hours </a>  </p>
        <div>
          <ProVideo is_pro_user={props.is_pro_user} embedcode='<iframe src="//fast.wistia.net/embed/iframe/l56d5o54vm" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width="620" height="349"></iframe>'/>
        </div>
        <br></br>

    <p><strong>Remember, banks are always looking for liquidity. This means that they are likely to be trading at times when there are the most people around to fool. </strong></p>

    <p>
      Since this is when banks are building their plan, this is when you should be around too, waiting for them to make their move so that you can join.
    </p>

    <p>Most currencies are active when their respective session is open. This means that USD will be active during American sessions, SGD will be active during Singapore sessions, etc...</p>

    <p>However, forex trades in pairs and it is often best to wait until two major sessions overlap since this will naturally have the most people involved.</p>

    <p>In the next few chapters we're going to look at the more popular/liquid sessions and focus on two of the major pairs, EUR/USD & GBP/USD.</p>

  </Collapsible>

</div>

export default Basics ;
