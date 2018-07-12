import React, { PropTypes } from 'react';
import Collapsible from 'react-collapsible';
import Trigger from '../utils/Trigger.jsx';
import ProgressCheck from '../utils/ProgressCheck.jsx';
import ProVideo from '../utils/ProVideo.jsx';

const Ck5 = (props) =>
<div className="single-chapter">

  <ProgressCheck checked={props.checked} user={props.user} chapterid={props.chapters[1].uniqueid}/> 
  <Collapsible className="chapter" trigger={<Trigger chapter={props.chapters[1]} />} >

    <p>
      The CK-FIVE, otherwise known as "the spinner setup", is quite easy to spot because it is so unique. It consists of three very tight candles, commonly known as "spinning tops", followed by a pullback.
    </p>

    <p>The setup requires tight candles that represent the building of a position.</p>
    <p>Here's what the CK-FIVE looks like:</p>

    <img className="img-responsive" src="https://i.imgur.com/a4TCC0x.png" alt="Hi :)" />
    <br></br>

    <p>The following criteria must be met for the setup to be valid:</p>
    <ul className="inner-list">
      <li>At least three "spinning top" candles.</li>
      <li>Pullback on fourth or fifth candle.</li>
      <li>May take a few hours.</li>
    </ul>
        <div>
          <ProVideo is_pro_user={props.is_pro_user} embedcode='<iframe src="//fast.wistia.net/embed/iframe/hjv1gjpoh1" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width="620" height="349"></iframe>'/>
        </div>
        <br></br>
        <div>
          <ProVideo is_pro_user={props.is_pro_user} embedcode='<iframe src="//fast.wistia.net/embed/iframe/08r20tjpsw" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width="620" height="349"></iframe>'/>
        </div>
        <br></br>

    <p>Here's a few more examples:</p>

    <img className="img-responsive" src="https://i.imgur.com/TrHiSiB.png" alt="Hi :)" />

    <p>In the previous setup the following occurred: </p>
    <ul className="inner-list">
      <li>Price came into a pre-determined level(#1)</li>
      <li>We saw three tight candles(#2)</li>
      <li>The big players move it lower to fool traders(#3)</li>
      <li>They bring it back and stop everyone out(#4)</li>
      <li>#4 is the pullback where you would take an entry.</li>
    </ul>

    <p>The following example may be confusing for some because it looks so much like a <a href="/setups">CK-THREE</a> which is constituted by multiple pins.</p>
    <p>It's important to remember that <strong>it doesn't matter what the setup is called</strong>. As long as there is evidence of manipulation, you should be looking for an entry.</p>
    <p>In the section on <a href="psychology">trading psychology</a> we will discuss <i>analysis paralysis</i>, which is a common phenomenon amongst traders who are so indesicive that they cannot take a trade. </p>
<p>It is common to get bogged down in the details of each setup and trying to remember what each is called and if all the criteria is met, but over time the trader will learn to not look for a specific setup, instead they interpret the market and trade based on that.</p>

<img className="img-responsive" src="https://i.imgur.com/gMwcPcX.png" alt="Hi :)" />
    <br></br>
    <p>Regardless of what the setup above is called, it is a clear sign of manipulation and a trade can be taken based on it.</p>


  </Collapsible>

</div>

export default Ck5;
