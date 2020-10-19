import axios from 'axios'

let api='/api';

// 请求拦截：
axios.interceptors.request.use((config) => {
    // if (config.url != api + '/login') {
    //     config.headers.token = localStorage.getItem('token')
    // }
    // console.log(config);    
    return config;
})

// 响应拦截：
axios.interceptors.response.use(res=>{
    console.log('本次请求的地址是：'+res.config.url);
    console.log(res);
    return res;
})

export const reqLogin=(phone,password)=>{
return axios({
    url:api+'/api/login',
    method:'post',
    data:{
        phone,
        password
    }
})
}

export const reqRegi=(phone,nickname,password)=>{
    return axios({
        url:api+'/api/register',
        method:'post',
        data:{
            phone,
            nickname,
            password
        }
    })
}

export const reqBanner=()=>{
    return axios({
        url:api+'/api/getbanner',
        method:'get'
    })
}

export const reqCont=()=>{
    return axios({
        url:api+'/api/getindexgoods',
        method:'get'
    })
}