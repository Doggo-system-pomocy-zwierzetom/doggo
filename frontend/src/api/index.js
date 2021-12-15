import axios from 'axios';

const API = axios.create({baseURL: 'http://localhost:5000'});
API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    return req;
});

export const fetchAdoptions = () => API.get('/adoptions');

export const createAdoption = (newAdoption) => API.post('/adoptions', newAdoption);

export const updateAdoption = (id, updatedAdoption) => API.patch(`/adoptions/${id}`, updatedAdoption);

export const deleteAdoption = (id) => API.delete(`/adoptions/${id}`);

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);