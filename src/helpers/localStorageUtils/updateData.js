import { getLocalStorageData } from './getData'
import { setLocalStorageData } from './setData';

export function updateLocalStorageDataByName(updatedItemName, itemData, localStorageItemName) {
    const storageData = getLocalStorageData(localStorageItemName)
    const item = storageData.find(storageItem => storageItem.name === updatedItemName)

    console.log('не измененный лс ', storageData)
    if (item) {      
        const newstorageData = storageData.map(item => {
            if (item.name === updatedItemName) {            
                return itemData
            }
            return item
        })
        console.log('измененный лс ', newstorageData)
        // todo: need to remove current local storage 'myBank'.
        setLocalStorageData(newstorageData, 'myBank')
    } else {
        console.log(`not found item "${updatedItemName}"`);
    }
}