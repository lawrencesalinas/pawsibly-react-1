import apiUrl from '../apiConfig'
import axios from 'axios'

export const getUsersPets = (user) => {
    return axios({
        method: 'GET',
        url: `${apiUrl}/problems/user`,
        headers: {
            Authorization: `Token token=${user.token}`
        }
    })
}

