import React from 'react';
import SitterForm from './SitterForm';

function Host(props) {
  return (<div>
      <SitterForm setTrigger={props.setTrigger} user={props.user}/>
  </div>
  )
}

export default Host;
