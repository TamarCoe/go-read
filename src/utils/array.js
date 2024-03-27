
//add new item
const addItem = (array, index, newItem) => {
    const newArray = [
        ...array.slice(0, index),
        newItem,
        ...array.slice(index)
    ];

    return newArray
}

const changeItem = (array, index, newItem) => {
    const newArray = [...array]
    newArray[index] = newItem
    return newArray
}

export { addItem, changeItem }