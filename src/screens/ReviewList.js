import React from 'react';

function ReviewList(props) {
  return <div>
 <h2> rating:{props.review.rating}</h2>
<p>review:{props.review.review}</p>
  </div>
}

export default ReviewList;
