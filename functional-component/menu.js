function buildMenu(menuItems) {
    const menu = document.createElement('menu');

    menu.innerHTML = `
        <ul>${menuItems.map(buildItem).join('')}</ul>
    `

    return menu
}

function buildItem(item){
    return !item ? '<hr>' : `
        <li>
            <span>${item.label}</span>
            <ul>${item.items.map(buildSubItem).join('')}</ul>
        </li>
    `
}

function buildSubItem(item){
    return !item ? '<hr>' : `<li>${item}</li>`
}