import { useState, useEffect } from "react"
import { TextInput } from "react-materialize"
// import ReviewForm from "./ReviewForm"
import axios from "axios"
import { useParams, useNavigate } from "react-router-dom"



export default function CreateReview(props) {
    console.log('this is props for the review of sitter', props)

    const [user, setUser] = useState(props.user.id)
    const [singleSitter, setSingleSitter] = useState([])
    const [review, setReview] = useState('')
    const [rating, setRating] = useState('')
    const navigate = useNavigate()



    let {id}= useParams()

    useEffect(() => {
        console.log('getting single sitter')
        getSingleSitter()
    }, [])

    const getSingleSitter = () => {
        axios({
            url: `http://localhost:8000/sitters/${id}`,
            method: 'GET',
        })
            .then(foundSingleSitter => {
                console.log('this is single sitter in review form', foundSingleSitter)
                setSingleSitter(foundSingleSitter)
            })
    }

    const createReview = (e) => {
        e.preventDefault()
        const sitterReview = { user, singleSitter:singleSitter.data.sitter.id, review, rating}
    

        fetch(`http://localhost:8000/reviews`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${props.user.token}`
            },
            body: JSON.stringify(sitterReview)
        }).then(createdReview => {
            console.log('new review added', createdReview);
        })
        .then(() => navigate(`/sitterlisting/${newParam.id}`))
        .catch(error => {
            console.log(error);
        })

    }

    const handleReviewData = (data) => {
        console.log('date data', data)
        setReview(data)
    }
    return (
        <>
            <div>
                <TextInput id="TextInput-25" />
                <h1>Create a Review</h1>
                <label htmlFor='name'>Review:</label>
                <input type='text' name='review' id='review'
                    value={review}
                    onChange={e => setReview(e.target.value)} />
                <label htmlFor='name'>Rating:</label>
                <input type='number' name='rating' id='rating'
                    value={rating}
                    onChange={e => setRating(e.target.value)} />
                <button onClick={createReview}>Created Review</button>
            </div>
        </>
    )
}