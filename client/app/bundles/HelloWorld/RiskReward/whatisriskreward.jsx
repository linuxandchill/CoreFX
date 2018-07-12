import React, { PropTypes } from 'react';
import Collapsible from 'react-collapsible';
import Trigger from '../utils/Trigger.jsx';
import ProgressCheck from '../utils/ProgressCheck.jsx';

const Whatisriskreward = (props) =>
<div className="single-chapter">

  <ProgressCheck checked={props.checked} user={props.user} chapterid={props.chapters[0].uniqueid}/> 
  <Collapsible className="chapter" trigger={<Trigger chapter={props.chapters[0]} />} >

    <p> In practical terms, Risk:Reward refers to the number of pips that you are willing to sacrifice relative to the number of pips that you are looking to gain.</p>

    <p><strong>1:2 RR example: </strong><i>I will risk 20 pips (stop-loss is 20 pips from entry) in order to make 40 pips (take-profit is 40 pips from entry).</i></p>

    <p>When looking back at your trades it will serve as a very insightful metric and you will quickly realize how powerful it is to take low Risk:Reward trades.</p>

    <p>The real power of trading bank manipulation is that it allows for awesome Risk:Reward situations. </p>

    <p>Several concepts that we have discussed previously are directly related to Risk:Reward:</p>

    <ul className="inner-list">
      <li>Pullbacks</li>
      <li>Sessions</li>
      <li>Levels</li>
      <li>Stop orders</li>
      <li>etc...</li>
    </ul>

    <p>All of these are tools that will allow us to get entries designed to maximize on our profits and minimize our potential losses.</p>
    <img className="img-responsive" src="https://media.giphy.com/media/znQc8lncRNXeE/giphy.gif" alt="Hi :)" />
    <br></br>

    <p>The truth is that in forex trading the only way to make money is to <strong>have a low Risk:Reward ratio.</strong></p>

    <p>Many traders base their strategy on being right most of the time, but in reality <strong>trading profitably has nothing to do with being right.</strong> The great thing about RR is that you can be wrong most of the time and still make money.</p>

  </Collapsible>

</div>

export default Whatisriskreward;
