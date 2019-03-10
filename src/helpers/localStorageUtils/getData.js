export function getLocalStorageData(itemName){
    return JSON.parse(localStorage.getItem(itemName))
} 