import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BookingList from "./BookingList";

function SitterReview(props) {
  const [allReview, setAllReview] = useState([]);
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);
  const [viewComment, setViewComment] = useState([]);
  let { id } = useParams();
  const createReview = (e) => {
    e.preventDefault();
    const rev = {
      pet_owner: props.user.id,
      rating: 3,
      review: "hello",
      sitter: `${id}`,
    };
    fetch(`http://localhost:8000/createreviews/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${props.user.token}`,
      },
      body: JSON.stringify(rev),
    }).then(createdReview => {
      console.log("new pet added", createdReview);
    })
    .catch(error => {
    console.log(error);
  
  })
  };

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(`http://localhost:8000/reviews/${id}`, {
        headers: {Authorization: `Token ${props.user.token}`},
      })
      console.log("I AM REVIEWS", data);
      setAllReview(data)
    }
    fetchData();
  }, []);




  return (
    <div>
    <BookingList/>
      <form onSubmit={createReview}>
        <label>Write a Review</label>
        <input
          type="text"
          required
          value={review}
          review="review"
          onChange={(e) => setReview(e.target.value)}
        />
        <button>submit Review</button>
      </form>
      <h1>Sitter Reviews</h1>
     {/* <h2> {allReview.map((r) => {
           return (
          console.log(r.review)
          )
        })} </h2>
       */}
    </div>
  );
}

export default SitterReview;
