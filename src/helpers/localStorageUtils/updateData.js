import { getLocalStorageData } from './getData'

export function updateLocalStorageDataByName(updatedItemName, itemData, localStorageItemName) {
    const storageData = getLocalStorageData(localStorageItemName)
    const item = storageData.find(storageItem => storageItem.name === updatedItemName)

    if (item) {      
        const newstorageData = storageData.map(item => {
            if (item.name === updatedItemName) {            
                return itemData
            }
            return item
        })
        localStorage.removeItem(localStorageItemName)
        localStorage.setItem(localStorageItemName, JSON.stringify(newstorageData))
    } else {
        console.log(`not found item "${updatedItemName}"`);
    }
}