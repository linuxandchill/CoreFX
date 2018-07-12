import React, { PropTypes } from 'react';
import Collapsible from 'react-collapsible';
import Trigger from '../utils/Trigger.jsx';
import ProgressCheck from '../utils/ProgressCheck.jsx';
import ProVideo from '../utils/ProVideo.jsx';

const Whatisliquidity = (props) =>
<div className="single-chapter">

  <ProgressCheck checked={props.checked} user={props.user} chapterid={props.chapters[0].uniqueid}/> 
  <Collapsible className="chapter" trigger={<Trigger chapter={props.chapters[0]} />} >

    <p>
      Liquidity is the ability by which an asset can be purchased or sold without affecting the price. </p>

        <div>
          <ProVideo is_pro_user={props.is_pro_user} embedcode='<iframe src="//fast.wistia.net/embed/iframe/v2vnqctpkg" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width="620" height="349"></iframe>'/>
        </div>
        <br></br>
    <p>
      Liquidity thus reflects the amount and frequency an asset is traded. However the less liquid something is, the harder it will be for it to be bought or sold.
    </p>
    <img className="img-responsive" src="https://media.giphy.com/media/l0HlDDyxBfSaPpU88/giphy.gif" alt="Hi :)" />
        <br></br>

    <p>The forex market is very liquid for retail traders. A retail trader can get in and out of a trade without a problem most of the time. This isn't always the case in the stock or commodity markets.</p>

    <p> <strong>The banks have trouble finding liquidity because their trades are so large.</strong>  </p>

    <p> They have this problem EVERY SINGLE DAY! </p>

  </Collapsible>

</div>

export default Whatisliquidity;
