import React, { PropTypes } from 'react';
import Collapsible from 'react-collapsible';
import Trigger from '../utils/Trigger.jsx';
import ProgressCheck from '../utils/ProgressCheck.jsx';
import ProVideo from '../utils/ProVideo.jsx';

const Takingsetups = (props) =>
<div className="single-chapter">

  <ProgressCheck checked={props.checked} user={props.user} chapterid={props.chapters[4].uniqueid}/> 
  <Collapsible className="chapter" trigger={<Trigger chapter={props.chapters[4]} />} >

    <p>
      Taking setups is very counter-intuitive. Mostly because you are usually taking an entry when the market is moving in the opposite direction (pullback) of where you want it to ultimately go.
    </p>

        <div>
          <ProVideo is_pro_user={props.is_pro_user} embedcode='<iframe src="//fast.wistia.net/embed/iframe/591wqauaft" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width="620" height="349"></iframe>'/>
        </div>
        <br></br>

    <p>The key is to build up the trust in yourself (and the setup) in order to enter when you see a good opportunity.</p>

    <p>The first few times you do this it will feel strange. For this reason it is why it is recommended that you take very conservative(deep) pullbacks to practice patience and discipline.</p>

  </Collapsible>

</div>

export default Takingsetups;
