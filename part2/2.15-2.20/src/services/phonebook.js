import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons/'

const getPhonebook = ()=> {
    const req = axios.get(baseUrl)
    return req.then(res => res.data)
}


const collectContacts = (contact) => {
    const req = axios.post(baseUrl, contact)
    return req.then(res => res.data)
}

const eraser = (id, obj) => {
    const req = axios.delete(`${baseUrl}/${id}`, obj)
    return req.then(res => res.data)
}

const updateAuser = (id, obj) => {
    const req = axios.put(`${baseUrl}/${id}`, obj)
    return req.then(res => res.data)
}

export default { getPhonebook, collectContacts, eraser, updateAuser }