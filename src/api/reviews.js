import apiUrl from "../apiConfig"
import axios from "axios"

export const getReviews = (sitterId) => {
    return axios({
        method: 'GET',
        url: `${apiUrl}/${sitterId}/review`
    })
}

export const postReview = (user, sitterId, value) => {
    return axios({
        method: 'POST',
        url: `${apiUrl}/${sitterId}/review`,
        headers: {
            Authorization: `Token token=${user.token}`
        },
        data: {
            review: value
        }
    })
}