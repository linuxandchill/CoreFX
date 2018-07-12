import React, { PropTypes } from 'react';
import Collapsible from 'react-collapsible';
import Trigger from '../utils/Trigger.jsx';
import ProgressCheck from '../utils/ProgressCheck.jsx';

const Isitsafe = (props) =>
<div className="single-chapter">

  <ProgressCheck checked={props.checked} user={props.user} chapterid={props.chapters[0].uniqueid}/> 
  <Collapsible className="chapter" trigger={<Trigger chapter={props.chapters[0]} />} >

    <p>Many people trade the news in forex, but it's simply not the same as trading the news in stock markets. There are too many factors and most of the time the move that occurs because of the news release does not even reflrect the data that was released.</p>

    <p>News makes no sense sometimes. Even if it's good news, the market may still move lower because of factors that can be used to justify the irrational move only AFTER they have occurred. </p>

      <p>
        The bottom line is that it's too dangerous, especially in forex. <strong> Gaps</strong> are extremely common in currency trading, and when it happens to you you will wish that you had never entered the trade. Margin and leverage in forex can be very dangerous and if you're not careful you can actually end up owing your broker money.
      </p>

      <p>Do you remember the CHF move in 2015? Hope you weren't in the market at that time. Read an article on it <a href="http://www.zerohedge.com/news/2015-01-15/its-tsunami-swiss-franc-soars-most-ever-after-snb-abandons-eurchf-floor-macro-hedge-" target="_blank">here</a>.</p>

      <p>For the most part, <strong>YOU DON'T WANT TO BE IN THE MARKET WHEN NEWS IS COMING.</strong> You want to avoid charts that could potentially look like this:  </p>

      <img className="img-responsive" src="https://www.benzinga.com/files/u78602/66k_image1.png" alt="Hi :)" />
    <br></br>

    <p>
      One thing that must be made clear is that <strong>the data in the news release should be irrelevant to your trading</strong>. </p>

    <p>
    In the next chapter we will cover how you can trade the news in a more risk-averse manner and actually profit from some of the crazy moves.
    </p>


  </Collapsible>

</div>

export default Isitsafe;
