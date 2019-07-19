import { APP_COUNT_PER_PAGE } from "../config/settings";

export function isContain(hayStack, needle) {
    if (hayStack === undefined || hayStack.constructor !== String) return false;
    return hayStack.toLowerCase().indexOf(needle.toLowerCase().trim()) !== -1;
}

export function isSearchTermExist(searchTerm) {
    return !(searchTerm === undefined || searchTerm.constructor !== String || searchTerm.trim().length <= 0);
}

export function filterApp(item, searchTerm) {

    let game_categories = [];
    if (item.genres.constructor === Array) {
        item.genres.map((item)=>{
            game_categories.push(item.name);
        })
    }

    let search_content = [item.name, item.artistName].concat(game_categories);
    for (let i = 0; i < search_content.length; i++) {
        if (isContain(search_content[i], searchTerm)) return true;
    }

    return false;
}


export function fetchAppListFromLocalStorage(pageNumber) {

    if (localStorage.getItem('appListExpireAt') < Date.now()) {
        localStorage.removeItem('cacheAppList');
        localStorage.removeItem('totalRecord');
        localStorage.removeItem('appListExpireAt');
        return [];
    } else {
        let cacheAppList = JSON.parse(localStorage.getItem('cacheAppList'));
        if (cacheAppList != null && cacheAppList.constructor === Array) {
            return cacheAppList.slice((pageNumber-1) * APP_COUNT_PER_PAGE, (pageNumber * APP_COUNT_PER_PAGE));
        }
        return [];
    }
}

export function fetchGrossAppListFromLocalStorage() {

    if (localStorage.getItem('grossAppListExpireAt') < Date.now()) {
        localStorage.removeItem('cacheGrossAppList');
        localStorage.removeItem('grossAppListExpireAt');
        return [];
    } else {
        let cacheGrossAppList = JSON.parse(localStorage.getItem('cacheGrossAppList'));
        if (cacheGrossAppList != null && cacheGrossAppList.constructor === Array) {
            return cacheGrossAppList;
        }
        return [];
    }
}