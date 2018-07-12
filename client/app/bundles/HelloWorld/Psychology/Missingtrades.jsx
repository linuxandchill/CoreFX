import React, { PropTypes } from 'react';
import Collapsible from 'react-collapsible';
import Trigger from '../utils/Trigger.jsx';
import ProgressCheck from '../utils/ProgressCheck.jsx';

const Missingtrades = (props) =>
<div className="single-chapter">

  <ProgressCheck checked={props.checked} user={props.user} chapterid={props.chapters[3].uniqueid}/> 
  <Collapsible className="chapter" trigger={<Trigger chapter={props.chapters[3]} />} >

    <p>
      There is nothing wrong with missing trades.
    </p>

    <p>If you don't get a perfect setup, great pullback, great RR, etc... you shouldn't  be taking trades.</p>

    <p>Trading is mostly about not trading. Trading with the banks will make you money, but keeping the money after you get it is still a challenge.</p>

    <img className="img-responsive" src="https://i.imgur.com/nwSUObK.png" alt="Hi :)" />
  </Collapsible>

</div>

export default Missingtrades;
