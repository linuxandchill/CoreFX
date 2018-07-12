import React, { PropTypes } from 'react';
import Collapsible from 'react-collapsible';
import Trigger from '../utils/Trigger.jsx';
import ProgressCheck from '../utils/ProgressCheck.jsx';
import ProVideo from '../utils/ProVideo.jsx';

const European = (props) =>
<div className="single-chapter">

      <ProgressCheck checked={props.checked} user={props.user} chapterid={props.chapters[2].uniqueid}/> 

  <Collapsible className="chapter" trigger={<Trigger chapter={props.chapters[2]} />} >

    <p>
      For the EUR/USD & GBP/USD the European session (Germany & London) most usually serves as the <a href="/manipulation-phases"><i>shake-out/ stop-run</i></a> and <a href="/manipulation-phases"><i>thrust</i></a> session.
    </p>
        <div>
          <ProVideo is_pro_user={props.is_pro_user} embedcode='<iframe src="//fast.wistia.net/embed/iframe/qm3lwd6qgc" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width="620" height="349"></iframe>'/>
        </div>
        <br></br>

    <p>This session takes place between the hours of 2am - 11am EST. You will usually see shake-outs happen between 2-6am.</p>

    <p>Often times a phenomenon that has become known as the "Frankie fake-out" will will occur. You can take the direction that it occurs in to be the opposite of what they intend to do during London. </p>

    <p>Take a look at the following charts:</p>
    <img className="img-responsive" src="https://i.imgur.com/pXBsBMJ.png" alt="Hi :)" />
    <img className="img-responsive" src="https://i.imgur.com/VhNL9LQ.png" alt="Hi :)" />
    <p className="text-center">EUR/USD</p>
    <br></br>

    <p>During this session the market can easily move 100+ pips depending on the pair and what time of year it is. The charts above are screenshots from summer trading, in which markets weren't moving much.</p>

    <p>It is highly recommended to make the European session the only time you are trading EUR/USD & GBP/USD pairs. However, there are definitely opportunities during the US session.</p>

  </Collapsible>

</div>

export default European ;
