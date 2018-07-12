import React, { PropTypes } from 'react';
import Collapsible from 'react-collapsible';
import Trigger from '../utils/Trigger.jsx';
import ProgressCheck from '../utils/ProgressCheck.jsx';
import ProVideo from '../utils/ProVideo.jsx';

const Destructivecycle= (props) => {
  return(
    <div className="single-chapter">

      <ProgressCheck checked={props.checked} user={props.user} chapterid={props.chapters[2].uniqueid}/> 
      <Collapsible className="chapter" trigger={<Trigger chapter={props.chapters[2]} />} >
        <p>
          The mainstream retail strategies are designed to keep you trapped.
        </p>

        <img className="img-responsive" src="https://media.giphy.com/media/D3BRi7EvZEG0E/giphy.gif" alt="Hi :)" />
        <br></br>

        <p>
          It is important that you quickly realize what is happening and who these strategies are designed by in order to break free. Take a look at the following cycle:
        </p>


        <ul className="inner-list">
          <li>Find strategy.</li>
          <li>Test on demo.</li>
          <li>Make some money.</li>
          <li>Go live with real money YAY!</li>
          <li>Lose some money.</li>
          <li>Tweak strategy.</li>
          <li>Repeat.</li>
        </ul>

        <p><strong>Sound familiar?</strong></p>

        <div>
          <ProVideo is_pro_user={props.is_pro_user} embedcode='<iframe src="//fast.wistia.net/embed/iframe/wxd8sjbzys" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width="620" height="349"></iframe>'/>
        </div>

      </Collapsible>

    </div>


    )
}

export default Destructivecycle;
