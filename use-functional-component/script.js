const menuItems = [
    {
        label: 'file',
        items: [
            'new',
            'open',
            'close',
            null,
            'exit',
        ],
    },
    {
        label: 'edit',
        items: [
            'undo',
            'redo',
            null,
            'cut',
            'copy',
            'paste',
        ],
    },
    {
        label: 'view',
        items: [
            'window mode',
            'fullscreen',
            null,
            'appearance',
            'layout',
        ],
    },
    {
        label: 'window',
        items: [
            'minimize',
            'zoom',
        ],
    },
    null,
    {
        label: 'help',
        items: [
            'welcome',
            'about',
            'documentation',
        ],
    },
];

const menu = buildMenu(menuItems);

header.append(menu);