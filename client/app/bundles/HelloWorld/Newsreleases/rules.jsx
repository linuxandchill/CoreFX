import React, { PropTypes } from 'react';
import Collapsible from 'react-collapsible';
import Trigger from '../utils/Trigger.jsx';
import ProgressCheck from '../utils/ProgressCheck.jsx';

const Rules = (props) => {

  var pro_link = props.is_pro_user ? "#" : "/pro"

  return (
    <div className="single-chapter">

      <ProgressCheck checked={props.checked} user={props.user} chapterid={props.chapters[1].uniqueid}/>
      <Collapsible className="chapter" trigger={<Trigger chapter={props.chapters[1]} />} >

        <p>
          For <a href={pro_link}>PRO members</a> this topic will be discussed in <a href="/eur-gbp-tips">EUR & GBP Technique</a> since those are the pairs that we have established clear methods for tading news. However, here are some general rules you can use to trade the news in a safer manner on most pairs.
        </p>

        <ul className="inner-list">
          <li>You can open a trade if there is a setup <strong>AT LEAST ONE HOUR</strong> before news release. </li>
          <li>The pullback should be at least 15M before release. NEVER on the news candle.</li>
          <li>Once it moves in your direction, move stop to break-even + spread.</li>
        </ul>

        <p>Markets are erratic during news releases, and <a href="/stop-loss">stop-runs</a> are common therefore you will often see the market come back to your original entry. If you don't account for spread you will possibly get stopped out.</p>

        <p>You should always avoid trading news releases, it's impossible to guess where the market will go. That is simply gambling.</p>

        <p>However, there will be many times when a <a href="/setups">setup</a> presents itself and you must take it. In times like this it is often benefitial to be in the market before the news release since you'll catch the large move that the release created.  </p>

        <br></br>

        <p></p>

      </Collapsible>

    </div>
  )
}

export default Rules;
