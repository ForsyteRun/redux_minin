import axios from "axios";
const baseUrlHolder = 'https://jsonplaceholder.typicode.com/';

const instance = axios.create({
   baseURL: 'https://630f1ba6498924524a860c3f.mockapi.io/',
 });

const samuraiInstance = axios.create({
   baseURL: 'https://social-network.samuraijs.com/api/1.0/'
});

export const getUsersApi = (pageSize, currentPage) => {
   return axios.get(baseUrlHolder + `photos?_limit=${pageSize}&_page=${currentPage}`)
}

export const getFollow = (id) => {
   return instance.delete(`follow/${id}`)
   .then(response => response.data)
}

export const getUnFollow = (id) => {
   return  instance.post('follow/',{
      id,
      fallowed: true,       
    }).then(response => response.data)
}

export const getUserProfile = (match) => {
   return axios.get(baseUrlHolder + 'users/' + match)
   .then(response => response.data)
}

export const authMe = () => {
   return samuraiInstance.get('auth/me', {withCredentials: true});
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

   loadAvatar(url){
      return axios.put('https://630f1ba6498924524a860c3f.mockapi.io/myProfile/1', 
      {'image': url})
   }, 
   getAvatar(){
      return instance.get('myProfile/1')
   },
   uploadProfileInfo(data){
      return axios.put('https://630f1ba6498924524a860c3f.mockapi.io/myProfile/1', 
      data)
   },
};

export const AuthAPI = {
   enterAuth(email, password, rememberMe, captcha){
      return samuraiInstance.post('auth/login', {
         email, 
         password,
         rememberMe,
         captcha},
         {withCredentials: true})
   },
   outAuth(){
      return instance.delete('auth/1')
   },
};

export const securityApi = {
  getCaptcha(){
      return axios.get('https://social-network.samuraijs.com/api/1.0/security/get-captcha-url')
   }
};
