import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import CreateBooking from "./CreateBooking";
import ReviewList from "./ReviewList";
import { Button, Card, CardTitle, Col, Icon, Row } from "react-materialize";


export default function ListingDetail(props) {
  console.log("sitter listing detail props", props.allSitters);

  const [singleSitter, setSingleSitter] = useState([]);
  const [sitterReviews, setSitterReviews] = useState([]);

  let newParam = useParams();   

  useEffect(() => {
    console.log("getting single sitter");
    getSingleSitter();
  }, []);
  const getSingleSitter = () => {
    axios({
      url: `http://localhost:8000/sitters/${newParam.id}`,
      method: "GET",
    }).then((foundSingleSitter) => {
      console.log("this is single sitter", foundSingleSitter.data.sitter.id);
      setSingleSitter(foundSingleSitter.data.sitter);
    });
  };

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(`http://localhost:8000/reviews/${newParam.id}`)
      setSitterReviews(data.reviews);
    }
    fetchData();
  },[]);
  return (
    <div>
      <div class="row">
        <div class="col s12 m6">
          <div class="card #e57373 red lighten-2">
            <div class="card-content white-text">
              <span class="card-title">
                Hi, I'm {singleSitter.first_name} {singleSitter.last_name}
              </span>
              <h4>About me:</h4>
              <h3>{singleSitter.description}</h3>
              <p>{singleSitter.numReviews} reviews</p>
              <p>{singleSitter.rating} rating</p>
              <h3>${singleSitter.pricing} per night</h3>

              <CreateBooking singleSitter={singleSitter} user={props.user} />
              <Link
                to={`/review/${singleSitter.id}`}
                class="btn-floating btn-large waves-effect waves-light yellow"
              >
                <i class="material-icons">comment</i>
              </Link>
            </div>
            <div class="card-action"></div>
          </div>
        </div>
      </div>

<h2>HELLLO</h2>
<div>
      {sitterReviews.map((review) => {
                    return (
                      <li key={review.id}>
                          {/* pass products array to Product component */}
                        <ReviewList review = {review} />
                      </li>
                    )
                  })}
                  </div>
    </div>
  );
}

// <Row>
//     <Col
//         m={6}
//         s={12}
//     >
//         <Card
//             actions={[
//                 <a key="1" href="#"><Link to >
//                     <Button>Book me</Button>
//                 </Link></a>
//             ]}
//             closeIcon={<Icon>close</Icon>}
//             header={<CardTitle image="https://materializecss.com/images/sample-1.jpg">Hi, I'm {singleSitter.first_name} {singleSitter.last_name}
//                 <p>{singleSitter.numReviews} reviews</p>
//                 <p>{singleSitter.rating} rating</p>
//                 <p>${singleSitter.pricing} per night</p>
//             </CardTitle>}
//             revealIcon={<Icon>more_vert</Icon>}
//         >
//             <h2>About me:</h2>
//             <h3>{singleSitter.description}</h3>
//         </Card>
//     </Col>
// </Row>
// <CreateBooking singleSitter={singleSitter} user={props.user} />
// <Link to={`/review/${singleSitter.id}`} class="black-text">Create a Review</Link>
