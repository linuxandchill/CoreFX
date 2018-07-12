import React, { PropTypes } from 'react';
import Collapsible from 'react-collapsible';
import Trigger from '../utils/Trigger.jsx';
import ProgressCheck from '../utils/ProgressCheck.jsx';
import ProVideo from '../utils/ProVideo.jsx';

const Whatiswrongwithtraders = (props) => {
  return(
    <div className="single-chapter">

      <ProgressCheck checked={props.checked}  user={props.user} chapterid={props.chapters[3].uniqueid}/> 
      <Collapsible className="chapter" trigger={<Trigger chapter={props.chapters[3]} />} >

        <p>Have you ever been stopped out of a trade only to see it quickly reverse in the opposite direction? <strong> We're here to tell you that this wasn't by accident.</strong> </p>
        <div>
          <ProVideo is_pro_user={props.is_pro_user} embedcode='<iframe src="//fast.wistia.net/embed/iframe/8gtm1utroc" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width="620" height="349"></iframe>'/>
        </div>
        <p>
          As you will learn in the following sections, forex markets are controlled by large entities that push money around in order to get the retail trader to do what they want them to.
        </p>
        <p>
          In the search for liquidity the big banks move money into areas that they know the retail trader will be quick to jump into, then they swiftly buy/sell into that volume.
        </p>

        <p>This the the retail trader:</p>
        <img className="img-responsive" src="https://media.giphy.com/media/NItEw9YD6On0Q/giphy.gif" alt="Hi :)" />
        <br></br>

        <p>
          Most traders feel like they are always one step behind. This is caused by the countless strategies & indicators that promise to make you a millionaire. Did they work?
        </p>
        <p>
          The reason these strategies have failed is because they try to create rules in a market where they have no power. 
        </p>

        <p>  <strong>
            The large banks have all the control therefore we must learn to adapt to their world.
          </strong>
        </p>


      </Collapsible>

    </div>


    )
}
export default Whatiswrongwithtraders;
