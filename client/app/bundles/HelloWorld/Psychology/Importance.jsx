import React, { PropTypes } from 'react';
import Collapsible from 'react-collapsible';
import Trigger from '../utils/Trigger.jsx';
import ProgressCheck from '../utils/ProgressCheck.jsx';

const Importance = (props) =>
<div className="single-chapter">

  <ProgressCheck checked={props.checked} user={props.user} chapterid={props.chapters[0].uniqueid}/> 
  <Collapsible className="chapter" trigger={<Trigger chapter={props.chapters[0]} />} >

    <img className="img-responsive" src="https://media.giphy.com/media/JuE1z8ZHNhKRa/giphy.gif" alt="Hi :)" />
    <br></br>
    <p>
      Many traders disregard the mental habits and practices that they excercise every day when running their business. It is imperative that if you hope to become consistently profitable trading forex you understand the role that mental discipline & fortitude is in this game.
    </p>

    <p>First off, in order to trade one must have the right mindset. There are a few rules you can abide by when not certain how to approach the market.
      </p>

      <p>It is important to remember that you must set your ego aside, because after all <strong>trading profitably has nothing to do with being right</strong>.</p>

      <p>You must never forget that the most boring parts of trading are the ones that matter most, it is a process that you must learn to enjoy.</p>

      <p>At no point before or during a trade should you be feeling any sort of euphoria, anxiety, or adrenaline. This will be hard to control but if you allow emotions to play a role then your accoutn will suffer because of it.</p>

      <p>The best way to ensure that you remain cold & calculated is to have a plan. You must know what you are going to do, as well as when/why you're doing it. No guessing, no hoping.</p>

  </Collapsible>

</div>

export default Importance;
