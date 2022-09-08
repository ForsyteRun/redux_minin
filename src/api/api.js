import axios from "axios";
const baseUrlHolder = 'https://jsonplaceholder.typicode.com/';

const instance = axios.create({
   baseURL: 'https://630f1ba6498924524a860c3f.mockapi.io/',
 });


export const getUsersApi = (pageSize, currentPage) => {
   return axios.get(baseUrlHolder + `photos?_limit=${pageSize}&_page=${currentPage}`)
}

export const getFollow = (id) => {
   return instance.delete(`follow/${id}`)
   .then(response => response.data)
}

export const getUnFollow = (id, url) => {
   return  instance.post('follow/',{
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
   return  profileAPI.getUserProfile()
}

export const profileAPI = {
   getUserProfile (match) {
      return axios.get(baseUrlHolder + 'users/' + match)
      .then(response => response.data)
   },

   getStatus(){
      return instance.get('status/')
   },

   updateStatus(status){
      return instance.put('status/1', {
         status:status,
      })
   },

   setStatus(status){
      return instance.push('status/', {
         status:status,
      }).then(res =>res.data)
   },
}
