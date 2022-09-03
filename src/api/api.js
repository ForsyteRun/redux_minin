import axios from "axios";
const baseUrlMock = 'https://630f1ba6498924524a860c3f.mockapi.io/';
const baseUrlHolder = 'https://jsonplaceholder.typicode.com/';


export const getUsersApi = (pageSize = 5, currentPage = 1) => {
   return axios.get(baseUrlHolder + `photos?_limit=${pageSize}&_page=${currentPage}`)
}

export const getFollow = (id) => {
   return axios.delete(baseUrlMock + `follow/${id}`)
   .then(response => response.data)
}

export const getUnFollow = (id, url) => {
   return  axios.post(baseUrlMock + 'follow/',{
      id,
      url,
      fallowed: true,       
    }).then(response => response.data)
}

export const getUserProfile = (match) => {
   return axios.get(baseUrlHolder + 'users/' + match)
   .then(response => response.data)
}

export const getAuth = () => {
   return  axios.get(baseUrlMock + 'auth/1')
   .then(response => response.data)
}