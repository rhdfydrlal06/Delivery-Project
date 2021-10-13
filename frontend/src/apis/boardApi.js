import axios from "axios";

const apiPath = process.env.REACT_APP_BACKEND_URL + "/api/board";

export const addBoardRequest = async (formData) => {
    const config = {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    }
    const response = axios.post(`${apiPath}`, formData, config)

    return response.data
}
