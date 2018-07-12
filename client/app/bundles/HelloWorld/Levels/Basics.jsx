import React, { PropTypes } from 'react';
import Collapsible from 'react-collapsible';
import Trigger from '../utils/Trigger.jsx';
import ProgressCheck from '../utils/ProgressCheck.jsx';
import ProVideo from '../utils/ProVideo.jsx';

const Basics = (props) =>
<div className="single-chapter">

  <ProgressCheck checked={props.checked} user={props.user}  chapterid={props.chapters[5].uniqueid}/> 
  <Collapsible className="chapter" trigger={<Trigger chapter={props.chapters[5]} />} >

    <p>
      The following section involves using high-probability areas to find out where manipulation may occur.
    </p>

    <p>It is important to make a distinction here from conventional "technical analysis". While we are technically analyzing a chart, and we are using terms like "support & resistance",  it is crucial that you understand that thhere we are intepreting what is going on in the market. </p>

    <p>When we say levels are referring to areas that we know the large players/banks are looking at because they know that retail orders are stacked there. </p>
        <div>
          <ProVideo is_pro_user={props.is_pro_user} embedcode='<iframe src="//fast.wistia.net/embed/iframe/aqz6atmho4" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width="620" height="349"></iframe>'/>
        </div>
        <br></br>

    <p>Ask yourself a few questions when looking for levels: </p>
    <ul className="inner-list">
      <li>Are there breakout orders stacked here?</li>
      <li>Are there stop orders stacked here?</li>
  </ul>

    <p>The retail trader is looking to place breakout orders at these levels, they are putting their stop losses there, etc... because that's what retail strategies have taught them. <strong> The banks know this. </strong> </p>

    <p>The banks know how the retail traders thinks, they know where the retail trader will place his/her orders.</p>

    <p>They use this information to find the other side for their orders. They need this liquidity so that when they place their order they don't cause a big spike in the market and ruin their position.</p>

    <p>Before moving on, keep in mind that when you see terms like "support & resistance" you should associate them with areas in which manipulation can occur. Do not associate them with a horizontal line where price is going to reverse, like you may have learned elsewhere from a retail strategy.</p>


    <p><strong> Remember, don't take the chart at face value. INTERPRET! </strong></p>
    <img className="img-responsive" src="https://media.giphy.com/media/26BoDGStUAafwdZII/giphy.gif" alt="Hi :)" />

  </Collapsible>

</div>

export default Basics;
