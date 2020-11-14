import axios from 'axios'

export default function ajax (url,type,data){
    axios.defaults.baseURL='https://elm.cangdu.org'
    if(type==='GET'){
        return axios.get(url,{params:data})
    }else{
        return axios.post(url,data)
    }
}

