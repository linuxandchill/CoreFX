import React, { PropTypes } from 'react';
import Collapsible from 'react-collapsible';
import Trigger from '../utils/Trigger.jsx';
import ProgressCheck from '../utils/ProgressCheck.jsx';

const Example = (props) => {

  var pro_link = props.is_pro_user ? "#" : "/pro"

  return (
    <div className="single-chapter">

      <ProgressCheck checked={props.checked} user={props.user} chapterid={props.chapters[2].uniqueid}/>
      <Collapsible className="chapter" trigger={<Trigger chapter={props.chapters[2]} />} >

        <p>Calculating RR is easy! </p>

        <p>Before you enter a trade, you should already know where you're going to place your stop-loss and where you plan on exiting the trade once you're in the green. To many, this is considered an art but we believe it should be treated as a science.</p>

        <p>If you'd like to learn <strong>the science</strong> of good RR technique please consider <a href={pro_link}>going pro</a> and checking out <a href="/big-pippin">the Big Pippin method</a>.</p>

        <p>Demonstrated in this example is the magic of RR: </p>
        <p>Imagine you take 20 trades per month and have a 1:2 RR ratio.</p>
        <ul className="inner-list">
          <li>20 pip stop.</li>
          <li>40 pip take-profit.</li>
          <li>40% win rate = 12 losses, 8 wins.</li>
          <li>Wins = 320 pips.</li>
          <li>Losses = 240 pips.</li>
        </ul>

        <p>WTF?! How is that possible? We were wrong most of the time but still came out on top! <strong> That's the magic of Risk:Reward.</strong></p>

        <p>Relying on your Win/Loss ratio is a game for suckers, it is what the banks want you to rely on. You will almost assuredly lose. Use Risk:Reward to your advantage instead.</p>

        <p>The best way to maximize RR is to track the large players and capitalize on their moves.</p>

        <p><strong>You should know what your RR is going to be before you ever enter a trade. </strong></p>
        <p>You can learn how to figure out where to place stop-losses/take-profits by <a href={pro_link}>going pro!</a></p>


      </Collapsible>

    </div>

  )
}

export default Example;
