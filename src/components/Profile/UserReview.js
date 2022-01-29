import {useEffect, useState} from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import ReviewListing from './ReviewListing'
import apiUrl from "../../apiConfig"

export default function UserReview (props) {
    console.log('userreview props', props)

    const [review, setReview] = useState([])

    useEffect(() => {
        getReview()
    }, [])

    const newParam = useParams()

    const getReview = () => {
        axios({
            url: `${apiUrl}/reviews`,
            method: 'GET',
            headers: {
                'Authorization': `Token ${props.user.token}`
            },
        })
            .then(foundReview => {
                console.log('this is reviews', foundReview.data.reviews)
                setReview(foundReview.data.reviews)
            })
    }


    return (
        <div>
           <ReviewListing review={review} />
        </div>
    )
}