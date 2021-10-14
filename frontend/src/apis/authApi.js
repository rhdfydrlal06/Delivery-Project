import axios from "axios"
import jwt from "jwt-decode"

const apiPath = process.env.REACT_APP_BACKEND_URL + "/api/auth"

const isExpired = (token) => {
    const decoded = jwt(token)
    return Date.now() >= decoded.exp * 1000
}

export const signinRequest = async (email, password) => {
    const response = await axios.post(`${apiPath}/signin`, { email, password })
    return response
}

export const signupRequest = async (email, password, name) => {
    const response = await axios.post(`${apiPath}/signup`, { email, password, name })
    return response
}

export const signoutRequest = async () => {
    const token = window.sessionStorage.getItem("token")
    if (!token) return
    const id = jwt(token).sub
    try {
        const response = await axios.post(`${apiPath}/signout`, { id })
        window.sessionStorage.removeItem("token")
        return response
    } catch (error) {
        return error
    }
}

export const getCurrentUserInfo = () => {
    const token = window.sessionStorage.getItem("token")
    if (!token) return

    if (isExpired(token)) {
        console.log("please refresh!")
    }

    const user = jwt(token)
    const result = {
        id: user.sub,
        email: user.email,
        name: user.name
    }
    return result
}
