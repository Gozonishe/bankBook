import { getLocalStorageData } from './getData'

export function setLocalStorageData(data, itemName) {
    const storageData = getLocalStorageData(itemName)
    const newStorage = storageData === null ? [] : storageData.slice() 
    newStorage.push(data)
    localStorage.setItem(itemName, JSON.stringify(newStorage))
}