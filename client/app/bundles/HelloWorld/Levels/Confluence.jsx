import React, { PropTypes } from 'react';
import Collapsible from 'react-collapsible';
import Trigger from '../utils/Trigger.jsx';
import ProgressCheck from '../utils/ProgressCheck.jsx';
import ProVideo from '../utils/ProVideo.jsx';

const Confluence = (props) =>
<div className="single-chapter">

  <ProgressCheck checked={props.checked} user={props.user}  chapterid={props.chapters[4].uniqueid}/> 
  <Collapsible className="chapter" trigger={<Trigger chapter={props.chapters[4]} />} >

    <p>
      Confluence means that you have several levels close together.
    </p>

    <div>
      <ProVideo is_pro_user={props.is_pro_user} embedcode='<iframe src="//fast.wistia.net/embed/iframe/s5rn7pqi24" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width="620" height="349"></iframe>'/>
    </div>
    <br></br>

    <p>
      You could have a moving average & a high of the day at around the same area and this would mean that there are twice as many orders stacked there than if it were just one level on it's own.
    </p>

    <p>Banks need tons of orders, therefore looking for confluence in your levels will give you a better indication of where the big chunk of orders could potentially be stacked.</p>

    <p>To get a better idea of what is meant by confluence, please take a look at the following chart:</p>

    <img className="img-responsive" src="https://i.imgur.com/Rn4DtGf.png" alt="Hi :)" />
    <br></br>

    <p>In the example above we have a potential short opportunity.</p>

    <p>We have several different levels working for us here: </p>
    <ul className="inner-list">
      <li>100 Exponential Moving average</li>
      <li>High of previous day(red line)</li>
      <li>Previous resistance</li>
    </ul>

    <p> Because of the great confluence seen here, this area can be treated as a very high-probability manipulation point. You should be looking for a <a href="/setups">setup</a> to occur somewhere in this area.</p>



  </Collapsible>

</div>

export default Confluence;
