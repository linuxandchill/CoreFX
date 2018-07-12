import React, { PropTypes } from 'react';
import Collapsible from 'react-collapsible';
import Trigger from '../utils/Trigger.jsx';
import ProgressCheck from '../utils/ProgressCheck.jsx';
import ProVideo from '../utils/ProVideo.jsx';

const Howtomaximizeprofit = (props) => {
  return(
    <div className="single-chapter">

  <ProgressCheck checked={props.checked} user={props.user} chapterid={props.chapters[0].uniqueid}/>
      <Collapsible className="chapter" trigger={<Trigger chapter={props.chapters[0]} />} >

        <p>The Big Pippin method is a simple technique that can be used in order to assure that once you take a trade, you are squeezing the most out of it.</p>

        <img className="img-responsive" src="https://media.giphy.com/media/l0MYB9BKgIAQyc2Mo/giphy.gif" alt="Hi :)" />
        <br></br>

        <p>Trading with the large banks is a strategy that will allow us to catch big moves, but you will find that it is not often that you get a perfect setup. It is for this reason that it is imperative that whenever you do find a good setup and a in a trade, that you don't cut it short.</p>

        <p>Here are the steps:</p>
        <ul className="inner-list">
          <li>1. Take trade.</li>
          <li>2. Set your stop-loss.</li>
          <li>Once 1:1 is reached, move stop to BE + spread.</li>
          <li>At 2:1 close 80%.</li>
          <li>Let the last 20% go until you get 5:1 or more!</li>
        </ul>

        <p>You never know where the trade is going to go. You can make an informed desicion based on the Average Daily Range as to whether or not you should keep the trade open. </p>

        <p>Leaving 20% of the trade open doesn't seem like alot, but if you catch a large move that 20% adds to your bottom line at the end of the month.</p>

        <p><strong> Don't take trades and then close 40% or 50% of the trade.</strong> This is bad practice. Make sure that you close a large percentage of the profits and let only a little bit ride.</p>

          <p>Check out the videos for more:</p>
        <div>
          <ProVideo is_pro_user={props.is_pro_user} embedcode='<iframe src="//fast.wistia.net/embed/iframe/mfdxup1qnk" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width="620" height="349"></iframe>'/>
        </div>
        <br></br>
        <div>
          <ProVideo is_pro_user={props.is_pro_user} embedcode='<iframe src="//fast.wistia.net/embed/iframe/kte8pubcau" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width="620" height="349"></iframe>'/>
        </div>
        <br></br>

        </Collapsible>

      </div>


      )
      }
      export default Howtomaximizeprofit;
