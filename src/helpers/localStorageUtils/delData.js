import { getLocalStorageData } from './getData'

export function delLocalStorageData(foundItemName, localStorageItemName) {
    const storageData = getLocalStorageData(localStorageItemName)  
    const newStorage = storageData.filter(item => item.name !== foundItemName )
    localStorage.setItem(localStorageItemName, JSON.stringify(newStorage))
}