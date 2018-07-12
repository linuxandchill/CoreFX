import React, { PropTypes } from 'react';
import Collapsible from 'react-collapsible';
import Trigger from '../utils/Trigger.jsx';
import ProgressCheck from '../utils/ProgressCheck.jsx';
import ProVideo from '../utils/ProVideo.jsx';

const Bankperspective = (props) =>
<div className="single-chapter">

  <ProgressCheck checked={props.checked} user={props.user} chapterid={props.chapters[1].uniqueid}/> 
  <Collapsible className="chapter" trigger={<Trigger chapter={props.chapters[1]} />} >

        <div>
          <ProVideo is_pro_user={props.is_pro_user} embedcode='<iframe src="//fast.wistia.net/embed/iframe/9hga9vmxyu" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width="620" height="349"></iframe>'/>
        </div>
      <br></br>
    <p> Since these players are so large and are making such big trades it is often impossible for them to put on a position without moving the market and ruining their profits as a result. </p>

    <p> <strong> The banks can't enter a trade whenever they want, like retail traders can.</strong></p>

      <p>To the large banks and market makers, the retail trader plays a special role. The retail trader is the pawn that they use to create enough orders for themselves.  </p>

      <p> They do this by tricking the retail trader and by reinforcing signals created by the mainstream strategies. </p>
      <img className="img-responsive" src="https://media.giphy.com/media/14w6ksVB3m6Jjy/giphy.gif" alt="Hi :)" />
        <br></br>

      <p><strong>In order for the banks to get short, they need a market that's moving upwards.</strong></p>
      <p>They must have buying thrust with a supply of buys available.</p>

      <p><strong>In order for the banks to get long, they need a market that's moving downwards.</strong> </p>
      <p>They must have selling thrust with a supply of sells available.</p>


  </Collapsible>

</div>

export default Bankperspective;
