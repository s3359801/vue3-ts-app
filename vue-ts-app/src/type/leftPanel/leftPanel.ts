export interface leftPanelItem {
    name: string,
    id: number,
    routerName: string,
    icon?: string
}

export interface leftPanelTitle {
    name: string,
    children: leftPanelItem[]
}