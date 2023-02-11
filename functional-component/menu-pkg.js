let stylesAdded = false;
const rules = `
menu>ul {
    display: flex;
}

menu span {
    padding: 5px;
}

menu li>ul {
    position: absolute;
}

menu :not(:hover)>ul {
    display: none;
}
`.split('\n\n');


function buildMenu(menuItems) {
    const menu = document.createElement('menu');

    menu.innerHTML = `
        <ul>${menuItems.map(buildItem).join('')}</ul>
    `
    if (!stylesAdded) {
        const sheet = document.styleSheets[0]
            || document.head.appendChild(document.createElement('style')).sheet

        rules.forEach(rule => sheet.insertRule(rule, sheet.cssRules.length))
        stylesAdded = true
    }

    return menu
}

function buildItem(item) {
    return !item ? '<hr>' : `
        <li>
            <span>${item.label}</span>
            <ul>${item.items.map(buildSubItem).join('')}</ul>
        </li>
    `
}

function buildSubItem(item) {
    return !item ? '<hr>' : `<li>${item}</li>`
}