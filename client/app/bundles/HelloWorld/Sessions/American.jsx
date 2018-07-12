import React, { PropTypes } from 'react';
import Collapsible from 'react-collapsible';
import Trigger from '../utils/Trigger.jsx';
import ProgressCheck from '../utils/ProgressCheck.jsx';
import ProVideo from '../utils/ProVideo.jsx';

const American = (props) =>
<div className="single-chapter">

      <ProgressCheck checked={props.checked} user={props.user} chapterid={props.chapters[3].uniqueid}/> 
  <Collapsible className="chapter" trigger={<Trigger chapter={props.chapters[3]} />} >
    <p>The United States session (New York) occurs between 9am - 11am EST. It is during this session that you'll either see a continuation or reversal of the European move.</p>
        <div>
          <ProVideo is_pro_user={props.is_pro_user} embedcode='<iframe src="//fast.wistia.net/embed/iframe/nftqk7ddzq" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width="620" height="349"></iframe>'/>
        </div>
        <br></br>

    <p>As a rule of thumb, if the move during Europe has not been that large relative to the Average Daily Range (ADR), you can expect a continuation. </p>

    <p>Otherwise, look for a reversal. </p>

    <p>If you are looking for reversal trades you must remember that the <a href="/setups">setups</a> will be the same as during the European session, but in the opposite direction.</p>

    <p>Take a look at the charts below:</p>

    <img className="img-responsive" src="https://i.imgur.com/81szsUI.png" alt="Hi :)" />
    <p className="text-center">EUR/USD</p>
    <p>The first chart is a demonstration of how sometimes price will reverse during the NY session.</p>
    <img className="img-responsive" src="https://i.imgur.com/Ncx430J.png" alt="Hi :)" />
    <p className="text-center">EUR/USD</p>
    <br></br>

    <p>The second show how if the move during Europe wasn't very large then it is likely to continue throughout the NY session.</p>

  </Collapsible>

</div>

export default American;
