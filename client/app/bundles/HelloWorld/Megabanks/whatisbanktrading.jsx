import React, { PropTypes } from 'react';
import Collapsible from 'react-collapsible';
import Trigger from '../utils/Trigger.jsx';
import ProgressCheck from '../utils/ProgressCheck.jsx';
import ProVideo from '../utils/ProVideo.jsx';

const Whatisbanktrading = (props) =>
<div className="single-chapter">

  <ProgressCheck checked={props.checked} user={props.user} chapterid={props.chapters[0].uniqueid}/> 
  <Collapsible className="chapter" trigger={<Trigger chapter={props.chapters[0]} />} >

    <p>
      The foreign exchange market is controlled in great part by just a few, very large, financial institutions. Take a look at the following chart taken from a Euromoney survey:
    </p>
    <img className="img-responsive" src="https://i1.wp.com/www.theessentialsoftrading.com/Blog/wp-content/uploads/2009/11/forexmarketshare.png?resize=437%2C495" alt="Hi :)" />

    <p> From this we can see that the retail traders has no control over the forex market. The banksand big players make the rules. </p>

    <p> The top-tier interbank market accounts for 51% of all transactions. From there, smaller banks, followed by large multi-national corporations (which need to hedge risk and pay employees in different countries), and hedge funds. </p>

    <p> Because of the large size of the transaction that these entities are making <strong> they are in a constant fight for liquidity.</strong> </p>

    <p> This is where the retail traders becomes important to them.</p>

        <div>
          <ProVideo is_pro_user={props.is_pro_user} embedcode='<iframe src="//fast.wistia.net/embed/iframe/cz3ox7k9mh" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width="620" height="349"></iframe>'/>
        </div>

  </Collapsible>

</div>

export default Whatisbanktrading;
