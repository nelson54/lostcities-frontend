export default class LoginService {
    constructor(url, basepath) {

    }

    async login(login, password, rememberMe) {
        // Default options are marked with *
        const response = await fetch(_fullPath(), {
            method: 'POST', 
            mode: 'cors', 
            cache: 'no-cache', 
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
            'Content-Type': 'application/json'
            },
            referrerPolicy: 'no-referrer',
            body: JSON.stringify({}) // body data type must match "Content-Type" header
        });
        return response.json(); 
    }

    _fullPath(path="") {
        return this.url + this.basepath + fullPath
    }
}

let serviceInstance;

export function instance() {
    if(!serviceInstance) {
        serviceInstance = LoginService()
    } 

    return serviceInstance
}