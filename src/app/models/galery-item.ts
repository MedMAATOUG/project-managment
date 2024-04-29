import { CourseInfo } from "./course-info"

export interface GaleryItem {
    title : string ,
    inducator : {
        topic : number , 
        min : number ,
        speakers : number,
        student : number
    },
    chartData : CourseInfo[]

}
