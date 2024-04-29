export interface SidbarItem {
    id: number ,
    text : string ,
    icon : string ,
    path : string
    submenu : {
        id? : string,
        text ?: string,
        path ?: string
        items? :{
            id? : string,
        text ?: string,
        path ?: string
        }[]
    }[]
}
