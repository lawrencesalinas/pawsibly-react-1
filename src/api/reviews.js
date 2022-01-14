import apiUrl from "../apiConfig"
import axios from "axios"

export const getReviews = (sitterId) => {
    return axios({
        method: 'GET',
        url: `${apiUrl}/${sitterId}/review`
    })
}

