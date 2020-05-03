//Local Storage
export function getLocalItem(key, defaultValue){
    let item = localStorage.getItem(key);
    if(item){
        item = JSON.parse(item);
        return item;
    }
}

export function setLocalItem(key, value) {
    value = JSON.stringify(value);
    localStorage.setItem(key, value);
}

export function removeLocalItem(key) {
    localStorage.removeItem(key);
}

//Session Storage
export function getSessionItem(key, defaultValue) {
    let item = sessionStorage.getItem(key);
    if (item) {
        item = JSON.parse(item);
        return item;
    }
}

export function setSessionItem(key, value) {
    value = JSON.stringify(value);
    sessionStorage.setItem(key, value);
}

export function removeSessionItem(key) {
    sessionStorage.removeItem(key);
}