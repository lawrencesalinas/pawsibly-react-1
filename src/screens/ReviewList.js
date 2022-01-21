import React from 'react';

function ReviewList(props) {
  console.log("REV PROPS", props)

 
  return <div>
 <h2> rating:{props.review.rating}</h2>
{props.review.review}
  </div>;
}

export default ReviewList;
