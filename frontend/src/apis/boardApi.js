import axios from "axios"

const apiPath = process.env.REACT_APP_BACKEND_URL + "/api/board/"

export const addBoardRequest = async formData => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  }
  const response = await axios.post(`${apiPath}`, formData, config)

  return response.data
}

export const wholeBoardRequest = async () => {
  const response = await axios.get(`${apiPath}list`)
  return response.data
}

export const deletePostRequest = async id => {
  const response = await axios.delete(`${apiPath}${id}`)
  return response.data
}

export const updatePostRequest = async ({ formData, id }) => {
  const response = await axios.patch(`${apiPath}${id}`, formData)
  return response.data
}
