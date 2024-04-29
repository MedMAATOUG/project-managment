export interface GaleryEventItem {
    title : string
    icon : string,
    indicators : {
        topic : number ,
        min : number ,
        students : number ,
        speakers : number
    },
    colors : {base : string , background : string}

}
