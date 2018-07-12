import React, { PropTypes } from 'react';
import Collapsible from 'react-collapsible';
import Trigger from '../utils/Trigger.jsx';
import ProgressCheck from '../utils/ProgressCheck.jsx';
import ProVideo from '../utils/ProVideo.jsx';

const Howbanksuseit = (props) =>
<div className="single-chapter">

  <ProgressCheck checked={props.checked} user={props.user} chapterid={props.chapters[2].uniqueid}/> 
  <Collapsible className="chapter" trigger={<Trigger chapter={props.chapters[2]} />} >

        <div>
          <ProVideo is_pro_user={props.is_pro_user} embedcode='<iframe src="//fast.wistia.net/embed/iframe/31b1hoe08x" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width="620" height="349"></iframe>'/>
        </div>
        <br></br>

    <p>If you've been trading forex for any amount of time you may have noticed that your order almost always gets a fill. Small orders in forex get filled so consistently that you may have not even known that it was possible to place an order so large that you can't find a fill for it, as is the case for banks.</p>

    <p>Remember, banks are trading a large percentage of the market. <strong> How can they get an order filled if they are trading such a great deal of the volume? </strong></p>

    <p> The answer is: <strong> you.</strong></p>

    <p>Here's an example demonstrating how the banks create liquidity for themselves.</p>

    <img className="img-responsive" src="https://i.imgur.com/xFi2ZFa.png" alt="Hi :)" />
    <br></br>

    <p>In the example above the banks have pushed price through a key level, this triggered many buy orders. <strong> The banks now have the other side to match the sell order they intend to put on. </strong></p>

  </Collapsible>

</div>

export default Howbanksuseit;
