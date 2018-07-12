import React, { PropTypes } from 'react';
import Collapsible from 'react-collapsible';
import Trigger from '../utils/Trigger.jsx';
import ProgressCheck from '../utils/ProgressCheck.jsx';

const Yen = (props) => {
  return(
    <div className="single-chapter">

  <ProgressCheck checked={props.checked} user={props.user}  chapterid={props.chapters[1].uniqueid}/> 
      <Collapsible className="chapter" trigger={<Trigger chapter={props.chapters[1]} />} >


        <img className="img-responsive" src="https://media.giphy.com/media/l0MYB9BKgIAQyc2Mo/giphy.gif" alt="Hi :)" />
        <br></br>




        </Collapsible>

      </div>


      )
      }
      export default Yen;
