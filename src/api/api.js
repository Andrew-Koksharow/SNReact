import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: { "API-KEY": 'df505b79-2df6-439f-87d2-7a2e3eb90c41' }
})

export const authAPI = {
    getAuth() {
        return instance.get(`auth/me`)
            .then(response => {if (response.data.resultCode === 0) {return response.data;}})
    }
}

export const usersAPI = {

    getUsers(currentPage, pageSize) {
return instance.get(`users?page=${currentPage}&count${pageSize}`).
then(response => {
    return response.data;
})
    },
    follow(id) {return instance.post(`follow/${id}`).then( response => {return response.data})},
    unfollow(id) {return instance.delete(`follow/${id}`).then( response => {return response.data})}
}

export const profileAPI = {

    getProfile(userId) {
        
        return instance.get(`profile/${userId}`).
        then(response => { return response.data})
}, 
getStatus(userId) {
    return instance.get(`profile/status/${userId}`)
},
updateStatus(status) {
return instance.put(`profile/status`, {status: status})
}
 
}
    


