import axios from "axios"
import jwt from "jwt-decode"

const apiPath = process.env.REACT_APP_BACKEND_URL + "/api/auth"

if (window.localStorage.getItem("token")) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${window.localStorage.getItem("token")}`
}

axios.interceptors.request.use(
    async (config) => {
        const token = window.localStorage.getItem("token")
        const splitedUrl = config.url.split('/')
        const endpoint = splitedUrl[splitedUrl.length - 1]
        if (endpoint !== 'refresh' && token && isTokenExpired(token)) {
            const response = await refreshTokenRequest(token)
            const new_token = response.data.access_token
            config.headers.Authorization = `Bearer ${new_token}`
            return config
        }
        return config
    }
)

export const isTokenExpired = (token) => {
    const decoded = jwt(token)
    return Date.now() >= decoded.exp * 1000
}

export const signinRequest = async (email, password) => {
    try {
        const response = await axios.post(`${apiPath}/signin`, { email, password })
        const token = response.data.access_token
        window.localStorage.setItem("token", token)
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        return response
    } catch (error) {
        throw error
    }
}

export const signupRequest = async (email, password, name) => {
    const response = await axios.post(`${apiPath}/signup`, { email, password, name })
    return response
}

export const signoutRequest = async () => {
    const token = window.localStorage.getItem("token")
    if (!token) return
    const id = jwt(token).sub
    try {
        const response = await axios.post(`${apiPath}/signout`, { id })
        window.localStorage.removeItem("token")
        delete axios.defaults.headers.common['Authorization']
        return response
    } catch (error) {
        throw error
    }
}

export const refreshTokenRequest = async (token) => {
    try {
        const decoded = jwt(token)
        const id = decoded.sub
        const response = await axios.post(`${apiPath}/refresh`, { id })
        const new_token = response.data.access_token
        window.localStorage.setItem("token", new_token)
        axios.defaults.headers.common['Authorization'] = `Bearer ${new_token}`
        return response
    } catch (error) {
        window.localStorage.removeItem("token")
        delete axios.defaults.headers.common['Authorization']
        throw error
    }
}

export const getCurrentUserInfo = () => {
    const token = window.localStorage.getItem("token")
    if (!token) return

    const user = jwt(token)
    const result = {
        id: user.sub,
        email: user.email,
        name: user.name
    }
    return result
}
