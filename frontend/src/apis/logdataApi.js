import axios from "axios";

const apiPath = process.env.REACT_APP_BACKEND_URL + "/api/logdata";  

export const pickLogDataRequest = async (id) => {
    const response = await axios.get(`${apiPath}/logdata/${id}`);
    return response
}