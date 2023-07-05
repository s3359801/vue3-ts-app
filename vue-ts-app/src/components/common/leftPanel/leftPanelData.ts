import { leftPanelTitle } from "@/type/leftPanel/leftPanel"
export const leftPanelList: leftPanelTitle[] = [
    {
        name: 'Dashboard',
        childrens: [
            {
                id: 11,
                name: '系统介绍',
                routerName: 'introduce'
            },
            {
                id: 12,
                name: 'Dashboard',
                routerName: 'dashboard'
            },
            {
                id: 13,
                name: '添加商品',
                routerName: 'addShop'
            }
        ]
    },
    {
        name: '首页配置',
        childrens: [
            {
                id: 21,
                name: '轮播图设置',
                routerName: 'swiper'
            },
            {
                id: 22,
                name: '热销商品设置',
                routerName: 'hot'
            },
            {
                id: 23,
                name: '新品上线配置',
                routerName: 'new'
            }
        ]
    }
] 