import React, { PropTypes } from 'react';
import Collapsible from 'react-collapsible';
import Trigger from '../utils/Trigger.jsx';
import ProgressCheck from '../utils/ProgressCheck.jsx';
import ProVideo from '../utils/ProVideo.jsx';

const Mainstreamstrategies = (props) => {

  return(
    <div className="single-chapter">

      <ProgressCheck checked={props.checked} user={props.user} chapterid={props.chapters[1].uniqueid}/>
      <Collapsible className="chapter" trigger={<Trigger chapter={props.chapters[1]} />} >

        <p>
          Very few forex traders are able to do it full time, do you really think that a majority of them are doing it wrong? Or is it possible that THE STRATEGIES THEY ARE USING are leading them astray?
        </p>

        <p> Let's take a look at some of these retail strategies:  </p>
        <ul className="inner-list">
          <li>Breakout trading </li>
          <li> MACD, RSI, Oscillators, SAR, etc...</li>
          <li>MA Crossovers</li>
          <li>Chart patterns</li>
          <li>News trading</li>
        </ul>


        <p>
          It is important that you quickly realize that the strategies you are using are meant to keep you in the rat-race. They are designed by banks, brokers, and predators to suck as much money from your account as possible before you realize what has happened.
        </p>

        <div>
          <ProVideo is_pro_user={props.is_pro_user} embedcode='<iframe src="//fast.wistia.net/embed/iframe/96nt8y94z9" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width="620" height="349"></iframe>'/>
        </div>
      <br></br>

        <p>
          Banks control the forex market. Their strategy is to deceive you in order to create liquidity for themselves. It's that simple.
        </p>

        <p>
          All other strategies that involve indicators that apply rules to the market are garbage. Unless you are involved in HFT and making millions of trades per hour, these strategies will not work in the long term.
        </p>

        <p>  <strong>
            The banks dont use them. Real traders shouldn't use them.
          </strong>
        </p>

      </Collapsible>

    </div>


    )
}
export default Mainstreamstrategies;
