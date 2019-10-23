import axios from 'axios'

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token')
    return axios.create({
        baseURL: 'https://mentor-me-app-be.herokuapp.com/api',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${token}`
        }
    })
}
