const storeItem = (task) => {
    let added
    if (localStorage.getItem('Azil_cart') === null) {
        added = []
        added.push(task)
    } else {
        added = JSON.parse(localStorage.getItem('Azil_cart'))
        added.push(task)
    }
    localStorage.setItem('Azil_cart', JSON.stringify(added))
}

const getItem = () => {
    let items = JSON.parse(localStorage.getItem('Azil_cart'))
    return items
}

export { storeItem, getItem }
