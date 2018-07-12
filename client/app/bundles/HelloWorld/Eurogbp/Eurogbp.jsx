import React, { PropTypes } from 'react';
import Collapsible from 'react-collapsible';
import Trigger from '../utils/Trigger.jsx';
import ProgressCheck from '../utils/ProgressCheck.jsx';
import ProVideo from '../utils/ProVideo.jsx';

const Eurogbp = (props) => {
  return(
    <div className="single-chapter">

  <ProgressCheck checked={props.checked} user={props.user}  chapterid={props.chapters[0].uniqueid}/> 
      <Collapsible className="chapter" trigger={<Trigger chapter={props.chapters[0]} />} >


        <p>Every currency has a personality. By knowing certain details of each currency and pair we can better gauge when a setup may work in our favor and take the trade accordingly. </p>

          <p>Check out the video for more:</p>
        <div>
          <ProVideo is_pro_user={props.is_pro_user} embedcode='<iframe src="//fast.wistia.net/embed/iframe/tdb9ojs5c5" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width="620" height="349"></iframe>'/>
        </div>
        <br></br>

        </Collapsible>

      </div>


      )
      }
      export default Eurogbp;
