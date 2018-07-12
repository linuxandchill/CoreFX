import React, { PropTypes } from 'react';
import Collapsible from 'react-collapsible';
import Trigger from '../utils/Trigger.jsx';
import ProgressCheck from '../utils/ProgressCheck.jsx';

const Whatisit = (props) =>
<div className="single-chapter">

  <ProgressCheck checked={props.checked} user={props.user} chapterid={props.chapters[0].uniqueid}/> 
  <Collapsible className="chapter" trigger={<Trigger chapter={props.chapters[0]} />} >

    <p> Consider the defition provided by investopedia.com: </p>
    <p>
      With a stop order, your trade will be executed only when the security you want to buy or sell reaches a particular price (the stop price). Once the stock has reached this price, a stop order essentially becomes a market order and is filled.
    </p>
    <img className="img-responsive" src="https://media.giphy.com/media/TlNY7ob29c4Gk/giphy.gif" alt="Hi :)" />
    <br></br>

    <p>A stop-loss order, or stop order, is a type of advanced trade order that can be placed with most brokerage houses. The order specifies that an investor wants to execute a trade for a given stock, but only if a specified price level is reached during trading. This differs from a conventional market order, in which the investor simply specifies that he or she wishes to trade a given number of shares of a stock at the current market-clearing price. </p>

    <p>A stop-loss order is essentially an automatic trade order given by an investor to his or her brokerage. It will only become active and be executed once the price of the stock in question falls to the specified stop price stated in the investor's stop-loss order.
    </p>

    <p> Because a stop order is executed once price reaches a certain point, <strong> it is a strong tool used by the banks to fool retail traders into jumping in/out of the market.</strong></p>


  </Collapsible>

</div>

export default Whatisit;
