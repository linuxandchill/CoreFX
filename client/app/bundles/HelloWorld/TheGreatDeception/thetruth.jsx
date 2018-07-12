import React, { PropTypes } from 'react';
import Collapsible from 'react-collapsible';
import Trigger from '../utils/Trigger.jsx';
import ProgressCheck from '../utils/ProgressCheck.jsx';
import ProVideo from '../utils/ProVideo.jsx';

const Thetruth = (props) => {
  return(
    <div className="single-chapter">

      <ProgressCheck checked={props.checked} user={props.user} chapterid={props.chapters[4].uniqueid}/> 
      <Collapsible className="chapter" trigger={<Trigger chapter={props.chapters[4]} />} >
        <div>
          <ProVideo is_pro_user={props.is_pro_user} embedcode='<iframe src="//fast.wistia.net/embed/iframe/wxd8sjbzys" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width="620" height="349"></iframe>'/>
        </div>
      <br></br>
        <p>
          The bottom line is that the market belongs to the big players with huge amounts of money that retail traders can't compete with. However, this isn't necessarily a bad thing.
        </p>

        <p>
          Because they have to manipulate the market in order to get their way, we can spot what they are doing and take advantage of the move they will create.
        </p>

        <img className="img-responsive" src="https://media.giphy.com/media/HmwYgUgRlBgKk/giphy.gif" alt="Hi :)" />

        <br></br>

        <p>Lack of confidence to pull the trigger is a killer and not having a plan is usually the culprit. The good news is that the banks already have a plan, we just have to learn it.
        </p>

        <p>
          Since the big money is causing such large waves in the market, once we find out what is happening we are in a great position to make huge trades.
        </p>

        <p>
          We will discuss risk and reward concepts in later lessons, but for now it's important that you start getting in the right mindset to <strong>follow and trade like the banks. </strong>
        </p>

        <p>  <strong> <a className="next-chapter" href="/mega-banks"> Next up- How do the banks trade? </a> </strong> </p>

      </Collapsible>

    </div>


    )
}
export default Thetruth;
