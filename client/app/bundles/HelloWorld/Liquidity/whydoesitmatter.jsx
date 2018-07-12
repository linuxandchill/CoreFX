import React, { PropTypes } from 'react';
import Collapsible from 'react-collapsible';
import Trigger from '../utils/Trigger.jsx';
import ProgressCheck from '../utils/ProgressCheck.jsx';

const Whydoesitmatter = (props) =>
<div className="single-chapter">

  <ProgressCheck checked={props.checked} user={props.user} chapterid={props.chapters[1].uniqueid}/> 
  <Collapsible className="chapter" trigger={<Trigger chapter={props.chapters[1]} />} >

    <p>
      Simply put, the banks cannot trade without sufficient liquidity. Liquidity in the forex market is extremely important, especially to the big players.
    </p>

    <p>In order for banks to trade forex without disrupting the market (and ruining their position), <strong> they have to create liquidity. </strong></p>

    <p>When banks take a trade, they need someone to provide the other side of the trade.</p>

    <p>To get long: a buyer needs a seller.</p>
    <p>To get short: a seller needs a buyer.</p>




  </Collapsible>

</div>

export default Whydoesitmatter;
