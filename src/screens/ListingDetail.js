import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import CreateBooking from "./CreateBooking";
import ReviewList from "../components/review/ReviewList";
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

<h4>All Reviews for {singleSitter.first_name} {singleSitter.last_name}:</h4>
<div>
      {sitterReviews.map((review) => {
        console.log('review listing detail', review)
                    return (
                      <li key={review.id}>
                          {/* pass products array to Product component */}
                        <ReviewList review={review} />
                      </li>
                    )
                  })}
                  </div>
    </div>
  );
                }
                